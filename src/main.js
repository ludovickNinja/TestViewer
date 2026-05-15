// ----------------------------------------------------------------------------
// main.js — entry point for the VIEWER page (/viewer/)
// ----------------------------------------------------------------------------
// What this file does, top to bottom:
//   1. Mounts the empty layout (header, stage, overlay, controls, thumbs).
//   2. Reads ?id=... from the URL. If missing -> "No preview selected." error.
//   3. Builds the asset URLs (model + 4 thumbnails) for that ID.
//   4. Creates the Three.js scene and starts the render loop.
//   5. Wires up the floating controls and the bottom thumbnail strip.
//   6. Loads the .glb. On success, frames the model. On failure -> "Preview
//      not found." error.
//   7. Cleans up GPU resources before the page unloads.
//
// There is intentionally NO download button anywhere in the UI.
// ----------------------------------------------------------------------------

import './styles/base.css';
import './styles/viewer.css';

import { createHeader } from './components/Header.js';
import { createViewerLayout } from './components/ViewerLayout.js';
import { createLoadingOverlay } from './components/LoadingOverlay.js';
import { createErrorState } from './components/ErrorState.js';
import { createThumbnailStrip } from './components/ThumbnailStrip.js';
import { createViewerControls } from './components/ViewerControls.js';

import { createScene } from './three/createScene.js';
import { loadModel } from './three/loadModel.js';
import { fitCameraToObject, frameModel } from './three/fitCameraToObject.js';
import {
  CAMERA_VIEWS,
  DEFAULT_VIEW,
  computeViewPosition,
  transitionCameraTo
} from './three/cameraViews.js';
import { disposeScene } from './three/disposeScene.js';
import { createInspector } from './three/inspector.js';
import {
  fetchMaterialOverrides,
  readMaterialOverridesFromUrl,
  readModelIdFromUrl,
  resolveModel
} from './services/modelService.js';
import materialPresets from './data/materialPresets.json';

const DEBUG = new URLSearchParams(window.location.search).get('debug') === '1';

