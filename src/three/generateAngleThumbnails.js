// ----------------------------------------------------------------------------
// generateAngleThumbnails.js
// ----------------------------------------------------------------------------
// Square viewport capture helpers used by:
//   - the bottom thumbnail strip (4 small previews of each preset angle), and
//   - the two action buttons next to the strip ("download current view" and
//     "download all angles").
//
// All capture happens between two repaints. The renderer's backing buffer is
// briefly resized to a square (camera aspect is matched to 1:1), the scene is
// rendered, the canvas is read as a JPEG data URL, and the original size /
// camera / controls state are restored. Because JS yields only once at the
// end, the user never sees the intermediate frames.
// ----------------------------------------------------------------------------

import { Vector2, Vector3 } from 'three';
import { CAMERA_VIEWS, computeViewPosition } from './cameraViews.js';

const THUMB_STRIP_SIZE = 320;
const THUMB_STRIP_QUALITY = 0.85;
const FULLSIZE_DEFAULT = 2048;
const FULLSIZE_QUALITY = 0.92;

/**
 * Temporarily switch the renderer + camera to a square viewport at `size`
 * pixels per side, run `fn`, then restore the previous viewport. Returns
 * whatever `fn` returns.
 *
 * @template T
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 * @param {number} size
 * @param {() => T} fn
 * @returns {T}
 */
function withSquareViewport(viewer, size, fn) {
  const { renderer, camera } = viewer;
  const prevSize = renderer.getSize(new Vector2());
  const prevPixelRatio = renderer.getPixelRatio();
  const prevAspect = camera.aspect;

  // updateStyle=false keeps the canvas CSS size, so once we restore the
  // original buffer size the visible canvas is unchanged.
  renderer.setPixelRatio(1);
  renderer.setSize(size, size, false);
  camera.aspect = 1;
  camera.updateProjectionMatrix();

  try {
    return fn();
  } finally {
    renderer.setPixelRatio(prevPixelRatio);
    renderer.setSize(prevSize.x, prevSize.y, false);
    camera.aspect = prevAspect;
    camera.updateProjectionMatrix();
  }
}

/**
 * Capture whatever the camera currently looks at, as a square JPEG data URL.
 *
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 * @param {{ size?: number, quality?: number }} [options]
 * @returns {string} JPEG data URL.
 */
export function captureCurrentView(viewer, options = {}) {
  const size = options.size ?? FULLSIZE_DEFAULT;
  const quality = options.quality ?? FULLSIZE_QUALITY;
  const { renderer, scene, camera, controls, canvas } = viewer;
  const prevAutoRotate = controls.autoRotate;
  controls.autoRotate = false;

  const dataUrl = withSquareViewport(viewer, size, () => {
    renderer.render(scene, camera);
    return canvas.toDataURL('image/jpeg', quality);
  });

  controls.autoRotate = prevAutoRotate;
  // Re-render at the original viewport size so the visible canvas is correct
  // on the next repaint.
  renderer.render(scene, camera);
  return dataUrl;
}

/**
 * Capture all 4 preset views (front / side / top / perspective) as square
 * JPEG data URLs. Used both for the small bottom-strip thumbnails and for
 * the "download all" button at higher resolution.
 *
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 * @param {import('./fitCameraToObject.js').ModelFrame} frame
 * @param {{ size?: number, quality?: number }} [options]
 * @returns {Record<import('./cameraViews.js').CameraViewId, string>}
 */
export function captureAllAngles(viewer, frame, options = {}) {
  const size = options.size ?? FULLSIZE_DEFAULT;
  const quality = options.quality ?? FULLSIZE_QUALITY;
  const { renderer, scene, camera, controls, canvas } = viewer;

  const prevPos = camera.position.clone();
  const prevTarget = controls.target.clone();
  const prevAutoRotate = controls.autoRotate;
  controls.autoRotate = false;

  /** @type {Record<string, string>} */
  const results = {};
  const lookAt = new Vector3();

  withSquareViewport(viewer, size, () => {
    for (const view of CAMERA_VIEWS) {
      const pos = computeViewPosition(view, camera, frame);
      camera.position.copy(pos);
      lookAt.copy(frame.center);
      camera.lookAt(lookAt);
      renderer.render(scene, camera);
      results[view.id] = canvas.toDataURL('image/jpeg', quality);
    }
  });

  camera.position.copy(prevPos);
  controls.target.copy(prevTarget);
  camera.lookAt(prevTarget);
  controls.autoRotate = prevAutoRotate;
  renderer.render(scene, camera);

  return /** @type {Record<import('./cameraViews.js').CameraViewId, string>} */ (results);
}

/**
 * Convenience wrapper for the bottom thumbnail strip — small, lower-quality
 * captures of all 4 preset views.
 *
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 * @param {import('./fitCameraToObject.js').ModelFrame} frame
 */
export function generateAngleThumbnails(viewer, frame) {
  return captureAllAngles(viewer, frame, {
    size: THUMB_STRIP_SIZE,
    quality: THUMB_STRIP_QUALITY
  });
}
