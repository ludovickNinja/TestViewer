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
import { readModelIdFromUrl, resolveModel } from './services/modelService.js';

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

  // ---- 5. Floating controls + thumbnail strip ----
  const controls = createViewerControls({
    onToggleAutoRotate: (enabled) => {
      // OrbitControls has built-in auto-rotate; we just toggle the flag.
      viewer.controls.autoRotate = enabled;
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

  loadModel({
    url: resolved.modelUrl,
    signal: abort.signal,
    onProgress: ({ ratio }) => loading.setProgress(ratio)
  })
    .then(({ root }) => {
      const frame = frameModel(root);
      activeFrame = frame;
      viewer.scene.add(root);
      fitCameraToObject(viewer.camera, viewer.controls, frame);
      thumbStrip.setActive(DEFAULT_VIEW);
      loading.hide();
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

mount();
