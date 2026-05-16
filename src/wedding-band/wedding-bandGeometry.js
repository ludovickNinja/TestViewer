// ----------------------------------------------------------------------------
// wedding-bandGeometry.js
// ----------------------------------------------------------------------------
// Generates a wedding band as a THREE.LatheGeometry by revolving a 2D cross-
// section profile around the Y axis.
//
// Conventions:
//   - All exported helpers accept dimensions in millimetres for human-
//     readable config; internally everything is converted to METERS (scene
//     units) before the geometry is built.
//   - The profile is traced counter-clockwise in the (X, Y) plane where
//     X = radial distance from the band axis, Y = position along the axis.
//   - The profile is a closed polyline: the last point repeats the first so
//     LatheGeometry produces a sealed cross-section after revolution.
// ----------------------------------------------------------------------------

import { LatheGeometry, Vector2 } from 'three';

const MM_TO_M = 0.001;

/**
 * Convert a US ring inside diameter (mm) to inside radius (m).
 * @param {number} diameterMm
 */
export function ringSizeToInsideRadiusM(diameterMm) {
  return (diameterMm * MM_TO_M) / 2;
}

/**
 * Build the cross-section profile points for a wedding band.
 *
 * @param {{
 *   widthMm: number,
 *   thicknessMm: number,
 *   insideRadiusM: number,
 *   profile: 'flat' | 'dome',
 *   comfortFit: boolean,
 *   opts?: {
 *     domeHeight?: number,      // mm; default 0.15 * thickness
 *     comfortChamfer?: number,  // mm; default 0.18, clamped to fit
 *     arcSegments?: number      // samples per arc; default 16
 *   }
 * }} params
 * @returns {Vector2[]} closed polyline (first point === last point)
 */
export function buildBandProfile(params) {
  const {
    widthMm,
    thicknessMm,
    insideRadiusM,
    profile,
    comfortFit,
    opts = {}
  } = params;

  const arcSegments = Math.max(2, opts.arcSegments ?? 16);

  // Work in meters from here on.
  const widthM = widthMm * MM_TO_M;
  const thicknessM = thicknessMm * MM_TO_M;
  const iR = insideRadiusM;
  const oR = iR + thicknessM;
  const hW = widthM / 2;

  // Clamp the comfort chamfer so the inner-edge arc cannot self-intersect at
  // small widths or thicknesses.
  let c = (opts.comfortChamfer ?? 0.18) * MM_TO_M;
  c = Math.min(c, hW * 0.49, thicknessM * 0.4);
  if (!comfortFit || c <= 0) c = 0;

  // Clamp the dome height; bail out to flat outer if the bulge is negligible.
  let d = (opts.domeHeight ?? 0.15 * thicknessMm) * MM_TO_M;
  d = Math.max(0, Math.min(d, thicknessM * 0.6));
  const hasDome = profile === 'dome' && d > 1e-6;

  // Trace the closed cross-section CCW in (X right, Y up). The polyline is
  // closed by appending pts[0] at the end. We avoid emitting consecutive
  // duplicate points so LatheGeometry never produces zero-area strips.
  const pts = [];

  // Start at the inner-bottom of the inner edge (chamfer end if comfort fit).
  pts.push(new Vector2(iR + c, -hW));
  // Outer-bottom corner.
  pts.push(new Vector2(oR, -hW));

  // Outer edge from outer-bottom up to outer-top.
  if (hasDome) {
    // Circle through (oR, -hW), (oR + d, 0), (oR, +hW). Center on the X axis.
    const R = (hW * hW + d * d) / (2 * d);
    const cx = oR + d - R;
    const theta = Math.asin(hW / R);
    // Interior samples only — endpoints (oR, ±hW) are emitted separately.
    for (let i = 1; i < arcSegments; i++) {
      const phi = -theta + (2 * theta * i) / arcSegments;
      pts.push(new Vector2(cx + R * Math.cos(phi), R * Math.sin(phi)));
    }
  }
  pts.push(new Vector2(oR, hW));

  // Inner-top of the inner edge (chamfer end if comfort fit).
  pts.push(new Vector2(iR + c, hW));

  if (c > 0) {
    // Quarter arc at the top inner corner — center (iR + c, hW - c),
    // radius c. Sweeps from phi=pi/2 (= (iR+c, +hW), already in pts) to
    // phi=pi (= (iR, hW-c)). Emit i=1..arcSegments so the arc end point
    // (iR, hW-c) becomes the start of the straight inner segment.
    const cxTop = iR + c;
    const cyTop = hW - c;
    for (let i = 1; i <= arcSegments; i++) {
      const phi = Math.PI / 2 + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxTop + c * Math.cos(phi), cyTop + c * Math.sin(phi)));
    }
    // Straight inner segment down to the start of the bottom chamfer.
    pts.push(new Vector2(iR, -hW + c));
    // Quarter arc at the bottom inner corner — center (iR + c, -hW + c),
    // radius c. Sweeps phi=pi to phi=3pi/2 (= (iR+c, -hW), which is pts[0]).
    // Emit i=1..arcSegments-1 so we don't duplicate pts[0]; the explicit
    // closing append below handles that endpoint.
    const cxBot = iR + c;
    const cyBot = -hW + c;
    for (let i = 1; i < arcSegments; i++) {
      const phi = Math.PI + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxBot + c * Math.cos(phi), cyBot + c * Math.sin(phi)));
    }
  }
  // When c === 0 the inner edge is straight from (iR, +hW) down to
  // (iR, -hW); the closing append below provides the bottom endpoint, so we
  // don't emit it here.

  // Close the polyline so LatheGeometry produces a sealed cross-section.
  pts.push(pts[0].clone());

  return pts;
}

/**
 * Build the band geometry. The result is a LatheGeometry with its symmetry
 * axis along +Y. Rotate the mesh to orient the ring in the scene.
 *
 * @param {Parameters<typeof buildBandProfile>[0]} params
 * @param {number} [segments=128] - Angular segments around the band.
 * @returns {LatheGeometry}
 */
export function buildBandGeometry(params, segments = 128) {
  const profile = buildBandProfile(params);
  const geom = new LatheGeometry(profile, segments);
  geom.computeVertexNormals();
  return geom;
}
