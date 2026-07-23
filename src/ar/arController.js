// ----------------------------------------------------------------------------
// arController.js
// ----------------------------------------------------------------------------
// Orchestrates the AR "try-on" mode: camera + hand tracking + placing the
// already-loaded ring on the customer's finger, composited over the live
// video. It deliberately REUSES the viewer's existing scene, renderer, lights,
// HDR environments, and materials — so the ring looks pixel-identical to the
// product view — and only takes over the render loop and background while
// active.
//
// The ring node is temporarily reparented under a pivot Group we drive each
// frame. That matters: frameModel() recenters the ring so its geometric
// centre sits at the group's origin, so moving the *pivot* places that centre
// exactly on the finger (setting the ring node's own position would be off by
// its recenter offset). On exit the ring is reparented back untouched.
//
// Entering only commits to AR rendering AFTER the camera + detector are ready,
// so a permission denial or load failure leaves the normal product view
// intact behind the overlay's error message.
// ----------------------------------------------------------------------------

import {
  CylinderGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Quaternion,
  Vector3
} from 'three';
import { startCamera, stopCamera } from './cameraStream.js';
import { closeHandTracker, detectHands, loadHandLandmarker } from './handTracker.js';
import {
  computeRingTransform,
  estimateHoleRadius,
  holeAlignQuaternion
} from './ringPlacement.js';
import { createTryOnOverlay } from '../components/TryOnOverlay.js';

const AR_FOV_DEG = 50; // wider than the product camera's 10° — a natural "phone" fov
const SMOOTH_ALPHA = 0.4; // EMA/slerp factor: higher = snappier, lower = smoother
const HIDE_DELAY_MS = 150; // keep the ring visible briefly after a dropped frame

// Finger occluder proportions, in the ring model's own units (the occluder
// lives inside the scaled pivot). Radius hugs the ring's inner hole (slightly
// inside it to avoid z-fighting with the band's inner surface); the length
// extends well past the band on both sides so the whole far arc is masked.
const OCCLUDER_RADIUS_FACTOR = 0.95;
const OCCLUDER_LENGTH_FACTOR = 5;

/**
 * @param {object} deps
 * @param {ReturnType<import('../three/createScene.js').createScene>} deps.viewer
 * @param {HTMLElement} deps.stage - the .nc-stage element (video + overlay mount).
 * @param {() => import('three').Object3D | null} deps.getRoot - the loaded ring root.
 * @param {() => (import('../three/fitCameraToObject.js').ModelFrame | null)} deps.getFrame
 * @param {boolean} deps.isMobile
 * @param {boolean} [deps.calibration=false] - show internal calibration sliders.
 * @param {() => void} [deps.onExit] - called whenever an active session tears down.
 * @returns {{ enter: () => Promise<void>, exit: () => void, isActive: () => boolean }}
 */
