// ----------------------------------------------------------------------------
// generateAngleThumbnails.js
// ----------------------------------------------------------------------------
// Renders the loaded model from each of the 4 preset camera angles (front /
// side / top / perspective) and returns one JPEG data URL per angle. The
// resulting URLs are dropped straight into the bottom thumbnail strip, so
// no pre-rendered images need to live in /public/thumbnails/.
//
// Everything happens synchronously between two repaints — the renderer's
// backing buffer is briefly resized to a small square, the camera is snapped
// to each preset, a frame is rendered, the canvas is captured, and finally
// the original size / camera state are restored. Because JS yields only once
// at the end, the user never sees the intermediate frames.
// ----------------------------------------------------------------------------

import { Vector2, Vector3 } from 'three';
import { CAMERA_VIEWS, computeViewPosition } from './cameraViews.js';

const THUMB_SIZE = 320;
const JPEG_QUALITY = 0.85;

/**
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 * @param {import('./fitCameraToObject.js').ModelFrame} frame
 * @returns {Record<import('./cameraViews.js').CameraViewId, string>}
 */
export function generateAngleThumbnails(viewer, frame) {
  const { renderer, scene, camera, controls, canvas } = viewer;

  const prevSize = renderer.getSize(new Vector2());
  const prevPixelRatio = renderer.getPixelRatio();
  const prevAspect = camera.aspect;
  const prevPos = camera.position.clone();
  const prevTarget = controls.target.clone();
  const prevAutoRotate = controls.autoRotate;

  // Disable auto-rotate during capture so controls.update() (called elsewhere)
  // can't mutate the camera between snap and render.
  controls.autoRotate = false;

  // Resize the backing buffer to a small square. updateStyle=false keeps the
  // canvas CSS size intact, so once we restore the original buffer size the
  // visible canvas is unchanged.
  renderer.setPixelRatio(1);
  renderer.setSize(THUMB_SIZE, THUMB_SIZE, false);
  camera.aspect = 1;
  camera.updateProjectionMatrix();

  /** @type {Record<string, string>} */
  const results = {};
  const lookAt = new Vector3();

  for (const view of CAMERA_VIEWS) {
    const pos = computeViewPosition(view, camera, frame);
    camera.position.copy(pos);
    lookAt.copy(frame.center);
    camera.lookAt(lookAt);
    renderer.render(scene, camera);
    results[view.id] = canvas.toDataURL('image/jpeg', JPEG_QUALITY);
  }

  // Restore everything and re-render so the visible canvas shows the
  // pre-capture state on the next repaint.
  renderer.setPixelRatio(prevPixelRatio);
  renderer.setSize(prevSize.x, prevSize.y, false);
  camera.aspect = prevAspect;
  camera.updateProjectionMatrix();
  camera.position.copy(prevPos);
  controls.target.copy(prevTarget);
  camera.lookAt(prevTarget);
  controls.autoRotate = prevAutoRotate;
  renderer.render(scene, camera);

  return /** @type {Record<import('./cameraViews.js').CameraViewId, string>} */ (results);
}