// The viewer page lives at /viewer/index.html, so the logo in /branding/
// is one level up.
const baseUrl = import.meta.env.BASE_URL ?? '/';
const logoUrl = `${baseUrl}branding/noam-carver-logo.svg`;

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  // ---- 1. Build the empty layout ----
  const layout = createViewerLayout();
  appRoot.appendChild(layout.root);

  const header = createHeader(logoUrl);
  layout.headerSlot.appendChild(header.element);

  // ---- 2. Read & validate the ID from the URL ----
  const id = readModelIdFromUrl();
  if (!id) {
    layout.overlay.appendChild(
      createErrorState({
        title: 'No preview selected.',
        message: 'This preview link is missing or invalid. Please use the link provided to you.'
      })
    );
    return;
  }

  // ---- 3. Build asset URLs and show the model name in the header ----
  const resolved = resolveModel(id);
  header.setModelName(resolved.displayName);

  // ---- 4. Spin up Three.js ----
  const viewer = createScene(layout.stage);
  const loading = createLoadingOverlay();
  layout.overlay.appendChild(loading.element);

  // Debug inspector — only mounted with ?debug=1.
  const inspector = DEBUG ? createInspector(viewer) : null;

  // ---- 5. Floating controls + thumbnail strip ----
  const controls = createViewerControls({
    onToggleAutoRotate: (enabled) => {
      // OrbitControls has built-in auto-rotate; we just toggle the flag.
      viewer.controls.autoRotate = enabled;
      // Render loop is on-demand; kick a frame so the rotation actually
      // starts. Once running, drawFrame's `controls.autoRotate` check keeps
      // it pumping until the flag flips back to false.
      if (enabled) viewer.requestRender();
    },
    onResetView: () => {
      void goToView(DEFAULT_VIEW);
    },
    onToggleFullscreen: () => toggleFullscreen(layout.root)
  });
  layout.controlsSlot.appendChild(controls.element);

  const thumbStrip = createThumbnailStrip({
    thumbnails: resolved.thumbnails,
    onSelect: (viewId) => void goToView(viewId)
  });
  layout.thumbnailsSlot.appendChild(thumbStrip.element);
  thumbStrip.setActive(DEFAULT_VIEW);

  // Some browsers (mainly older Safari) use webkit-prefixed fullscreen APIs.
  const fullscreenSupported =
    !!document.fullscreenEnabled || !!document.webkitFullscreenEnabled;
  controls.setFullscreenAvailable(fullscreenSupported);
  document.addEventListener('fullscreenchange', () => {
    controls.setFullscreenActive(document.fullscreenElement === layout.root);
  });

  // ---- 6. Resize handling ----
  // The renderer needs to know whenever its container changes size.
  // ResizeObserver covers most cases (orientation change, sidebar toggles),
  // and we add a window 'resize' listener as a belt-and-suspenders safeguard.
  const resize = () => {
    const rect = layout.stage.getBoundingClientRect();
    viewer.setSize(rect.width, rect.height);
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(layout.stage);
  window.addEventListener('resize', resize);

  // ---- Camera preset switching ----
  // `activeFrame` is set after the model loads. It holds the model's size
  // info, which the camera presets need.
  /** @type {import('./three/fitCameraToObject.js').ModelFrame | null} */
  let activeFrame = null;

  async function goToView(viewId) {
    if (!activeFrame) return; // model not loaded yet
    const def = CAMERA_VIEWS.find((v) => v.id === viewId);
    if (!def) return;
    const target = computeViewPosition(def, viewer.camera, activeFrame);
    thumbStrip.setActive(viewId);
    await transitionCameraTo(viewer.camera, viewer.controls, target, activeFrame.center, 600);
  }

  // Start rendering even before the model loads, so the canvas resizes
  // smoothly during loading and we don't see a flicker on appearance.
  viewer.start();

  // ---- 7. Load the .glb ----
  loading.show('Loading preview');
  loading.setProgress(Number.NaN);

  const abort = new AbortController();

  // Fetch the optional material-overrides sidecar in parallel with the model
  // so we can apply it as soon as both arrive. 404 is fine — it just means no
  // overrides have been authored for this model yet.
  //
  // URL-supplied overrides (?material=NAME:VALUE) layer on top of the sidecar
  // so a link can recolor a piece without editing JSON. The URL wins on
  // collision — that's the whole point of the parameter.
  const urlOverrides = readMaterialOverridesFromUrl(window.location.search, materialPresets);
  const overridesPromise = fetchMaterialOverrides(resolved.materialOverridesUrl).then(
    (sidecar) => mergeOverrides(sidecar, urlOverrides)
  );

  Promise.all([
    loadModel({
      url: resolved.modelUrl,
      signal: abort.signal,
      onProgress: ({ ratio }) => loading.setProgress(ratio)
    }),
    overridesPromise
  ])
    .then(([{ root }, overrides]) => {
      const frame = frameModel(root);
      activeFrame = frame;
      viewer.scene.add(root);
      // Assign the metal vs gem HDR per material, then apply the sidecar
      // overrides on top. Size-scoped props in overrides (thickness,
      // attenuationDistance) are scaled by the model's bounding radius so
      // they don't go saturated/uniform on millimetre-scale exports or
      // diluted on metre-scale ones.
      void viewer.applyMaterialEnvironments(root, overrides, frame.radius);
      fitCameraToObject(viewer.camera, viewer.controls, frame);
      thumbStrip.setActive(DEFAULT_VIEW);
      loading.hide();
      inspector?.attach(root, {
        modelId: id,
        initialOverrides: overrides,
        scale: frame.radius
      });
    })
    .catch((err) => {
      // Log details for us, but show only a friendly message to the customer.
      console.error('[viewer] failed to load model', err);
      loading.hide();
      layout.overlay.appendChild(
        createErrorState({
          title: 'Preview not found.',
          message: 'We could not load this preview. Please contact your jeweler for an updated link.'
        })
      );
    });

  // ---- Cleanup ----
  // Free GPU memory on page unload. Without this, leaving the page can leak.
  window.addEventListener('beforeunload', () => {
    abort.abort();
    ro.disconnect();
    inspector?.dispose();
    disposeScene(viewer);
  });
}

/**
 * Cross-browser fullscreen toggle.
 * @param {HTMLElement} target
 */
function toggleFullscreen(target) {
  const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;

  if (isFullscreen) {
    if (document.exitFullscreen) {
      void document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      void document.webkitExitFullscreen();
    }
    return;
  }

  if (target.requestFullscreen) {
    void target.requestFullscreen();
  } else if (target.webkitRequestFullscreen) {
    void target.webkitRequestFullscreen();
  }
}

/**
 * Shallow-merge two override maps. Each map is `{ [name]: { ...props } }`; the
 * inner objects are merged per-key so a URL override can recolor a material
 * without dropping the sidecar's envMap/metalness/etc. Returns null when both
 * sides are empty so callers can keep their "no overrides" fast path.
 *
 * @param {Record<string, Record<string, unknown>> | null} a
 * @param {Record<string, Record<string, unknown>> | null} b - Wins on collision.
 */
function mergeOverrides(a, b) {
  if (!a && !b) return null;
  if (!a) return b;
  if (!b) return a;
  const out = { ...a };
  for (const [name, props] of Object.entries(b)) {
    out[name] = { ...(out[name] || {}), ...props };
  }
  return out;
}

mount();
