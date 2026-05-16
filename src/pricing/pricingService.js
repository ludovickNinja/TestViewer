// ----------------------------------------------------------------------------
// pricingService.js
// ----------------------------------------------------------------------------
// Reads the default pricing config (src/data/pricingConfig.json) and merges
// per-device overrides from localStorage. The admin page (/admin/) is the
// authoring surface for the overrides; the wedding-band page is the only
// consumer right now.
//
// Storage is browser-local — survives reload, doesn't sync across devices.
// Switch to a server-backed store if multi-device parity becomes a
// requirement.
// ----------------------------------------------------------------------------

import defaults from '../data/pricingConfig.json';

const STORAGE_KEY = 'noam.carver.pricing.v1';

/**
 * Build the merged pricing object: defaults overlaid with any localStorage
 * overrides. Only known metal IDs from the defaults are merged — unknown
 * keys in storage are ignored (forward compatibility / cleanup safety).
 *
 * @returns {{ metals: Record<string, { label: string, densityGPerCc: number, pricePerGramUSD: number }>, laborUSD: number, markupPct: number }}
 */
export function loadPricing() {
  const merged = clone(defaults);
  delete merged.$comment;

  const raw = readStorage();
  if (!raw) return merged;

  if (raw.metals && typeof raw.metals === 'object') {
    for (const id of Object.keys(merged.metals)) {
      const override = raw.metals[id];
      if (!override || typeof override !== 'object') continue;
      const d = Number(override.densityGPerCc);
      const p = Number(override.pricePerGramUSD);
      if (Number.isFinite(d) && d > 0) merged.metals[id].densityGPerCc = d;
      if (Number.isFinite(p) && p >= 0) merged.metals[id].pricePerGramUSD = p;
    }
  }
  if (Number.isFinite(Number(raw.laborUSD)) && Number(raw.laborUSD) >= 0) {
    merged.laborUSD = Number(raw.laborUSD);
  }
  if (Number.isFinite(Number(raw.markupPct)) && Number(raw.markupPct) >= 0) {
    merged.markupPct = Number(raw.markupPct);
  }
  return merged;
}

/**
 * Persist the full pricing snapshot to localStorage. Caller is expected to
 * pass an object with the same shape as `loadPricing()` returns.
 * @param {ReturnType<typeof loadPricing>} pricing
 */
export function savePricing(pricing) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pricing));
  } catch (err) {
    console.warn('[pricing] failed to save to localStorage', err);
  }
}

/**
 * Clear any stored overrides so subsequent loads return the bundled defaults.
 */
export function resetPricing() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('[pricing] failed to clear localStorage', err);
  }
}

/**
 * Map a (materialId, karat) selection from the wedding-band UI to a key in
 * the pricing config. Karat is ignored for non-gold metals (platinum, silver)
 * since those don't have karats.
 *
 * @param {string} materialId  one of: 'yellow-gold', 'white-gold', 'rose-gold', 'platinum', 'silver'
 * @param {string|null} karat   one of: '10k', '14k', '18k', or null for non-gold
 * @returns {string}
 */
export function pricingKeyFor(materialId, karat) {
  if (materialId === 'platinum' || materialId === 'silver') return materialId;
  return `${materialId}-${karat}`;
}

/**
 * Whether a metal needs a karat picker (only the three golds do).
 * @param {string} materialId
 * @returns {boolean}
 */
export function hasKarat(materialId) {
  return materialId === 'yellow-gold' || materialId === 'white-gold' || materialId === 'rose-gold';
}

/**
 * Compute the price breakdown for a band of `weightGrams` made of the metal
 * identified by `pricingKey`. Caller is responsible for passing a pricing
 * snapshot (so the admin page can preview unsaved changes by re-loading
 * locally).
 *
 * @param {ReturnType<typeof loadPricing>} pricing
 * @param {string} pricingKey
 * @param {number} weightGrams
 * @returns {{ metalUSD: number, laborUSD: number, markupUSD: number, totalUSD: number } | null}
 */
export function computePrice(pricing, pricingKey, weightGrams) {
  const metal = pricing.metals[pricingKey];
  if (!metal) return null;
  const metalUSD = weightGrams * metal.pricePerGramUSD;
  const laborUSD = pricing.laborUSD;
  const subtotal = metalUSD + laborUSD;
  const markupUSD = subtotal * (pricing.markupPct / 100);
  return {
    metalUSD,
    laborUSD,
    markupUSD,
    totalUSD: subtotal + markupUSD
  };
}

function readStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('[pricing] failed to read localStorage', err);
    return null;
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
