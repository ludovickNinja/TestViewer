// ----------------------------------------------------------------------------
// builderExport.js
// ----------------------------------------------------------------------------
// GLB and JSON exporters for the configured builder scene.
//
//   - GLB export uses GLTFExporter on the two builder root nodes (shank +
//     head), preserving names and applied materials. Selection highlight is
//     temporarily cleared so we don't bake the blue emissive into the GLB.
//
//   - JSON export emits a compact configuration document describing which
//     shank + head are loaded, plus per-mesh category and metal id.
// ----------------------------------------------------------------------------

import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

/**
 * Trigger a browser download for a Blob.
 */
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Revoke after a tick so Safari has time to start the download.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Snapshot every mesh's emissive state and zero it out so the GLB doesn't
 * carry our selection highlight. Returns a function that restores the
 * original state.
 *
 * @param {import('three').Object3D[]} roots
 */
function suppressHighlight(roots) {
  const saved = [];
  for (const root of roots) {
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if (!mat || !('emissive' in mat)) continue;
        if (mat.userData.__builderEmissiveSaved) {
          // Currently highlighted — temporarily restore the saved values for
          // the duration of the export.
          const stash = mat.userData.__builderEmissiveSaved;
          const before = { color: mat.emissive.clone(), intensity: mat.emissiveIntensity };
          mat.emissive.copy(stash.color);
          mat.emissiveIntensity = stash.intensity;
          mat.needsUpdate = true;
          saved.push({ mat, before });
        }
      }
    });
  }
  return () => {
    for (const { mat, before } of saved) {
      mat.emissive.copy(before.color);
      mat.emissiveIntensity = before.intensity;
      mat.needsUpdate = true;
    }
  };
}

/**
 * Export the loaded shank + head as a single GLB.
 *
 * @param {{
 *   shank: import('three').Object3D | null,
 *   head: import('three').Object3D | null,
 *   filename?: string
 * }} opts
 */
export async function exportBuilderGLB({ shank, head, filename = 'crownring-builder.glb' }) {
  const roots = [shank, head].filter(Boolean);
  if (roots.length === 0) {
    throw new Error('Nothing to export — load a shank or a head first.');
  }

  const restore = suppressHighlight(roots);

  try {
    const exporter = new GLTFExporter();
    const result = await new Promise((resolve, reject) => {
      exporter.parse(
        roots,
        (data) => resolve(data),
        (err) => reject(err),
        { binary: true }
      );
    });

    const blob =
      result instanceof ArrayBuffer
        ? new Blob([result], { type: 'model/gltf-binary' })
        : new Blob([JSON.stringify(result)], { type: 'model/gltf+json' });

    downloadBlob(blob, filename);
  } finally {
    restore();
  }
}

/**
 * Export the configuration as JSON.
 *
 * @param {{
 *   shank: import('three').Object3D | null,
 *   head: import('three').Object3D | null,
 *   selectedShankId: string | null,
 *   selectedHeadId: string | null,
 *   filename?: string
 * }} opts
 */
export function exportBuilderJSON({
  shank,
  head,
  selectedShankId,
  selectedHeadId,
  filename = 'crownring-builder.json'
}) {
  /** @type {{ name: string, category: string, metalId: string | null }[]} */
  const parts = [];
  for (const root of [shank, head]) {
    if (!root) continue;
    root.traverse((obj) => {
      if (!obj.isMesh) return;
      parts.push({
        name: obj.name || '',
        category: obj.userData?.builderCategory || 'Other',
        metalId: obj.userData?.builderMetalId || null
      });
    });
  }

  const payload = {
    type: 'crownring-builder-config',
    version: 1,
    selectedShankId: selectedShankId || null,
    selectedHeadId: selectedHeadId || null,
    parts,
    timestamp: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  downloadBlob(blob, filename);
}
