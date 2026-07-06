// ----------------------------------------------------------------------------
// main.js — entry point for the VIEWER page (/viewer/)
// ----------------------------------------------------------------------------
// What this file does, top to bottom:
//   1. Mounts the empty layout (header, stage, overlay, controls, thumbs).
//   2. Reads ?id=... from the URL. If missing -> "No preview selected." error.
//   3. Builds the asset URLs for that ID (model GLB + optional overrides).
//   4. Creates the Three.js scene and starts the render loop.
//   5. Wires up the floating controls and the bottom thumbnail strip.
//   6. Loads the .glb. On success, frames the model. On failure -> "Preview
//      not found." error.
//   7. Cleans up GPU resources before the page unloads.
//
// The bottom strip is flanked by two download buttons: the left one captures
// the current view, the right one captures all 4 preset angles. Both produce
// 1:1 square JPEGs.
// ----------------------------------------------------------------------------

import './styles/base.css';
import './styles/viewer.css';
import './styles/ar.css';

import { createHeader } from './components/Header.js';
import { createViewerLayout } from './components/ViewerLayout.js';
import { createLoadingOverlay } from './components/LoadingOverlay.js';
import { createErrorState } from './components/ErrorState.js';
import { createThumbnailStrip } from './components/ThumbnailStrip.js';
import { createThumbnailActions } from './components/ThumbnailActions.js';
import { createViewerControls } from './components/ViewerControls.js';
import { createPartSelector } from './components/PartSelector.js';

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
  captureAllAngles,
  captureCurrentView,
  captureTurntableFrames,
  generateAngleThumbnails
} from './three/generateAngleThumbnails.js';
import { triggerDownload } from './three/triggerDownload.js';
import { applyPartVisibility, detectRingParts } from './three/ringParts.js';
import { createARController } from './ar/arController.js';
import { isTryOnSupported } from './ar/cameraStream.js';
import {
  fetchMaterialOverrides,
  readModelIdFromUrl,
  readShowFromUrl,
  resolveModel,
  writeShowToUrl
} from './services/modelService.js';

const viewerParams = new URLSearchParams(window.location.search);
const DEBUG = viewerParams.get('debug') === '1';
// Embed mode (?embed=1) strips the page chrome — header, bottom thumbnail
// strip, and the screenshot/download buttons — leaving just the 3D stage and
// its floating orbit/reset/fullscreen controls. Intended for dropping the
// viewer into an <iframe> on a product page.
const EMBED = viewerParams.get('embed') === '1';

