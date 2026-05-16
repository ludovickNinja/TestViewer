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
 * Edge-smoothing bevel applied at every corner of the cross-section. Replaces
 * the 90° transition between a side face and the outer (or inner) surface
 * with a small quarter arc, so the rim catches a specular highlight from the
 * HDR instead of rendering as a dead line. Equivalent in spirit to
 * IJewel3d's SSBevel — done in profile space so it costs no extra geometry
 * passes at runtime.
 */
const EDGE_BEVEL_DEFAULT_MM = 0.08;

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
 *     edgeBevel?: number,       // mm; default 0.08, applied to every corner
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

  // Clamp every corner radius so an arc cannot self-intersect at small
  // widths or thicknesses. The 0.49 / 0.4 factors mirror the original
  // comfort-fit clamps and were chosen to leave a sliver of straight face
  // between adjacent corner arcs even at the safety extreme.
  const maxCornerR = Math.min(hW * 0.49, thicknessM * 0.4);
  const clampR = (r) => Math.max(0, Math.min(r, maxCornerR));

  // Edge bevel — applied to every outer corner unconditionally, and folded
  // into the inner-corner radius so the inner edges smooth even when
  // comfortFit is off.
  const b = clampR((opts.edgeBevel ?? EDGE_BEVEL_DEFAULT_MM) * MM_TO_M);

  // Comfort fit gives a larger inner-edge chamfer than the edge bevel; when
  // comfortFit is on we use whichever is bigger, when it's off the inner
  // edges still get the bevel.
  const cComfort = clampR((opts.comfortChamfer ?? 0.18) * MM_TO_M);
  const innerR = comfortFit && cComfort > 0 ? Math.max(cComfort, b) : b;

  // Clamp the dome height; bail out to flat outer if the bulge is negligible.
  let d = (opts.domeHeight ?? 0.15 * thicknessMm) * MM_TO_M;
  d = Math.max(0, Math.min(d, thicknessM * 0.6));
  const hasDome = profile === 'dome' && d > 1e-6;

  // Trace the closed cross-section CCW in (X right, Y up). The polyline is
  // closed by appending pts[0] at the end. We avoid emitting consecutive
  // duplicate points so LatheGeometry never produces zero-area strips.
  const pts = [];

  /** Push a quarter-arc starting at phiStart and sweeping +pi/2 CCW. */
  const pushQuarterArc = (cx, cy, r, phiStart) => {
    for (let i = 0; i <= arcSegments; i++) {
      const phi = phiStart + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cx + r * Math.cos(phi), cy + r * Math.sin(phi)));
    }
  };

  // Start of the bottom face — inner-bottom of the inner edge (after the
  // inner chamfer/bevel arc that we emit at the very end).
  pts.push(new Vector2(iR + innerR, -hW));

  // Outer-bottom edge: quarter arc from (oR - b, -hW) up to (oR, -hW + b),
  // tangent to the bottom face on one end and to the outer surface on the
  // other. When b is 0 we just emit the sharp corner so existing behaviour
  // is preserved with edgeBevel: 0.
  if (b > 0) {
    pushQuarterArc(oR - b, -hW + b, b, -Math.PI / 2);
  } else {
    pts.push(new Vector2(oR, -hW));
  }

  // Outer surface. Flat profile is implicit (the outer-bottom-bevel end and
  // the outer-top-bevel start are both at x = oR, so LatheGeometry sees a
  // straight vertical segment between them). Dome profile emits interior
  // samples of the bulge arc; we leave a tiny non-tangency between the
  // bevels and the dome — imperceptible at the default 0.08 mm bevel.
  if (hasDome) {
    // Circle through (oR, -hW), (oR + d, 0), (oR, +hW). Center on the X axis.
    const R = (hW * hW + d * d) / (2 * d);
    const cx = oR + d - R;
    const theta = Math.asin(hW / R);
    for (let i = 1; i < arcSegments; i++) {
      const phi = -theta + (2 * theta * i) / arcSegments;
      pts.push(new Vector2(cx + R * Math.cos(phi), R * Math.sin(phi)));
    }
  }

  // Outer-top edge: quarter arc from (oR, hW - b) up to (oR - b, hW).
  if (b > 0) {
    pushQuarterArc(oR - b, hW - b, b, 0);
  } else {
    pts.push(new Vector2(oR, hW));
  }

  // Start of the top face — inner-top of the inner edge (innerR == 0 yields
  // a sharp inner corner; with the default edge bevel this never happens).
  pts.push(new Vector2(iR + innerR, hW));

  if (innerR > 0) {
    // Quarter arc at the top inner corner — center (iR + innerR, hW - innerR).
    // Sweeps from phi=pi/2 (= (iR+innerR, +hW), already in pts) to
    // phi=pi (= (iR, hW-innerR)). Emit i=1..arcSegments so the arc end point
    // (iR, hW-innerR) becomes the start of the straight inner segment.
    const cxTop = iR + innerR;
    const cyTop = hW - innerR;
    for (let i = 1; i <= arcSegments; i++) {
      const phi = Math.PI / 2 + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxTop + innerR * Math.cos(phi), cyTop + innerR * Math.sin(phi)));
    }
    // Straight inner segment down to the start of the bottom inner arc.
    pts.push(new Vector2(iR, -hW + innerR));
    // Quarter arc at the bottom inner corner — center (iR + innerR, -hW + innerR).
    // Sweeps phi=pi to phi=3pi/2 (= (iR+innerR, -hW), which is pts[0]).
    // Emit i=1..arcSegments-1 so we don't duplicate pts[0]; the explicit
    // closing append below handles that endpoint.
    const cxBot = iR + innerR;
    const cyBot = -hW + innerR;
    for (let i = 1; i < arcSegments; i++) {
      const phi = Math.PI + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxBot + innerR * Math.cos(phi), cyBot + innerR * Math.sin(phi)));
    }
  }
  // When innerR === 0 the inner edge is straight from (iR, +hW) down to
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
