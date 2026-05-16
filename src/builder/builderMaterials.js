// ----------------------------------------------------------------------------
// builderMaterials.js
// ----------------------------------------------------------------------------
// Thin wrapper around the shared material preset library
// (src/data/materialPresets.json + src/three/applyPreset.js) so the builder
// and the wedding band see the exact same metals as the /viewer page.
//
// Rules unchanged from the previous implementation:
//   - Each metal preset becomes a fresh MeshStandardMaterial per mesh so
//     changing one mesh's metal does not mutate other meshes that happened to
//     share the imported material.
//   - We preserve the original material name when possible (handy for export).
//   - The preset id is recorded in `mesh.userData.builderMetalId` so JSON
//     export and the selection UI can round-trip the configuration.
// ----------------------------------------------------------------------------

import { MeshStandardMaterial } from 'three';
import materialPresets from '../data/materialPresets.json';
import { applyPreset } from '../three/applyPreset.js';

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   color: string,
 *   metalness: number,
 *   roughness: number,
 *   envMap?: string,
 *   envMapIntensity?: number
 * }} MetalPreset
 */

/**
 * Return the metals from the shared preset library as a flat
 * `[{ id, name, ...preset }]` list — the shape the builder/wedding-band UIs
 * expect for their dropdowns.
 *
 * @param {{ filter?: (id: string, preset: object) => boolean }} [opts]
 * @returns {MetalPreset[]}
 */
export function listMetals({ filter } = {}) {
  const out = [];
  const metals = materialPresets.metals || {};
  for (const [id, preset] of Object.entries(metals)) {
    if (filter && !filter(id, preset)) continue;
    out.push({ id, name: preset.label || id, ...preset });
  }
  return out;
}

/**
 * Build a MeshStandardMaterial from a metal preset. Returns a fresh instance
 * every call (no shared state). When `environments` is provided, the preset's
 * `envMap` routing (metal/gem/none) is honoured immediately.
 *
 * @param {MetalPreset} metal
 * @param {{ originalName?: string, environments?: { metal: any, gem: any } | null }} [opts]
 */
export function createMetalMaterial(metal, opts = {}) {
  const { originalName, environments = null } = opts;
  const material = new MeshStandardMaterial();
  applyPreset(material, metal, environments, 1);
  material.name = originalName || metal.name || metal.label || metal.id;
  material.userData.builderMetalId = metal.id;
  return material;
}

/**
 * Apply a metal preset to a single mesh, replacing any existing material we
 * created. Records the preset id in `mesh.userData.builderMetalId` so the
 * selection UI and JSON export can rebuild the configuration.
 *
 * @param {import('three').Mesh} mesh
 * @param {MetalPreset} metal
 * @param {{ environments?: { metal: any, gem: any } | null }} [opts]
 */
export function applyMetalToMesh(mesh, metal, opts = {}) {
  if (!mesh || !mesh.isMesh) return;
  const { environments = null } = opts;

  // Preserve the imported material's name so designers can still recognise
  // their parts in the GLB after export.
  const previousName =
    (Array.isArray(mesh.material) ? mesh.material[0]?.name : mesh.material?.name) || '';

  // Dispose previous materials we created (they carry our builderMetalId).
  // Leave the imported material alone — it may be shared with another mesh.
  const previous = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  for (const mat of previous) {
    if (mat && mat.userData && mat.userData.builderMetalId) {
      mat.dispose();
    }
  }

  const next = createMetalMaterial(metal, { originalName: previousName, environments });
  mesh.material = next;
  mesh.userData = mesh.userData || {};
  mesh.userData.builderMetalId = metal.id;
}

/**
 * Apply a metal preset to every mesh in the given subtree.
 *
 * @param {import('three').Object3D} root
 * @param {MetalPreset} metal
 * @param {{ environments?: { metal: any, gem: any } | null }} [opts]
 */
export function applyMetalToTree(root, metal, opts = {}) {
  root.traverse((obj) => {
    if (obj.isMesh) applyMetalToMesh(obj, metal, opts);
  });
}

/**
 * Look up a metal preset by id. Accepts either a list (legacy callers) or
 * resolves directly from the shared preset library when `metals` is null.
 *
 * @param {MetalPreset[] | null | undefined} metals
 * @param {string} id
 */
export function findMetalById(metals, id) {
  if (Array.isArray(metals)) {
    const hit = metals.find((m) => m.id === id);
    if (hit) return hit;
  }
  const preset = materialPresets.metals?.[id];
  if (!preset) return undefined;
  return { id, name: preset.label || id, ...preset };
}
