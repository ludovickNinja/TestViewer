// ----------------------------------------------------------------------------
// computeBandWeight.js
// ----------------------------------------------------------------------------
// Volume of revolution from a 2D cross-section profile, via Pappus's theorem:
//   V = 2π · x̄ · A
// where A is the (unsigned) area of the closed polyline and x̄ is the X
// coordinate of its centroid. The profile is the same Vector2[] that
// wedding-bandGeometry.js feeds into LatheGeometry, so the geometry and the
// volume calculation can't drift out of sync.
//
// Mass = V · density. Density inputs are in g/cm³ (jewelry industry
// convention); we convert m³ → cm³ inline.
// ----------------------------------------------------------------------------

const M3_TO_CC = 1e6;

/**
 * Compute the volume of the solid of revolution swept by `profile` about the
 * Y axis (the band's symmetry axis).
 *
 * Expects `profile` to be a closed polyline (last point === first point), in
 * meters. Traversal direction doesn't matter — we take the absolute value of
 * the signed area.
 *
 * @param {{x: number, y: number}[]} profile
 * @returns {number} volume in m³
 */
export function bandVolumeM3(profile) {
  if (!profile || profile.length < 4) return 0;

  let signedArea = 0;
  let cx = 0;
  // Iterate edges (i → i+1). The profile is closed, so we stop at length-1
  // — the final point already duplicates profile[0].
  for (let i = 0; i < profile.length - 1; i++) {
    const a = profile[i];
    const b = profile[i + 1];
    const cross = a.x * b.y - b.x * a.y;
    signedArea += cross;
    cx += (a.x + b.x) * cross;
  }
  signedArea *= 0.5;
  const area = Math.abs(signedArea);
  if (area < 1e-18) return 0;
  // Centroid X formula keeps the signed area in the denominator; the sign
  // cancels with the sign in `cross` so `centroidX` comes out positive for a
  // well-formed profile to the right of the Y axis.
  const centroidX = cx / (6 * signedArea);
  return 2 * Math.PI * centroidX * area;
}

/**
 * Convert a volume (m³) to mass (g) given a density in g/cm³.
 * @param {number} volumeM3
 * @param {number} densityGPerCc
 * @returns {number} mass in grams
 */
export function massGrams(volumeM3, densityGPerCc) {
  return volumeM3 * M3_TO_CC * densityGPerCc;
}
