// ----------------------------------------------------------------------------
// spotPriceService.js
// ----------------------------------------------------------------------------
// Daily spot-price snapshot for gold, silver, and platinum. Source is
// Stooq's public CSV endpoint (no API key, CORS-enabled). We treat the
// snapshot as good for one "trading day" anchored to 10:00 London time —
// roughly the LBMA AM Gold Fix slot — so the displayed prices don't twitch
// minute-to-minute and the API gets hit at most once per day per browser.
//
//   - Cache key:  noam.carver.spot.v1
//   - Stale rule: snapshot was fetched before today's 10:00 Europe/London
//                 wall clock time (DST-aware via Intl).
//   - Fallback:   if the fetch fails AND there's no cached snapshot, the
//                 caller falls back to `pricingConfig.fallbackSpot` so the
//                 page never breaks.
//
// LBMA caveat: the LBMA AM Gold Price is a paid feed. Stooq gives the
// *current spot* a browser can see, which on a normal day sits within ~1%
// of the fix. Good enough for an estimator.
// ----------------------------------------------------------------------------

const STORAGE_KEY = 'noam.carver.spot.v1';
const STOOQ_URL = 'https://stooq.com/q/l/?s=xauusd,xagusd,xptusd&f=sd2t2c&h&e=csv';
const TROY_OZ_PER_GRAM = 1 / 31.1034768;

/**
 * @typedef {{
 *   goldPerOzUSD: number,
 *   silverPerOzUSD: number,
 *   platinumPerOzUSD: number,
 *   fetchedAt: string,   // ISO timestamp
 *   source: 'stooq' | 'fallback' | 'manual'
 * }} SpotSnapshot
 */

/**
 * Load the cached snapshot from localStorage. Returns null if missing or
 * malformed.
 * @returns {SpotSnapshot | null}
 */
export function loadSpot() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isValidSnapshot(parsed)) return null;
    return parsed;
  } catch (err) {
    console.warn('[spot] failed to read localStorage', err);
    return null;
  }
}

/**
 * Persist a snapshot to localStorage.
 * @param {SpotSnapshot} snapshot
 */
export function saveSpot(snapshot) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (err) {
    console.warn('[spot] failed to save to localStorage', err);
  }
}

/**
 * Whether a cached snapshot is older than today's 10:00 London time and
 * should be refreshed. A snapshot from yesterday afternoon is stale once
 * we cross 10:00 London the next morning; a snapshot from this morning
 * after 10:00 is still fresh.
 *
 * @param {SpotSnapshot | null} snapshot
 * @param {Date} [now]
 * @returns {boolean}
 */
export function isStale(snapshot, now = new Date()) {
  if (!snapshot) return true;
  const fetched = new Date(snapshot.fetchedAt);
  if (Number.isNaN(fetched.getTime())) return true;
  return fetched < latestLondon10am(now);
}

/**
 * Ensure we have a fresh snapshot. If the cache is stale (or missing) we
 * attempt to fetch a new one; on failure we keep the stale cache or return
 * null. Either way the caller gets back the best-available snapshot
 * (possibly null) and can fall back to the bundled defaults.
 *
 * @returns {Promise<SpotSnapshot | null>}
 */
export async function ensureFreshSpot() {
  const cached = loadSpot();
  if (!isStale(cached)) return cached;
  try {
    const fresh = await fetchSpotFromStooq();
    saveSpot(fresh);
    return fresh;
  } catch (err) {
    console.warn('[spot] fetch failed, keeping cached snapshot', err);
    return cached;
  }
}

/**
 * Force a fetch regardless of cache freshness — used by the admin "Refresh
 * now" button. Surfaces fetch errors to the caller so the UI can show them.
 *
 * @returns {Promise<SpotSnapshot>}
 */
export async function refreshSpot() {
  const fresh = await fetchSpotFromStooq();
  saveSpot(fresh);
  return fresh;
}

