// ----------------------------------------------------------------------------
// builderLoader.js
// ----------------------------------------------------------------------------
// Wraps GLTFLoader with the conventions the builder needs:
//
//   - Preserves Rhino-exported transforms (we DO NOT auto-center, DO NOT
//     auto-scale, DO NOT recompute origins). Shanks and heads are exported
//     using a shared jewelry coordinate system; trusting those transforms is
//     how shanks and heads line up.
//
//   - Preserves object names from the GLB so the user can reference them in
//     the selection panel.
//
//   - Tags every mesh in `userData.builderRole` ("shank" or "head") so we
//     can find/replace previously loaded parts.
// ----------------------------------------------------------------------------

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

/**
 * Load a GLB and tag its meshes with the given role.
 *
 * @param {string} url     - Absolute URL to the .glb file.
 * @param {'shank'|'head'} role
 * @returns {Promise<import('three').Object3D>}
 */
export function loadBuilderPart(url, role) {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        const root = gltf.scene || gltf.scenes?.[0];
        if (!root) {
          reject(new Error(`GLB ${url} did not contain a scene`));
          return;
        }

        // Tag the root and every descendant so we can find this group later
        // (e.g. when the user picks a different shank we remove the previous
        // shank without touching the head).
        root.userData.builderRole = role;
        root.traverse((obj) => {
          obj.userData = obj.userData || {};
          obj.userData.builderRole = role;
          if (obj.isMesh) {
            // Default category — the user can reassign it via the right panel.
            // 'shank' / 'head' map naturally; everything else falls back to
            // the role so the panel's category dropdown has a sensible value.
            obj.userData.builderCategory = obj.userData.builderCategory || role;
          }
        });

        resolve(root);
      },
      undefined,
      (err) => reject(err)
    );
  });
}

/**
 * Find and remove any previously loaded part with the given role from the
 * scene. Disposes geometry cleanly. Materials are NOT disposed — we may
 * have shared metal materials across parts.
 *
 * @param {import('three').Scene} scene
 * @param {'shank'|'head'} role
 */
export function removeBuilderPart(scene, role) {
  const toRemove = [];
  scene.traverse((obj) => {
    if (obj.userData && obj.userData.builderRole === role && obj.parent === scene) {
      toRemove.push(obj);
    }
  });
  for (const obj of toRemove) {
    obj.traverse((child) => {
      if (child.isMesh && child.geometry) child.geometry.dispose();
    });
    scene.remove(obj);
  }
}
