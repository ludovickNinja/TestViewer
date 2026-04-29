import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { ModelFrame } from './fitCameraToObject';

export type CameraViewId = 'front' | 'side' | 'top' | 'perspective';

export interface CameraViewDefinition {
  id: CameraViewId;
  label: string;
  /** Direction from target to camera, will be normalized. */
  direction: Vector3;
}

export const CAMERA_VIEWS: CameraViewDefinition[] = [
  { id: 'front', label: 'Front', direction: new Vector3(0, 0, 1) },
  { id: 'side', label: 'Side', direction: new Vector3(1, 0, 0) },
  { id: 'top', label: 'Top', direction: new Vector3(0, 1, 0.001) },
  { id: 'perspective', label: 'Perspective', direction: new Vector3(1, 0.7, 1) }
];

export const DEFAULT_VIEW: CameraViewId = 'perspective';

/**
 * Compute the camera position for a given preset, based on model size.
 * Keeps the OrbitControls target centered on the model.
 */
export function computeViewPosition(
  view: CameraViewDefinition,
  camera: PerspectiveCamera,
  frame: ModelFrame,
  fitOffset = 1.45
): Vector3 {
  const fov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect || 1;
  const vertical = frame.radius / Math.sin(fov / 2);
  const horizontal = frame.radius / Math.sin(Math.atan(Math.tan(fov / 2) * aspect));
  const distance = Math.max(vertical, horizontal) * fitOffset;
  const dir = view.direction.clone().normalize();
  return frame.center.clone().addScaledVector(dir, distance);
}

/**
 * Smoothly tween the camera and OrbitControls target to a new position.
 * Uses a small RAF loop with easing — no extra dependencies.
 */
export function transitionCameraTo(
  camera: PerspectiveCamera,
  controls: OrbitControls,
  targetPosition: Vector3,
  targetLookAt: Vector3,
  durationMs = 600
): Promise<void> {
  return new Promise((resolve) => {
    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();
    const start = performance.now();

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    function step(now: number) {
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
