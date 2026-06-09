// ----------------------------------------------------------------------------
// modelService.js
// ----------------------------------------------------------------------------
// Translates a URL like
//
//     /viewer/?id=NC12345
//
// into the actual asset URLs the viewer needs:
//
//     model:               /models/NC12345.glb
//     material overrides:  /material-overrides/NC12345.json   (optional)
//
// The viewer's bottom thumbnail strip is always live-rendered from the GLB
// (see src/three/generateAngleThumbnails.js), so this service does not
// resolve any thumbnail image URLs. One less folder to keep in sync.
//
// The ID is sanitized — only letters, numbers, dashes, and underscores are
// allowed. That blocks slashes, "..", and other path-traversal tricks.
//
// PRIVACY NOTE (prototype):
// In this static GitHub Pages prototype, the URL ID equals the GLB filename.
// That means anyone who knows or guesses a filename can fetch it. To really
// protect designs, replace this service with a backend lookup that maps
// opaque preview IDs to short-lived signed URLs against private storage.
// ----------------------------------------------------------------------------

import materialPresets from '../data/materialPresets.json';
import { METAL_CODES, GEM_CODES, parseMetalCode } from '../three/materialNaming.js';

// Allowed: A-Z, a-z, 0-9, dash, underscore. 1 to 64 chars.
const ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

/**
 * Read the `id` query parameter from the current URL.
 * @param {string} [search] - Defaults to `window.location.search`.
 * @returns {string | null} The sanitized ID, or null if missing/unsafe.
 */
export function readModelIdFromUrl(search = window.location.search) {
  const params = new URLSearchParams(search);
  const raw = params.get('id');
  if (!raw) return null;
  return sanitizeModelId(raw);
}

const SHOW_VALUES = new Set(['engagement', 'band', 'all']);

/**
 * Read the `show` query parameter (engagement / band / all). Used by the
 * viewer to pick which part of a multi-part GLB is initially visible.
 * Returns null when the param is missing or invalid so callers can fall back
 * to their own default.
 *
 * @param {string} [search] - Defaults to `window.location.search`.
 * @returns {'engagement' | 'band' | 'all' | null}
 */
export function readShowFromUrl(search = window.location.search) {
  const params = new URLSearchParams(search);
  const raw = params.get('show');
  if (!raw) return null;
  const lower = raw.trim().toLowerCase();
  // Accept a couple of friendlier aliases.
  const normalized =
    lower === 'ring' ? 'engagement' :
    lower === 'matchingband' || lower === 'wedding' ? 'band' :
    lower;
  return SHOW_VALUES.has(normalized) ? /** @type {'engagement'|'band'|'all'} */ (normalized) : null;
}

/**
 * Mirror the current part selection into the URL so deep links share state.
 * "all" (the default) is written as a removed param to keep links clean.
 *
 * @param {'engagement' | 'band' | 'all'} value
 */
export function writeShowToUrl(value) {
  const url = new URL(window.location.href);
  if (value === 'all') url.searchParams.delete('show');
  else url.searchParams.set('show', value);
  window.history.replaceState(null, '', url);
}

// ---------------------------------------------------------------------------
// Runtime material selection (?metal=, ?er=, ?mb=, per-section, ?stone=)
// ---------------------------------------------------------------------------
// Mirrors readShowFromUrl: read, validate against the preset library / code
// maps, and drop anything that doesn't resolve so a typo'd param can never
// inject an arbitrary value. The shape returned here is consumed by
// resolveEffectivePreset() in materialNaming.js.

const METAL_SECTIONS = ['shank', 'head', 'details', 'band'];
const PART_SECTION_KEYS = ['er-shank', 'er-head', 'er-details', 'mb-band', 'mb-details'];

/** Validate a compact metal code (1–3 letters, all known). Returns the
 *  upper-cased code or null. */
function sanitizeMetalCode(raw) {
  if (!raw) return null;
  const code = String(raw).trim().toUpperCase();
  return parseMetalCode(code) ? code : null;
}

/** Resolve a single metal param: a one-letter code, or a full preset id. */
function resolveMetalParam(raw) {
  if (!raw) return null;
  const v = String(raw).trim();
  const up = v.toUpperCase();
  if (METAL_CODES[up]) return METAL_CODES[up];
  if (materialPresets.metals && materialPresets.metals[v.toLowerCase()]) return v.toLowerCase();
  return null;
}

