// ----------------------------------------------------------------------------
// builderMaterials.js
// ----------------------------------------------------------------------------
// Maps metal presets (from /src/data/builderMetals.json) onto MeshStandardMaterial.
//
// Rules:
//   - Each metal preset becomes a fresh MeshStandardMaterial CLONED per mesh
//     so changing one mesh's metal does not silently change other meshes that
//     happened to share the same imported material.
//   - We preserve the original material name when possible (handy for export).
//   - Geometry is never touched.
//   - The metal id is recorded in `mesh.userData.builderMetalId` so JSON
//     export can round-trip the configuration.
// ----------------------------------------------------------------------------

import { Color, MeshStandardMaterial } from 'three';

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   color: string,
 *   metalness: number,
 *   roughness: number
 * }} MetalPreset
 */

/**
 * Build a MeshStandardMaterial from a metal preset.
 * Returns a fresh instance every call (no shared state).
 *
 * @param {MetalPreset} metal
 * @param {string} [originalName] - Preserve this material name on the result.
 */
export function createMetalMaterial(metal, originalName) {
  const material = new MeshStandardMaterial({
    color: new Color(metal.color),
    metalness: metal.metalness,
    roughness: metal.roughness
  });
  material.name = originalName || metal.name;
  material.userData.builderMetalId = metal.id;
  return material;
}

/**
 * Apply a metal preset to a single mesh. Records the metal id in the mesh's
 * userData so we can rebuild the configuration on JSON import / export.
 *
 * @param {import('three').Mesh} mesh
 * @param {MetalPreset} metal
 */
export function applyMetalToMesh(mesh, metal) {
  if (!mesh || !mesh.isMesh) return;

  // Preserve the imported material's name so designers can still recognize
  // their parts in the GLB after export.
  const previousName =
    (Array.isArray(mesh.material) ? mesh.material[0]?.name : mesh.material?.name) || '';

  // Dispose the previous material(s) we created — but only if we created
  // them (i.e. they have a builderMetalId). Otherwise it's the imported
  // material and might be shared with another mesh we don't own.
  const previous = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  for (const mat of previous) {
    if (mat && mat.userData && mat.userData.builderMetalId) {
      mat.dispose();
    }
  }

  const next = createMetalMaterial(metal, previousName);
  mesh.material = next;
  mesh.userData = mesh.userData || {};
  mesh.userData.builderMetalId = metal.id;
}

/**
 * Apply a metal preset to every mesh in the given object subtree.
 * Useful for "default metal on load".
 *
 * @param {import('three').Object3D} root
 * @param {MetalPreset} metal
 */
export function applyMetalToTree(root, metal) {
  root.traverse((obj) => {
    if (obj.isMesh) applyMetalToMesh(obj, metal);
  });
}

/**
 * Look up a metal preset by id. Returns undefined if not found.
 *
 * @param {MetalPreset[]} metals
 * @param {string} id
 */
export function findMetalById(metals, id) {
  return metals.find((m) => m.id === id);
}