// The viewer page lives at /viewer/index.html, so the logo in /branding/
// is one level up.
const baseUrl = import.meta.env.BASE_URL ?? '/';
const logoUrl = `${baseUrl}branding/noam-carver-logo.svg`;

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  // ---- 1. Build the empty layout ----
  const layout = createViewerLayout();
  if (EMBED) layout.root.classList.add('nc-app--embed');
  appRoot.appendChild(layout.root);

  // The header is skipped entirely in embed mode (see EMBED note above).
  const header = EMBED ? null : createHeader(logoUrl);
  if (header) layout.headerSlot.appendChild(header.element);

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
  header?.setModelName(resolved.displayName);

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
    onToggleTryOn: async (active) => {
      // Lazily build the AR controller on first use (its MediaPipe import is
      // lazy too, so nothing AR-related loads until the customer opts in).
      if (!ar) {
        ar = createARController({
          viewer,
          stage: layout.stage,
          getRoot: () => activeRoot,
          getFrame: () => activeFrame,
          isMobile: viewer.isMobile,
          // Keep the toolbar button in sync when AR exits on its own (the
          // overlay's "Back to viewer" button, or a setup error being dismissed).
          onExit: () => controls.setTryOnActive(false)
        });
      }
      if (active) {
        if (!activeRoot || !activeFrame) {
          controls.setTryOnActive(false);
          return;
        }
        try {
          await ar.enter();
        } catch (err) {
          console.error('[viewer] failed to enter try-on', err);
          controls.setTryOnActive(false);
        }
      } else {
        ar.exit();
      }
    },
    onToggleFullscreen: () => toggleFullscreen(layout.root)
  });
  layout.controlsSlot.appendChild(controls.element);

  // In embed mode the bottom strip and the screenshot/download buttons are
  // omitted; `goToView` and the load handler below guard on these being null.
  const thumbStrip = EMBED
    ? null
    : createThumbnailStrip({
        onSelect: (viewId) => void goToView(viewId)
      });

  const thumbActions = EMBED ? null : createThumbnailActions({
    onScreenshot: () => {
      if (!activeFrame) return;
      try {
        const dataUrl = captureCurrentView(viewer);
        triggerDownload(dataUrl, `${id}-view.jpg`);
      } catch (err) {
        console.error('[viewer] screenshot capture failed', err);
      }
    },
    onDownloadAll: () => {
      if (!activeFrame) return;
      try {
        const captures = captureAllAngles(viewer, activeFrame);
        // Stagger so the browser shows its "allow multiple downloads"
        // confirmation once and then accepts the rest as a batch instead of
        // collapsing all 4 anchor clicks into a single download.
        CAMERA_VIEWS.forEach((view, i) => {
          const url = captures[view.id];
          if (!url) return;
          setTimeout(() => triggerDownload(url, `${id}-${view.id}.jpg`), i * 250);
        });
      } catch (err) {
        console.error('[viewer] download-all capture failed', err);
      }
    }
  });

  if (thumbActions && thumbStrip) {
    layout.thumbnailsSlot.appendChild(thumbActions.leading);
    layout.thumbnailsSlot.appendChild(thumbStrip.element);
    layout.thumbnailsSlot.appendChild(thumbActions.trailing);
    thumbStrip.setActive(DEFAULT_VIEW);
  }

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
  // info, which the camera presets need. `activeRoot` is the loaded ring group,
  // hoisted so the AR try-on controller can drive its transform.
  /** @type {import('./three/fitCameraToObject.js').ModelFrame | null} */
  let activeFrame = null;
  /** @type {import('three').Object3D | null} */
  let activeRoot = null;
  /** @type {ReturnType<typeof createARController> | null} */
  let ar = null;

  async function goToView(viewId) {
    if (!activeFrame) return; // model not loaded yet
    const def = CAMERA_VIEWS.find((v) => v.id === viewId);
    if (!def) return;
    const target = computeViewPosition(def, viewer.camera, activeFrame);
    thumbStrip?.setActive(viewId);
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
  const overridesPromise = fetchMaterialOverrides(resolved.materialOverridesUrl);

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
      activeRoot = root;
      viewer.scene.add(root);
      // Assign the metal vs gem HDR per material, then apply the sidecar
      // overrides on top. Size-scoped props in overrides (thickness,
      // attenuationDistance) are scaled by the model's bounding radius so
      // they don't go saturated/uniform on millimetre-scale exports or
      // diluted on metre-scale ones.
      const envsApplied = viewer.applyMaterialEnvironments(root, overrides, frame.radius);
      fitCameraToObject(viewer.camera, viewer.controls, frame);
      thumbStrip?.setActive(DEFAULT_VIEW);
      thumbActions?.setEnabled(true);
      // Reveal the "Try it on" AR button now that there's a model to place on
      // a finger — but only where the camera API is actually usable.
      controls.setTryOnAvailable(isTryOnSupported());
      loading.hide();

      // Re-render the bottom-strip thumbnails from the live scene. Called
      // after the HDR environments resolve, every time the part selector
      // flips between engagement / band / both, and (debounced) whenever the
      // debug inspector tweaks a material — so the strip always matches what
      // the customer is actually looking at.
      let thumbnailJobToken = 0;
      function regenerateThumbnails() {
        if (!activeFrame) return;
        // No strip in embed mode — skip the offscreen angle renders entirely
        // and just make sure the live model gets drawn.
        if (!thumbStrip) {
          viewer.requestRender();
          return;
        }
        const job = ++thumbnailJobToken;
        try {
          const thumbs = generateAngleThumbnails(viewer, activeFrame);
          if (job !== thumbnailJobToken) return; // a newer run superseded us
          for (const view of CAMERA_VIEWS) {
            const url = thumbs[view.id];
            if (url) thumbStrip.setThumbnail(view.id, url);
          }
          // Premium touch: the Perspective tile gets a 12-frame turntable
          // that plays on hover/focus by swapping the <img> src through each
          // pre-rendered frame, so the ring stays centered in the tile.
          // A slow ~8fps spin (≈1.5s per revolution) keeps it calm and elegant
          // rather than frantic. Skipped on reduced-motion displays inside
          // setTurntable.
          const perspective = CAMERA_VIEWS.find((v) => v.id === 'perspective');
          if (perspective) {
            const turntable = captureTurntableFrames(viewer, activeFrame, perspective);
            if (job === thumbnailJobToken && turntable.length >= 2) {
              thumbStrip.setTurntable('perspective', turntable, { fps: 8 });
            }
          }
        } catch (err) {
          console.warn('[viewer] thumbnail regeneration failed', err);
        }
        viewer.requestRender();
      }

      // If the GLB exposes both an engagement-ring group and a matching-band
      // group, show a small dropdown that lets the customer pick which part
      // is visible. The ?show=engagement|band|all URL param seeds the initial
      // choice; toggling the dropdown mirrors the choice back into the URL so
      // a shared link reproduces the same state, AND re-renders the bottom
      // strip so its tiles only show whatever part is currently visible.
      const parts = detectRingParts(root);
      if (parts.engagement && parts.band) {
        const initial = readShowFromUrl() ?? 'all';
        applyPartVisibility(parts, initial);
        viewer.requestRender();
        const selector = createPartSelector({
          initial,
          onChange: (value) => {
            applyPartVisibility(parts, value);
            writeShowToUrl(value);
            viewer.requestRender();
            regenerateThumbnails();
          }
        });
        layout.partSelectorSlot.appendChild(selector.element);
      } else if (readShowFromUrl()) {
        // Only one (or neither) part is named, so the ?show= param has nothing
        // to act on. Clear it so the URL bar reflects what's actually visible.
        writeShowToUrl('all');
      }

      // Debounced inspector-driven re-render. lil-gui's onChange fires for
      // every slider tick; 350 ms is long enough that dragging a roughness
      // slider doesn't thrash but short enough that a single click-and-release
      // tweak appears in the strip almost immediately.
      let inspectorRegenTimer = 0;
      const scheduleInspectorRegen = () => {
        clearTimeout(inspectorRegenTimer);
        inspectorRegenTimer = window.setTimeout(regenerateThumbnails, 350);
      };

      inspector?.attach(root, {
        modelId: id,
        initialOverrides: overrides,
        scale: frame.radius,
        onChange: scheduleInspectorRegen
      });

      // Once the HDR environments have been resolved onto every material,
      // render the model from each preset angle and use the resulting JPEG
      // data URLs as the bottom-strip thumbnails. This replaces the F/S/T/P
      // placeholders with a live snapshot of the actual loaded model — the
      // viewer keeps no thumbnail files on the server.
      envsApplied
        .then(() => {
          regenerateThumbnails();
        })
        .catch((err) => {
          console.warn('[viewer] angle thumbnail generation failed', err);
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
    // Release the camera + hand tracker and restore scene state before we tear
    // down the renderer.
    ar?.exit();
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

mount();