async function fetchSpotFromStooq() {
  const res = await fetch(STOOQ_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Stooq returned HTTP ${res.status}`);
  const csv = await res.text();
  const closes = parseStooqCsv(csv);
  // Stooq returns "N/D" or 0 for unavailable symbols (weekends, holidays).
  // Validate each leg — if any are missing we'd rather throw and keep the
  // cached snapshot than poison the cache with zeros.
  if (!closes.xauusd || !closes.xagusd || !closes.xptusd) {
    throw new Error(`Stooq returned incomplete data: ${JSON.stringify(closes)}`);
  }
  return {
    goldPerOzUSD: closes.xauusd,
    silverPerOzUSD: closes.xagusd,
    platinumPerOzUSD: closes.xptusd,
    fetchedAt: new Date().toISOString(),
    source: 'stooq'
  };
}

/**
 * Parse Stooq's CSV. The endpoint with `f=sd2t2c` returns:
 *   Symbol,Date,Time,Close
 *   XAUUSD,2024-11-15,21:43:12,2565.78
 *   XAGUSD,2024-11-15,21:43:12,30.21
 *   XPTUSD,2024-11-15,21:43:12,952.43
 * Returns { xauusd, xagusd, xptusd } as numbers (NaN → 0).
 *
 * @param {string} csv
 * @returns {{ xauusd: number, xagusd: number, xptusd: number }}
 */
export function parseStooqCsv(csv) {
  const out = { xauusd: 0, xagusd: 0, xptusd: 0 };
  const lines = csv.split(/\r?\n/);
  // Skip header (line 0). Each data line: Symbol,Date,Time,Close
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < 4) continue;
    const sym = cols[0].trim().toLowerCase();
    const close = Number(cols[3]);
    if (sym in out && Number.isFinite(close) && close > 0) {
      out[sym] = close;
    }
  }
  return out;
}

/**
 * The most recent 10:00 Europe/London wall-clock time, as a UTC Date. If the
 * current London time is already past 10:00 today, returns today at 10:00
 * London; otherwise returns yesterday at 10:00 London. Used to decide
 * whether a cached snapshot is stale.
 *
 * Uses Intl.DateTimeFormat with the IANA "Europe/London" zone so DST is
 * handled automatically — no hard-coded BST/GMT switch.
 *
 * @param {Date} now
 * @returns {Date}
 */
export function latestLondon10am(now) {
  const parts = londonParts(now);
  // Build a Date for today's 10:00 London time by constructing the same
  // wall-clock parts back through Intl. We use a fixed-point search: start
  // with a UTC guess, then adjust by the London-offset error.
  const guess = londonWallClockToUtc(parts.year, parts.month, parts.day, 10, 0);
  if (guess <= now) return guess;
  // Today's 10:00 London hasn't happened yet → return yesterday's 10:00.
  const yesterday = new Date(guess.getTime() - 24 * 60 * 60 * 1000);
  const yParts = londonParts(yesterday);
  return londonWallClockToUtc(yParts.year, yParts.month, yParts.day, 10, 0);
}

function londonParts(date) {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });
  const parts = Object.fromEntries(fmt.formatToParts(date).map((p) => [p.type, p.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour === '24' ? '00' : parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second)
  };
}

/**
 * Convert a London wall-clock time (year/month/day/hour/minute) into the
 * UTC instant that corresponds to it. We can't subtract a fixed offset
 * because of DST, so we converge: pick a UTC guess equal to the wall clock
 * interpreted as UTC, ask Intl what the London time of that guess is, and
 * correct by the difference. One iteration is enough because DST shifts
 * are ≤ 1 hour and don't compound.
 */
function londonWallClockToUtc(year, month, day, hour, minute) {
  const target = Date.UTC(year, month - 1, day, hour, minute, 0);
  const seen = londonParts(new Date(target));
  const targetMin = hour * 60 + minute;
  const seenMin = seen.hour * 60 + seen.minute
    + (seen.day !== day ? (seen.day > day ? 24 * 60 : -24 * 60) : 0);
  const offsetMin = targetMin - seenMin;
  return new Date(target + offsetMin * 60 * 1000);
}

/**
 * Convert a per-oz price to per-gram (troy ounce).
 * @param {number} perOzUSD
 * @returns {number}
 */
export function perOzToPerGram(perOzUSD) {
  return perOzUSD * TROY_OZ_PER_GRAM;
}

function isValidSnapshot(s) {
  return (
    s &&
    Number.isFinite(s.goldPerOzUSD) && s.goldPerOzUSD > 0 &&
    Number.isFinite(s.silverPerOzUSD) && s.silverPerOzUSD > 0 &&
    Number.isFinite(s.platinumPerOzUSD) && s.platinumPerOzUSD > 0 &&
    typeof s.fetchedAt === 'string'
  );
}
