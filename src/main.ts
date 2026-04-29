import './styles/base.css';
import './styles/viewer.css';

import { createHeader } from './components/Header';
import { createViewerLayout } from './components/ViewerLayout';
import { createLoadingOverlay } from './components/LoadingOverlay';
import { createErrorState } from './components/ErrorState';
import { createThumbnailStrip } from './components/ThumbnailStrip';
import { createViewerControls } from './components/ViewerControls';

import { createScene } from './three/createScene';
import { loadModel } from './three/loadModel';
import { fitCameraToObject, frameModel, type ModelFrame } from './three/fitCameraToObject';
import {
  CAMERA_VIEWS,
  DEFAULT_VIEW,
  computeViewPosition,
  transitionCameraTo,
  type CameraViewId
} from './three/cameraViews';
import { disposeScene } from './three/disposeScene';
import { readModelIdFromUrl, resolveModel } from './services/modelService';

const baseUrl = import.meta.env.BASE_URL ?? '/';
const logoUrl = `${baseUrl}branding/noam-carver-logo.svg`;

function mount(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  const layout = createViewerLayout();
  appRoot.appendChild(layout.root);

  const header = createHeader(logoUrl);
  layout.headerSlot.appendChild(header.element);

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

  const resolved = resolveModel(id);
  header.setModelName(resolved.displayName);

  // Build scene + UI
  const viewer = createScene(layout.stage);
  const loading = createLoadingOverlay();
  layout.overlay.appendChild(loading.element);

  const controls = createViewerControls({
    onToggleAutoRotate: (enabled) => {
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

  // Fullscreen wiring
  const fullscreenSupported =
    !!document.fullscreenEnabled || !!(document as Document & { webkitFullscreenEnabled?: boolean }).webkitFullscreenEnabled;
  controls.setFullscreenAvailable(fullscreenSupported);
  document.addEventListener('fullscreenchange', () => {
    controls.setFullscreenActive(document.fullscreenElement === layout.root);
  });

  // Resize handling
  const resize = () => {
    const rect = layout.stage.getBoundingClientRect();
    viewer.setSize(rect.width, rect.height);
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(layout.stage);
  window.addEventListener('resize', resize);

  let activeFrame: ModelFrame | null = null;

  async function goToView(viewId: CameraViewId): Promise<void> {
    if (!activeFrame) return;
    const def = CAMERA_VIEWS.find((v) => v.id === viewId);
    if (!def) return;
    const target = computeViewPosition(def, viewer.camera, activeFrame);
    thumbStrip.setActive(viewId);
    await transitionCameraTo(viewer.camera, viewer.controls, target, activeFrame.center, 600);
  }

  // Start the render loop (renders even before model is loaded so resize works smoothly).
  viewer.start();

  // Kick off model load
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
      // Preserve a useful console trace for debugging without showing details to customers.
      // eslint-disable-next-line no-console
      console.error('[viewer] failed to load model', err);
      loading.hide();
      layout.overlay.appendChild(
        createErrorState({
          title: 'Preview not found.',
          message: 'We could not load this preview. Please contact your jeweler for an updated link.'
        })
      );
    });

  // Cleanup on page unload (defensive — disposes GPU resources).
  window.addEventListener('beforeunload', () => {
    abort.abort();
    ro.disconnect();
    disposeScene(viewer);
  });
}

function toggleFullscreen(target: HTMLElement): void {
  const doc = document as Document & {
    webkitExitFullscreen?: () => Promise<void>;
  };
  const el = target as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
  };

  if (document.fullscreenElement || (document as { webkitFullscreenElement?: Element }).webkitFullscreenElement) {
    if (document.exitFullscreen) {
      void document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      void doc.webkitExitFullscreen();
    }
    return;
  }

  if (el.requestFullscreen) {
    void el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    void el.webkitRequestFullscreen();
  }
}

mount();
