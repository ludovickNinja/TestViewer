// ----------------------------------------------------------------------------
// pricingService.js
// ----------------------------------------------------------------------------
// Reads the default pricing config (src/data/pricingConfig.json) and merges
// per-device overrides from localStorage. The admin page (/admin/) is the
// authoring surface for the overrides; the wedding-band page is the only
// consumer right now.
//
// $/g for a given metal is *derived* at quote time:
//   spotPerG  = spotPerOz / 31.1034768
//   pricePerG = spotPerG * purityFraction + premiumPerGramUSD
// The spot prices come from spotPriceService.js (Stooq, cached daily); the
// premium and other knobs come from the merged config below. Storage is
// browser-local — survives reload, doesn't sync across devices.
// ----------------------------------------------------------------------------

import defaults from '../data/pricingConfig.json';
import { perOzToPerGram } from './spotPriceService.js';

const STORAGE_KEY = 'noam.carver.pricing.v1';

/**
 * @typedef {{
 *   label: string,
 *   densityGPerCc: number,
 *   spotMetal: 'gold' | 'platinum' | 'silver',
 *   purityFraction: number,
 *   premiumPerGramUSD: number
 * }} MetalEntry
 *
 * @typedef {{
 *   metals: Record<string, MetalEntry>,
 *   fallbackSpot: { goldPerOzUSD: number, silverPerOzUSD: number, platinumPerOzUSD: number },
 *   laborUSD: number,
 *   markupPct: number
 * }} PricingConfig
 */

/**
 * Build the merged pricing object: defaults overlaid with any localStorage
 * overrides. Only known metal IDs from the defaults are merged — unknown
 * keys in storage are ignored.
 *
 * @returns {PricingConfig}
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
      const p = Number(override.premiumPerGramUSD);
      if (Number.isFinite(d) && d > 0) merged.metals[id].densityGPerCc = d;
      if (Number.isFinite(p) && p >= 0) merged.metals[id].premiumPerGramUSD = p;
      // purityFraction and spotMetal are intentionally NOT overridable —
      // they describe the alloy, not pricing policy.
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
 * Persist the full pricing snapshot to localStorage.
 * @param {PricingConfig} pricing
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
 * the pricing config. Karat is ignored for non-gold metals (platinum,
 * silver) since those don't have karats.
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
 * Resolve the per-oz spot for a metal entry from a snapshot, falling back
 * to the bundled defaults if no snapshot is available.
 *
 * @param {MetalEntry} entry
 * @param {import('./spotPriceService.js').SpotSnapshot | null} snapshot
 * @param {PricingConfig} pricing
 * @returns {number}
 */
export function spotPerOzFor(entry, snapshot, pricing) {
  const key = entry.spotMetal;
  if (snapshot) {
    if (key === 'gold') return snapshot.goldPerOzUSD;
    if (key === 'platinum') return snapshot.platinumPerOzUSD;
    if (key === 'silver') return snapshot.silverPerOzUSD;
  }
  if (key === 'gold') return pricing.fallbackSpot.goldPerOzUSD;
  if (key === 'platinum') return pricing.fallbackSpot.platinumPerOzUSD;
  if (key === 'silver') return pricing.fallbackSpot.silverPerOzUSD;
  return 0;
}

/**
 * Effective $/g for a metal at the given spot prices.
 *   $/g = spotPerG * purityFraction + premium
 *
 * @param {MetalEntry} entry
 * @param {import('./spotPriceService.js').SpotSnapshot | null} snapshot
 * @param {PricingConfig} pricing
 * @returns {number}
 */
export function pricePerGramFor(entry, snapshot, pricing) {
  const spotPerG = perOzToPerGram(spotPerOzFor(entry, snapshot, pricing));
  return spotPerG * entry.purityFraction + entry.premiumPerGramUSD;
}

/**
 * Compute the price breakdown for a band of `weightGrams` made of the metal
 * identified by `pricingKey`.
 *
 * @param {PricingConfig} pricing
 * @param {import('./spotPriceService.js').SpotSnapshot | null} snapshot
 * @param {string} pricingKey
 * @param {number} weightGrams
 * @returns {{ metalUSD: number, laborUSD: number, markupUSD: number, totalUSD: number, pricePerGramUSD: number } | null}
 */
export function computePrice(pricing, snapshot, pricingKey, weightGrams) {
  const entry = pricing.metals[pricingKey];
  if (!entry) return null;
  const pricePerGramUSD = pricePerGramFor(entry, snapshot, pricing);
  const metalUSD = weightGrams * pricePerGramUSD;
  const laborUSD = pricing.laborUSD;
  const subtotal = metalUSD + laborUSD;
  const markupUSD = subtotal * (pricing.markupPct / 100);
  return {
    metalUSD,
    laborUSD,
    markupUSD,
    totalUSD: subtotal + markupUSD,
    pricePerGramUSD
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
