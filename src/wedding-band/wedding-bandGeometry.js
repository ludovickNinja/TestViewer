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
 * Comfort-fit relief depth at the band edges (mm). When comfortFit is on,
 * the entire inside surface is replaced with a single concave arc that's
 * closest to the finger at the centre of the band width and recedes by this
 * many millimetres at each side face — so only a narrow strip in the middle
 * of the inside contacts the finger, matching how real comfort-fit bands
 * are milled.
 */
const COMFORT_DEPTH_DEFAULT_MM = 0.25;

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
 *     comfortDepth?: number,    // mm; default 0.25, clamped to fit
 *     edgeBevel?: number,       // mm; default 0.08, applied to every outer corner
 *     arcSegments?: number      // samples per quarter arc; default 16
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

  // Edge bevel — applied to every outer corner unconditionally, and also to
  // the inner corners when comfortFit is off so the inner edges still catch
  // a highlight.
  const b = clampR((opts.edgeBevel ?? EDGE_BEVEL_DEFAULT_MM) * MM_TO_M);

  // Comfort fit. The relief depth is how far the inside surface recedes from
  // the finger at the band's side faces — at the centre of the width the
  // inside still sits at iR. Clamped so the arc can never punch out through
  // the outer surface (≤ 0.5 * thickness) or vanish at extreme widths
  // (≤ 0.8 * half-width).
  const comfortDepth = comfortFit
    ? Math.max(
        0,
        Math.min(
          (opts.comfortDepth ?? COMFORT_DEPTH_DEFAULT_MM) * MM_TO_M,
          thicknessM * 0.5,
          hW * 0.8
        )
      )
    : 0;
  const useComfortArc = comfortDepth > 1e-6;

  // Inner-corner edge bevel: only used when there's no comfort arc, because
  // the arc meets the side faces directly at (iR + comfortDepth, ±hW).
  const innerR = useComfortArc ? 0 : b;

  // Inner-end X of the top/bottom faces. With the comfort arc this is the
  // arc's endpoint (recessed by comfortDepth); without it it's the start of
  // the inner-corner bevel (iR + b) or the sharp inner corner (iR).
  const innerEndX = useComfortArc ? iR + comfortDepth : iR + innerR;

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
  // inner chamfer/bevel arc or comfort arc that we emit at the very end).
  pts.push(new Vector2(innerEndX, -hW));

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

  // Start of the top face — inner-top of the inner profile. With comfortFit
  // on this is the upper endpoint of the comfort arc (recessed). With
  // comfortFit off and innerR > 0 this is the start of the top inner-corner
  // bevel. With both off it's a sharp inner corner.
  pts.push(new Vector2(innerEndX, hW));

  if (useComfortArc) {
    // Single concave arc spanning the entire inside, from (iR + comfortDepth, +hW)
    // through (iR, 0) — closest point to the finger — to (iR + comfortDepth, -hW).
    // The arc centre lies on Y=0 in the band material at X = iR + R, where R
    // is solved so the arc passes through all three points:
    //   R = (comfortDepth² + hW²) / (2 · comfortDepth)
    // The upper endpoint sits at angle `delta` from the centre's +X axis,
    // where cos(delta) = (comfortDepth - R)/R, sin(delta) = hW/R — i.e. delta
    // is in (π/2, π). Sweep CCW from delta past π (the (iR, 0) point) to
    // 2π - delta. Emit i=1..samples-1; the closing append below provides the
    // lower endpoint so we don't duplicate pts[0].
    const R = (comfortDepth * comfortDepth + hW * hW) / (2 * comfortDepth);
    const cx = iR + R;
    const delta = Math.atan2(hW, comfortDepth - R);
    const sweep = 2 * (Math.PI - delta);
    // Keep ~arcSegments samples per quarter-circle of sweep so a deep comfort
    // arc gets proportionally more vertices than a shallow one.
    const samples = Math.max(arcSegments, Math.ceil(arcSegments * sweep / (Math.PI / 2)));
    for (let i = 1; i < samples; i++) {
      const phi = delta + sweep * (i / samples);
      pts.push(new Vector2(cx + R * Math.cos(phi), R * Math.sin(phi)));
    }
  } else if (innerR > 0) {
    // No comfort arc: emit the small inner-corner bevels and a straight
    // inner face between them. Top corner: center (iR + innerR, hW - innerR),
    // sweep phi=π/2 → π. Straight segment down to (iR, -hW + innerR). Bottom
    // corner: center (iR + innerR, -hW + innerR), sweep phi=π → 3π/2; emit
    // i=1..arcSegments-1 so the closing append handles pts[0].
    const cxTop = iR + innerR;
    const cyTop = hW - innerR;
    for (let i = 1; i <= arcSegments; i++) {
      const phi = Math.PI / 2 + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxTop + innerR * Math.cos(phi), cyTop + innerR * Math.sin(phi)));
    }
    pts.push(new Vector2(iR, -hW + innerR));
    const cxBot = iR + innerR;
    const cyBot = -hW + innerR;
    for (let i = 1; i < arcSegments; i++) {
      const phi = Math.PI + (Math.PI / 2) * (i / arcSegments);
      pts.push(new Vector2(cxBot + innerR * Math.cos(phi), cyBot + innerR * Math.sin(phi)));
    }
  }
  // With both options off the inner edge is straight from (iR, +hW) down to
  // (iR, -hW); the closing append below provides the bottom endpoint.

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
