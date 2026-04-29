// ----------------------------------------------------------------------------
// fitCameraToObject.js
// ----------------------------------------------------------------------------
// Two helpers that play nicely together:
//
//   frameModel(object)
//     Measures the model's bounding box, recenters it on the world origin,
//     and returns its size + radius so the camera can pick a sensible
//     distance regardless of whether the model is a tiny stud or a big cuff.
//
//   fitCameraToObject(camera, controls, frame)
//     Moves the camera back far enough that the whole model fits in view,
//     points OrbitControls at the model center, and tightens the
//     min/max zoom limits so the customer can't zoom into nothing.
// ----------------------------------------------------------------------------

import { Box3, Vector3 } from 'three';

/**
 * @typedef {Object} ModelFrame
 * @property {Vector3} center - Always (0,0,0) since we recenter the model.
 * @property {Vector3} size   - Model bounding box width/height/depth.
 * @property {number} radius  - Half of the longest axis.
 */

/**
 * Recenter `object` at the world origin and return its measured size.
 * @param {import('three').Object3D} object
 * @returns {ModelFrame}
 */
export function frameModel(object) {
  const box = new Box3().setFromObject(object);
  const size = new Vector3();
  const center = new Vector3();
  box.getSize(size);
  box.getCenter(center);

  // Shift the model so its center sits at (0,0,0). That makes the camera
  // preset math (front / side / top / perspective) trivial.
  object.position.sub(center);

  const radius = Math.max(size.x, size.y, size.z) * 0.5;

  return {
    center: new Vector3(0, 0, 0),
    size,
    // A tiny floor on radius prevents divide-by-zero on degenerate models.
    radius: radius || 0.05
  };
}

/**
 * Position `camera` so the whole model fits nicely on screen.
 *
 * @param {import('three').PerspectiveCamera} camera
 * @param {import('three/examples/jsm/controls/OrbitControls.js').OrbitControls} controls
 * @param {ModelFrame} frame
 * @param {number} [fitOffset=1.4] - Padding factor; >1 leaves breathing room.
 * @returns {number} The chosen camera distance (handy for other code).
 */
export function fitCameraToObject(camera, controls, frame, fitOffset = 1.4) {
  // Compute how far back the camera needs to be so that the model's radius
  // fits inside the camera's vertical AND horizontal field of view.
  const fov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect || 1;
  const verticalDistance = frame.radius / Math.sin(fov / 2);
  const horizontalDistance = frame.radius / Math.sin(Math.atan(Math.tan(fov / 2) * aspect));
  const distance = Math.max(verticalDistance, horizontalDistance) * fitOffset;

  // Default initial framing: a flattering three-quarter ("perspective") view.
  const direction = new Vector3(1, 0.7, 1).normalize();
  camera.position.copy(frame.center).addScaledVector(direction, distance);

  // Adjust near/far clipping planes so we don't accidentally clip the model.
  camera.near = Math.max(distance / 1000, 0.001);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();

  // Aim OrbitControls at the model and clamp zoom-in / zoom-out.
  controls.target.copy(frame.center);
  controls.minDistance = distance * 0.2;
  controls.maxDistance = distance * 6;
  controls.update();

  return distance;
}
