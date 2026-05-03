// ----------------------------------------------------------------------------
// modelService.js
// ----------------------------------------------------------------------------
// Translates a URL like
//
//     /viewer/?id=NC12345
//
// into the actual asset URLs the viewer needs:
//
//     model:       /models/NC12345.glb
//     thumbnails:  /thumbnails/NC12345-front.jpg
//                  /thumbnails/NC12345-side.jpg
//                  /thumbnails/NC12345-top.jpg
//                  /thumbnails/NC12345-perspective.jpg
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

// We deliberately don't import from `three/cameraViews.js` here. That file
// pulls in Three.js, and we want the landing page (which uses this service)
// to stay tiny. The four preset view IDs are duplicated below, but they're
// just four short strings — easy to keep in sync.
const VIEW_IDS = [
  { id: 'front',       label: 'Front' },
  { id: 'side',        label: 'Side' },
  { id: 'top',         label: 'Top' },
  { id: 'perspective', label: 'Perspective' }
];

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
 * Build the model + thumbnail URLs for a given preview ID.
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
 *   thumbnails: Array<{ id: string, label: string, imageUrl: string }>,
 * }}
 */
export function resolveModel(id) {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const modelUrl = `${baseUrl}models/${id}.glb`;
  const materialOverridesUrl = `${baseUrl}material-overrides/${id}.json`;

  const thumbnails = VIEW_IDS.map((view) => ({
    id: view.id,
    label: view.label,
    imageUrl: `${baseUrl}thumbnails/${id}-${view.id}.jpg`
  }));

  return {
    id,
    // For now the displayed name is just the ID. Later, when we add a real
    // database, this could become "Cushion Halo (NC12345)" etc.
    displayName: id,
    modelUrl,
    materialOverridesUrl,
    thumbnails
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
