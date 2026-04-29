import { Box3, Object3D, PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface ModelFrame {
  center: Vector3;
  size: Vector3;
  radius: number;
}

/**
 * Compute the bounding box and center of an object, recenter it in-place,
 * and return geometric info that camera presets can use.
 */
export function frameModel(object: Object3D): ModelFrame {
  const box = new Box3().setFromObject(object);
  const size = new Vector3();
  const center = new Vector3();
  box.getSize(size);
  box.getCenter(center);

  // Recenter the model at the world origin so camera presets are predictable.
  object.position.sub(center);

  const radius = Math.max(size.x, size.y, size.z) * 0.5;

  return {
    center: new Vector3(0, 0, 0),
    size,
    radius: radius || 0.05
  };
}

/**
 * Move the camera to frame the given model nicely.
 * Returns the computed distance so other code (presets) can reuse it.
 */
export function fitCameraToObject(
  camera: PerspectiveCamera,
  controls: OrbitControls,
  frame: ModelFrame,
  fitOffset = 1.4
): number {
  const fov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect || 1;
  const verticalDistance = frame.radius / Math.sin(fov / 2);
  const horizontalDistance = frame.radius / Math.sin(Math.atan(Math.tan(fov / 2) * aspect));
  const distance = Math.max(verticalDistance, horizontalDistance) * fitOffset;

  // Default initial framing: three-quarter (perspective) view.
  const dir = new Vector3(1, 0.7, 1).normalize();
  camera.position.copy(frame.center).addScaledVector(dir, distance);
  camera.near = Math.max(distance / 1000, 0.001);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();

  controls.target.copy(frame.center);
  controls.minDistance = distance * 0.2;
  controls.maxDistance = distance * 6;
  controls.update();

  return distance;
}