export function createARController({
  viewer,
  stage,
  getRoot,
  getFrame,
  isMobile,
  calibration = false,
  onExit
}) {
  let active = false; // overlay is up (entering or running)
  let committed = false; // AR rendering has taken over
  let cancelled = false; // user closed during async setup
  let rafId = 0;

  let overlay = null;
  let video = null;
  let stream = null;
  let landmarker = null;
  let arCamera = null;
  let pivot = null;
  let occluder = null;

  // Saved product-mode state, restored on exit.
  let savedControlsEnabled = true;

  const smooth = {
    has: false,
    position: new Vector3(),
    quaternion: new Quaternion(),
    scale: 1
  };
  let lastSeen = 0;

  async function enter() {
    if (active) return;
    active = true;
    cancelled = false;

    const root = getRoot();
    const frame = getFrame();
    if (!root || !frame) {
      active = false;
      return;
    }

    // Overlay first, in "starting" state — the close button cancels setup.
    overlay = createTryOnOverlay({
      onClose: () => exit(),
      calibration
    });
    stage.appendChild(overlay.element);
    overlay.setStatus('Starting camera…');

    const facingMode = isMobile ? 'environment' : 'user';

    // Step 1 — camera. startCamera throws a tagged { code, message } with
    // customer-facing copy for denied / not-found / busy.
    try {
      ({ video, stream } = await startCamera({ facingMode }));
      if (cancelled) return;
    } catch (err) {
      const message =
        err && typeof err === 'object' && 'message' in err
          ? String(err.message)
          : 'We could not start the camera. Please try again.';
      overlay?.setError(message);
      return;
    }

    // Step 2 — hand tracker (lazy CDN import). A failure here is almost always
    // a network issue; keep the raw error in the console but show friendly copy.
    try {
      overlay.setStatus('Loading hand tracking…');
      landmarker = await loadHandLandmarker();
      if (cancelled) return;
    } catch (err) {
      console.error('[ar] hand tracking failed to load', err);
      overlay?.setError('Could not load hand tracking. Check your connection and try again.');
      stopCamera(stream);
      stream = null;
      video = null;
      return;
    }

    // ---- Commit to AR rendering ----
    committed = true;
    smooth.has = false;
    lastSeen = 0;

    savedControlsEnabled = viewer.controls.enabled;
    viewer.controls.enabled = false;
    viewer.stop();
    viewer.setTransparentBackground(true);

    const mirror = facingMode === 'user';
    video.className = mirror ? 'nc-ar__video nc-ar__video--mirror' : 'nc-ar__video';
    // Insert the video as the first stage child so it paints behind the canvas
    // (the nc-stage--ar class lifts the canvas above it).
    stage.insertBefore(video, stage.firstChild);
    stage.classList.add('nc-stage--ar');
    // Also flag the app root so the bottom thumbnail strip (a sibling of the
    // stage) can hide for a focused try-on view.
    stage.closest('.nc-app')?.classList.add('nc-app--ar');

    const rect = stage.getBoundingClientRect();
    arCamera = new PerspectiveCamera(AR_FOV_DEG, rect.width / Math.max(rect.height, 1), 0.01, 100);

    pivot = new Group();
    pivot.visible = false;
    viewer.scene.add(pivot);
    pivot.add(root); // reparent (keeps root's recenter transform)

    // Finger occluder: an invisible cylinder along the finger axis (pivot
    // local +Y = the ring's hole axis) that writes DEPTH but no color. The
    // far arc of the band fails the depth test behind it and the camera
    // video shows through instead — so the finger appears to pass through
    // the ring rather than the ring lying on top of the finger. Rendered
    // before the ring (renderOrder -1) so its depth is in place first.
    const holeRadius = estimateHoleRadius(frame);
    occluder = new Mesh(
      new CylinderGeometry(
        holeRadius * OCCLUDER_RADIUS_FACTOR,
        holeRadius * OCCLUDER_RADIUS_FACTOR,
        holeRadius * OCCLUDER_LENGTH_FACTOR,
        24
      ),
      new MeshBasicMaterial({ colorWrite: false })
    );
    occluder.renderOrder = -1;
    // The pivot's rotation includes the model's hole-axis alignment, so a
    // cylinder left at identity would follow the model's authoring axis, not
    // the finger, for non-Y-hole GLBs. Counter-rotate by the inverse of the
    // align so the cylinder's +Y axis always runs along the finger.
    occluder.quaternion.copy(holeAlignQuaternion(frame.size).invert());
    pivot.add(occluder);

    overlay.setStatus('Point your camera at your hand');
    loop();
  }

  function loop() {
    if (!committed) return;
    rafId = requestAnimationFrame(loop);

    const cw = stage.clientWidth;
    const ch = stage.clientHeight;
    const aspect = cw / Math.max(ch, 1);
    if (arCamera.aspect !== aspect) {
      arCamera.aspect = aspect;
      arCamera.updateProjectionMatrix();
    }

    const now = performance.now();
    const { landmarks, handedLabels } = detectHands(landmarker, video, now);
    const hand = landmarks[0];

    const adjust = overlay.getAdjust();
    const frame = getFrame();
    const transform = hand && frame
      ? computeRingTransform(hand, {
          fovYRad: (arCamera.fov * Math.PI) / 180,
          view: {
            containerW: cw,
            containerH: ch,
            videoW: video.videoWidth,
            videoH: video.videoHeight,
            mirror: video.classList.contains('nc-ar__video--mirror')
          },
          frame,
          handedLabel: handedLabels[0] ?? null,
          rollRad: adjust.rollRad,
          scaleMultiplier: adjust.scaleMultiplier,
          // Present only in ?arcal=1 mode; undefined falls back to
          // DEFAULT_CALIBRATION inside computeRingTransform.
          fingerWidthK: adjust.fingerWidthK,
          zDamp: adjust.zDamp
        })
      : null;

    if (transform) {
      applySmoothed(transform);
      pivot.visible = true;
      lastSeen = now;
      overlay.setTracking(true);
    } else if (now - lastSeen > HIDE_DELAY_MS) {
      pivot.visible = false;
      overlay.setTracking(false);
    }

    viewer.renderer.render(viewer.scene, arCamera);
  }

  function applySmoothed(t) {
    if (!smooth.has) {
      smooth.position.copy(t.position);
      smooth.quaternion.copy(t.quaternion);
      smooth.scale = t.scale;
      smooth.has = true;
    } else {
      smooth.position.lerp(t.position, SMOOTH_ALPHA);
      smooth.quaternion.slerp(t.quaternion, SMOOTH_ALPHA);
      smooth.scale += (t.scale - smooth.scale) * SMOOTH_ALPHA;
    }
    pivot.position.copy(smooth.position);
    pivot.quaternion.copy(smooth.quaternion);
    pivot.scale.setScalar(smooth.scale);
  }

  function exit() {
    if (!active) return;
    cancelled = true;
    active = false;

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }

    closeHandTracker(landmarker);
    landmarker = null;
    stopCamera(stream);
    stream = null;
    if (video && video.parentNode) video.parentNode.removeChild(video);
    video = null;

    if (committed) {
      committed = false;
      stage.classList.remove('nc-stage--ar');
      stage.closest('.nc-app')?.classList.remove('nc-app--ar');

      // Reparent the ring back to the scene (its local transform is untouched,
      // so it re-centres exactly as before) and drop the pivot + occluder.
      const root = getRoot();
      if (pivot) {
        if (root) viewer.scene.add(root);
        viewer.scene.remove(pivot);
      }
      if (occluder) {
        occluder.geometry.dispose();
        occluder.material.dispose();
      }
      occluder = null;
      pivot = null;
      arCamera = null;
      if (root) root.visible = true;

      viewer.setTransparentBackground(false);
      viewer.controls.enabled = savedControlsEnabled;
      viewer.start();
      viewer.requestRender();
    }

    if (overlay && overlay.element.parentNode) {
      overlay.element.parentNode.removeChild(overlay.element);
    }
    overlay = null;

    onExit?.();
  }

  function isActive() {
    return active;
  }

  return { enter, exit, isActive };
}