/** Resolve a gem param: a 1–2 letter gem code, or a full gem preset id. */
function resolveGemParam(raw) {
  if (!raw) return null;
  const v = String(raw).trim();
  const up = v.toUpperCase();
  if (GEM_CODES[up]) return GEM_CODES[up];
  if (materialPresets.gems && materialPresets.gems[v.toLowerCase()]) return v.toLowerCase();
  return null;
}

/**
 * Read the runtime material selection from the URL. Every value is validated
 * against the preset library / code maps; unrecognised values are dropped.
 *
 * @param {string} [search] - Defaults to `window.location.search`.
 * @returns {{
 *   metalCode: string | null,
 *   erCode: string | null,
 *   mbCode: string | null,
 *   sections: Record<string, string>,
 *   partSections: Record<string, string>,
 *   stoneId: string | null,
 *   stones: Record<'engagement'|'band', string>
 * }}
 */
export function readMaterialSelectionFromUrl(search = window.location.search) {
  const p = new URLSearchParams(search);

  const sections = {};
  for (const sec of METAL_SECTIONS) {
    const id = resolveMetalParam(p.get(sec));
    if (id) sections[sec] = id;
  }

  const partSections = {};
  for (const key of PART_SECTION_KEYS) {
    const id = resolveMetalParam(p.get(key));
    if (id) partSections[key] = id;
  }

  const stones = {};
  const erStone = resolveGemParam(p.get('er-stone'));
  if (erStone) stones.engagement = erStone;
  const mbStone = resolveGemParam(p.get('mb-stone'));
  if (mbStone) stones.band = mbStone;

  return {
    metalCode: sanitizeMetalCode(p.get('metal')),
    erCode: sanitizeMetalCode(p.get('er')),
    mbCode: sanitizeMetalCode(p.get('mb')),
    sections,
    partSections,
    stoneId: resolveGemParam(p.get('stone')),
    stones
  };
}

/**
 * Return the input ID if it's safe to use as a filename, otherwise null.
 * @param {string} raw
 * @returns {string | null}
 */
export function sanitizeModelId(raw) {
  const trimmed = raw.trim();
  if (!ID_PATTERN.test(trimmed)) return null;
  return trimmed;
}

/**
 * Build the asset URLs for a given preview ID.
 *
 * Uses Vite's `import.meta.env.BASE_URL` so the same code works on
 *   http://localhost:5173/      (base = "/")
 *   https://user.github.io/repo/ (base = "/repo/")
 *
 * @param {string} id - A sanitized ID.
 * @returns {{
 *   id: string,
 *   displayName: string,
 *   modelUrl: string,
 *   materialOverridesUrl: string,
 * }}
 */
export function resolveModel(id) {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  return {
    id,
    // For now the displayed name is just the ID. Later, when we add a real
    // database, this could become "Cushion Halo (NC12345)" etc.
    displayName: id,
    modelUrl: `${baseUrl}models/${id}.glb`,
    materialOverridesUrl: `${baseUrl}material-overrides/${id}.json`
  };
}

/**
 * Fetch the material overrides sidecar for a given preview ID, if one exists.
 *
 * Override files live at `/public/material-overrides/<id>.json`. Each top-
 * level key is a material name, and the value is a partial PBR override
 * applied on top of the heuristic envMap assignment in createScene.js.
 *
 * Example:
 *   { "HEAD": { "envMap": "gem", "envMapIntensity": 1.6 },
 *     "SHANK": { "envMap": "metal", "metalness": 1, "roughness": 0.18 } }
 *
 * @param {string} url - The URL returned by `resolveModel(id).materialOverridesUrl`.
 * @returns {Promise<Record<string, Record<string, unknown>> | null>}
 */
export async function fetchMaterialOverrides(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null; // 404 = no overrides yet, that's fine
    const data = await res.json();
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    return data;
  } catch {
    return null;
  }
}

/**
 * Fetch the list of available preview IDs from /public/models.json.
 *
 * `models.json` is a hand-maintained array of strings — one entry per .glb
 * file in /public/models/. The landing page uses this list to pick a random
 * preview when the customer clicks "Test your luck".
 *
 * @returns {Promise<string[]>} List of valid IDs (unsafe ones are dropped).
 */
export async function fetchAvailableModelIds() {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const res = await fetch(`${baseUrl}models.json`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to load models.json (${res.status})`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('models.json should be a JSON array of strings');
  }
  // Re-run the sanitizer so a typo in models.json can't cause a bad URL.
  return data
    .filter((entry) => typeof entry === 'string')
    .map((entry) => sanitizeModelId(entry))
    .filter((id) => id !== null);
}
