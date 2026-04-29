// ----------------------------------------------------------------------------
// cameraViews.js
// ----------------------------------------------------------------------------
// Defines the four preset camera angles shown in the bottom thumbnail strip
// (Front / Side / Top / Perspective) and provides a smooth tween to move
// between them.
//
// Because the viewer recenters every model at the origin, picking a preset
// is just "place the camera somewhere along this direction, far enough back
// to see the whole model."
// ----------------------------------------------------------------------------

import { Vector3 } from 'three';

/**
 * @typedef {'front' | 'side' | 'top' | 'perspective'} CameraViewId
 */

/**
 * @typedef {Object} CameraViewDefinition
 * @property {CameraViewId} id
 * @property {string} label - Human-readable name for the UI.
 * @property {Vector3} direction - Direction from the model to the camera.
 */

/** @type {CameraViewDefinition[]} */
export const CAMERA_VIEWS = [
  { id: 'front',       label: 'Front',       direction: new Vector3(0, 0, 1) },
  { id: 'side',        label: 'Side',        direction: new Vector3(1, 0, 0) },
  // Tiny z component on TOP avoids the OrbitControls "gimbal lock" feeling
  // you get when the camera looks straight down.
  { id: 'top',         label: 'Top',         direction: new Vector3(0, 1, 0.001) },
  { id: 'perspective', label: 'Perspective', direction: new Vector3(1, 0.7, 1) }
];

/** The view we land on after load and after "reset view". */
export const DEFAULT_VIEW = 'perspective';

/**
 * Compute the world-space camera position for a given preset.
 *
 * @param {CameraViewDefinition} view
 * @param {import('three').PerspectiveCamera} camera
 * @param {import('./fitCameraToObject.js').ModelFrame} frame
 * @param {number} [fitOffset=1.45]
 * @returns {Vector3}
 */
export function computeViewPosition(view, camera, frame, fitOffset = 1.45) {
  const fov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect || 1;
  const vertical = frame.radius / Math.sin(fov / 2);
  const horizontal = frame.radius / Math.sin(Math.atan(Math.tan(fov / 2) * aspect));
  const distance = Math.max(vertical, horizontal) * fitOffset;

  const dir = view.direction.clone().normalize();
  return frame.center.clone().addScaledVector(dir, distance);
}

/**
 * Smoothly tween the camera's position and OrbitControls target to new values.
 * Uses a tiny RAF loop with cubic ease-out — no extra animation library needed.
 *
 * @param {import('three').PerspectiveCamera} camera
 * @param {import('three/examples/jsm/controls/OrbitControls.js').OrbitControls} controls
 * @param {Vector3} targetPosition
 * @param {Vector3} targetLookAt
 * @param {number} [durationMs=600]
 * @returns {Promise<void>} Resolves when the tween finishes.
 */
export function transitionCameraTo(camera, controls, targetPosition, targetLookAt, durationMs = 600) {
  return new Promise((resolve) => {
    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();
    const start = performance.now();

    // Ease-out cubic: starts fast, slows down. Feels premium.
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const t = Math.min(1, (now - start) / durationMs);
      const e = ease(t);
      camera.position.lerpVectors(startPos, targetPosition, e);
      controls.target.lerpVectors(startTarget, targetLookAt, e);
      controls.update();

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}
