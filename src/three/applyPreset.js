// ----------------------------------------------------------------------------
// applyPreset.js — shared material preset applicator
// ----------------------------------------------------------------------------
// Single source of truth for taking a preset object (a metals[id] or gems[id]
// entry from src/data/materialPresets.json) and pushing it onto a Three.js
// material. Designed to be called from anywhere — the customer viewer, the
// inspector, the builder — so we don't drift into three different "apply
// material" implementations.
//
// The set of recognised keys is deliberately narrow. Anything not in
// NUMERIC_PROPS, COLOR_PROPS, or the explicit special-cases is ignored. That
// keeps preset / override files honest: they can't accidentally mutate
// arbitrary material state, and a typo just no-ops instead of silently
// breaking something.
//
// envMap routing is opt-in: pass an `environments` object ({ metal, gem })
// and the preset's `envMap: "metal" | "gem" | "none"` will be honoured. If
// you don't pass it, envMap is left alone.
// ----------------------------------------------------------------------------

const NUMERIC_PROPS = [
  'metalness',
  'roughness',
  'transmission',
  'thickness',
  'ior',
  'dispersion',
  'clearcoat',
  'clearcoatRoughness',
  'sheen',
  'envMapIntensity',
  'opacity',
  'attenuationDistance'
];

const COLOR_PROPS = ['color', 'attenuationColor', 'sheenColor', 'emissive'];

/**
 * Apply a preset to a Three.js material.
 *
 * @param {import('three').Material} material - Target material (mutated in place).
 * @param {Record<string, unknown>} preset - Flat key/value preset object.
 * @param {{ metal?: import('three').Texture | null, gem?: import('three').Texture | null } | null} [environments]
 *   Optional env-map sources. When provided, `preset.envMap` is honoured.
 */
export function applyPreset(material, preset, environments = null) {
  if (!material || !preset) return;

  // --- envMap routing (only when the caller provided env-map sources) ---
  if (environments && typeof preset.envMap === 'string') {
    if (preset.envMap === 'metal' && environments.metal) material.envMap = environments.metal;
    else if (preset.envMap === 'gem' && environments.gem) material.envMap = environments.gem;
    else if (preset.envMap === 'none') material.envMap = null;
  }

  // --- Numeric scalars (only set when the material actually has the slot) ---
  for (const prop of NUMERIC_PROPS) {
    const value = preset[prop];
    if (typeof value !== 'number') continue;
    if (typeof material[prop] !== 'number') continue; // material doesn't expose this
    material[prop] = value;
  }

  // --- Colors (Three.js Color objects support .set(hexString)) ---
  for (const prop of COLOR_PROPS) {
    const value = preset[prop];
    if (typeof value !== 'string') continue;
    const slot = material[prop];
    if (slot && typeof slot.set === 'function') {
      slot.set(value);
    }
  }

  material.needsUpdate = true;
}

/**
 * Look up a preset by id from a presets document. Searches metals first,
 * then gems. Returns null if not found.
 *
 * @param {{ metals?: Record<string, object>, gems?: Record<string, object> }} doc
 * @param {string} id
 */
export function findPreset(doc, id) {
  if (!doc || !id) return null;
  if (doc.metals && doc.metals[id]) return doc.metals[id];
  if (doc.gems && doc.gems[id]) return doc.gems[id];
  return null;
}

/**
 * Return a flat array of `{ id, group, label, preset }` entries — handy for
 * building dropdowns in the inspector or the builder.
 *
 * @param {{ metals?: Record<string, object>, gems?: Record<string, object> }} doc
 */
export function listPresets(doc) {
  const out = [];
  if (doc?.metals) {
    for (const [id, preset] of Object.entries(doc.metals)) {
      out.push({ id, group: 'metals', label: preset.label || id, preset });
    }
  }
  if (doc?.gems) {
    for (const [id, preset] of Object.entries(doc.gems)) {
      out.push({ id, group: 'gems', label: preset.label || id, preset });
    }
  }
  return out;
}
