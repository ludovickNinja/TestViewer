// ----------------------------------------------------------------------------
// ringParts.js
// ----------------------------------------------------------------------------
// Detects the "engagement ring" vs "matching band" grouping inside a loaded
// GLB. The convention is to author each part as a top-level group in Rhino —
// Rhino's glTF exporter turns each top layer into a named Object3D node, so
// the grouping carries through the export without an extra sidecar file.
//
// A node is classified as the engagement-ring side if its name (case
// insensitive) contains "engagement" or "ering", or contains "ring" without
// also containing "band". A node is classified as the matching-band side if
// its name contains "band" or "wedding".
//
// Detection walks the immediate children of the model root, then one level
// deeper to handle the common case where the GLB has a single wrapper group
// (e.g. a "Scene" or "RootNode") around the real layer groups.
// ----------------------------------------------------------------------------

const BAND_TOKENS = ['band', 'wedding'];
const ENGAGEMENT_TOKENS = ['engagement', 'ering'];

/**
 * @typedef {object} RingParts
 * @property {import('three').Object3D | null} engagement
 * @property {import('three').Object3D | null} band
 */

/**
 * @param {import('three').Object3D} root
 * @returns {RingParts}
 */
export function detectRingParts(root) {
  const result = { engagement: null, band: null };
  if (!root) return result;

  const candidates = collectCandidates(root);
  for (const node of candidates) {
    const kind = classify(node.name);
    if (kind === 'engagement' && !result.engagement) result.engagement = node;
    else if (kind === 'band' && !result.band) result.band = node;
    if (result.engagement && result.band) break;
  }
  return result;
}

/**
 * Set visibility on the engagement / band groups based on the requested mode.
 * `mode` is one of "engagement", "band", "all". Unknown modes default to "all".
 *
 * @param {RingParts} parts
 * @param {string} mode
 */
export function applyPartVisibility(parts, mode) {
  const normalized = normalizeShowMode(mode);
  if (parts.engagement) parts.engagement.visible = normalized !== 'band';
  if (parts.band) parts.band.visible = normalized !== 'engagement';
}

/**
 * @param {string} mode
 * @returns {'engagement' | 'band' | 'all'}
 */
export function normalizeShowMode(mode) {
  const m = String(mode || '').toLowerCase();
  if (m === 'engagement' || m === 'ring') return 'engagement';
  if (m === 'band' || m === 'matchingband' || m === 'wedding') return 'band';
  return 'all';
}

function collectCandidates(root) {
  const out = [];
  const seen = new Set();
  const push = (node) => {
    if (!node || seen.has(node)) return;
    seen.add(node);
    out.push(node);
  };

  // Direct children first — these are usually the Rhino layer groups.
  for (const child of root.children) push(child);

  // If the GLB has a single wrapper node (common with some exporters), peek
  // one level deeper so we still find the layer groups.
  if (root.children.length === 1) {
    for (const grand of root.children[0].children) push(grand);
  }
  return out;
}

function classify(name) {
  const lower = String(name || '').toLowerCase();
  if (!lower) return null;
  if (BAND_TOKENS.some((t) => lower.includes(t))) return 'band';
  if (ENGAGEMENT_TOKENS.some((t) => lower.includes(t))) return 'engagement';
  if (lower.includes('ring')) return 'engagement';
  return null;
}
