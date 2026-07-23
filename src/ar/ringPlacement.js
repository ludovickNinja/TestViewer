// ----------------------------------------------------------------------------
// ringPlacement.js
// ----------------------------------------------------------------------------
// Pure math: turn MediaPipe hand landmarks into a { position, quaternion,
// scale } for the ring in the AR scene. No DOM, no Three scene state — just
// vectors in and a transform out, so it can be reasoned about (and unit
// tested) on its own.
//
// The ring sits on the ring finger's proximal phalanx, between:
//   landmark 13 = ring-finger MCP (base knuckle)
//   landmark 14 = ring-finger PIP (first joint)
// Finger *width* (for scale) is estimated from the spacing between the ring
// and middle knuckles (13 <-> 9).
//
// ORIENTATION IS ANATOMICAL, NOT CAMERA-FACING: the ring's stone is anchored
// to the BACK of the hand (where a stone actually sits), so flipping your
// hand palm-up shows the underside of the band instead of keeping the stone
// glued to the camera. The back-of-hand direction comes from the palm-plane
// normal — cross(wrist->indexMCP, wrist->pinkyMCP) — whose palm/back sign is
// resolved with MediaPipe's handedness label (a left palm and a right back
// are mirror-identical shapes, so geometry alone can't tell them apart).
//
// MODEL-AXIS DETECTION: which local axis the finger hole runs along depends
// on how the ring was posed in Rhino — modeled flat on the ground plane
// (hole along Rhino Z) exports with the hole along glTF +Y after the Z-up to
// Y-up conversion, while modeled standing exports it along glTF Z. Real
// GLBs in this repo have BOTH conventions, so the axis is auto-detected as
// the THINNEST bounding-box dimension: a band is wide across its diameter in
// the two directions perpendicular to the hole and only band-width thick
// along it. A stone only inflates one radial direction, which is also why
// the outer diameter is taken as the SMALLER of the two perpendicular dims.
//
// COORDINATE / DEPTH NOTE: monocular video gives no true metric depth, so we
// place everything on a fixed working plane at `depth` in front of an AR
// camera at the origin looking down -Z. Landmark z (relative depth, roughly
// x-scaled) IS folded into direction vectors — finger axis and palm normal —
// so orientation stays meaningful when the hand is edge-on or a finger
// points at the camera; positions stay on the plane so the ring lands
// exactly on the finger in the video. This is a VISUALIZATION, not a sizing
// tool — the user's manual scale multiplier is the final say.
//
// COVER-CROP NOTE: the <video> is shown with `object-fit: cover`, which scales
// to fill the stage and crops the overflow. `mapVideoToNdc` reproduces that
// transform so a landmark lands where it's actually drawn, not where an
// un-cropped frame would put it.
// ----------------------------------------------------------------------------

import { Matrix4, Quaternion, Vector3 } from 'three';

// Landmark indices (MediaPipe hand model).
const WRIST = 0;
const INDEX_MCP = 5;
const MIDDLE_MCP = 9;
const RING_MCP = 13;
const RING_PIP = 14;
const PINKY_MCP = 17;

// Empirical constants — tuned defaults, overridable via `opts`.
const REST_FRACTION = 0.35; // how far up 13->14 the band rests (0 = at knuckle)

// Device-tunable calibration defaults. Exposed as live sliders in the hidden
// ?ar=1&arcal=1 calibration mode so final values can be dialled in on a real
// hand and baked back here, instead of bisected across deploys.
//   fingerWidthK: finger width as a fraction of the ring<->middle knuckle
//     spacing (0.62 too big -> 0.49 too small on device; 0.52 splits it).
//   zDamp: strength of MediaPipe's relative-depth cue on direction vectors
//     (1.0 over-tilted toward the camera, 0.5 over-corrected; 0.7 splits it).
export const DEFAULT_CALIBRATION = {
  fingerWidthK: 0.52,
  zDamp: 0.7
};

// Ring inner-hole diameter as a fraction of its outer diameter. Real bands
// are thin-walled: hole ~= 0.8-0.85 of the outer diameter (a 0.65 ratio
// implies a 3-4 mm wall, which inflated the rendered ring ~25% on device).
// Exported so the AR controller can size the finger occluder to the same
// hole.
export const HOLE_RATIO = 0.82;

// Per-hole-axis roll offset (radians) applied on top of the user's Rotate
// slider so the stone/decor lands on the back of the hand by default. For a
// Z-hole model the shortest-arc Z->Y alignment sends the stone axis (+Y)
// palm-side, hence the half turn; Y-hole models need none. Verified for the
// Z case; the Rotate slider is the per-session fallback either way.
const STONE_ROLL_OFFSET = [0, 0, Math.PI];

/**
 * Auto-detect which local axis the finger hole runs along: the thinnest
 * bounding-box dimension (see header).
 * @param {{ x: number, y: number, z: number }} size
 * @returns {0 | 1 | 2}
 */
export function guessHoleAxis(size) {
  if (!size) return 1;
  const { x, y, z } = size;
  if (x <= y && x <= z) return 0;
  if (y <= x && y <= z) return 1;
  return 2;
}

/**
 * The ring's outer diameter in model units: the smaller of the two bounding
 * dims perpendicular to the hole axis, so a tall center stone (which inflates
 * only one radial direction) doesn't skew the estimate.
 * @param {{ x: number, y: number, z: number }} size
 * @param {0 | 1 | 2} holeAxis
 * @returns {number}
 */
export function estimateOuterDiameter(size, holeAxis) {
  if (!size) return 0;
  const dims = [size.x, size.y, size.z];
  const perp = dims.filter((_, i) => i !== holeAxis);
  return Math.min(perp[0], perp[1]) || 0;
}

/**
 * The ring's hole radius in model units — used by the AR controller to size
 * the finger occluder cylinder.
 * @param {{ radius: number, size: { x: number, y: number, z: number } }} frame
 * @returns {number}
 */
export function estimateHoleRadius(frame) {
  const outer = estimateOuterDiameter(frame.size, guessHoleAxis(frame.size)) || 2 * frame.radius;
  return (outer / 2) * HOLE_RATIO;
}

/**
 * The rotation that brings the model's detected hole axis onto local +Y —
 * the slot computeRingTransform's basis maps to the finger. The occluder
 * cylinder (whose native axis is +Y) must counter-rotate by the INVERSE of
 * this so it runs along the finger for every authoring convention, not just
 * Y-hole models.
 * @param {{ x: number, y: number, z: number }} size
 * @returns {Quaternion}
 */
export function holeAlignQuaternion(size) {
  const axes = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];
  return new Quaternion().setFromUnitVectors(axes[guessHoleAxis(size)], new Vector3(0, 1, 0));
}

/**
 * Map a normalized video-frame coord (0..1, top-left origin) to normalized
 * device coords (-1..1, y up), accounting for `object-fit: cover` cropping and
 * optional horizontal mirroring of a front-facing camera.
 *
 * @param {number} nx
 * @param {number} ny
 * @param {{ containerW: number, containerH: number, videoW: number, videoH: number, mirror: boolean }} view
 * @returns {{ ndcX: number, ndcY: number }}
 */
export function mapVideoToNdc(nx, ny, view) {
  const { containerW: cw, containerH: ch, videoW: vw, videoH: vh, mirror } = view;
  const scale = Math.max(cw / vw, ch / vh); // cover: fill, crop overflow
  const dispW = vw * scale;
  const dispH = vh * scale;
  const offX = (cw - dispW) / 2;
  const offY = (ch - dispH) / 2;

  let u = (nx * dispW + offX) / cw; // 0..1 across the visible stage
  const v = (ny * dispH + offY) / ch;
  if (mirror) u = 1 - u;

  return { ndcX: 2 * u - 1, ndcY: 1 - 2 * v };
}

/**
 * Unproject a landmark into world space around the working plane at `depth`
 * in front of an AR camera at the origin (fov `fovYRad`, aspect from view).
 *
 * When `useZ` is set, the landmark's relative-depth z (MediaPipe: negative =
 * closer to camera, roughly the same scale as normalized x) is folded into
 * the world z so DIRECTIONS computed between landmarks are 3D. Plain plane
 * points (useZ false) are used for POSITIONS so the ring stays pixel-aligned
 * with the hand in the video.
 *
 * @param {import('./handTracker.js').Landmark} lm
 * @param {number} depth
 * @param {number} fovYRad
 * @param {object} view - see mapVideoToNdc.
 * @param {number} [zDamp=0] - strength of the landmark's relative-depth cue;
 *   0 keeps the point on the working plane (used for positions), >0 folds
 *   MediaPipe z into world z (used for direction vectors). Values around
 *   0.5-1.0; MediaPipe magnitudes run hot, so <1 avoids over-tilting.
 * @returns {Vector3}
 */
function unproject(lm, depth, fovYRad, view, zDamp = 0) {
  const { ndcX, ndcY } = mapVideoToNdc(lm.x, lm.y, view);
  const halfH = depth * Math.tan(fovYRad / 2);
  const halfW = halfH * (view.containerW / view.containerH);
  let z = -depth;
  if (zDamp > 0 && typeof lm.z === 'number') {
    // One unit of normalized x spans the video's displayed width; z shares
    // that scale, so convert with the same world-units-per-normalized factor.
    const scale = Math.max(view.containerW / view.videoW, view.containerH / view.videoH);
    const worldPerNorm = ((view.videoW * scale) / view.containerW) * 2 * halfW;
    z = -depth - lm.z * worldPerNorm * zDamp; // lm.z < 0 (closer) -> z toward camera
  }
  return new Vector3(ndcX * halfW, ndcY * halfH, z);
}

/**
 * Is the hand a RIGHT hand in OUR world space?
 *
 * DEVICE-CALIBRATED: an on-device test (front camera, mirrored) showed the
 * stone landing on the palm side under the opposite mapping, so the
 * tasks-vision handedness label evidently matches the PHYSICAL hand on the
 * raw frame (the legacy "assumes mirrored input" note from MediaPipe Hands
 * does not apply here). Only our own front-camera x-flip changes chirality:
 *
 *   mirror=false: world = raw frame     -> label 'Right' => right hand in world
 *   mirror=true:  world = flipped frame -> label 'Right' => left hand in world
 *
 * Kept as one tiny function so any future evidence has exactly one place to
 * flip. (Note: a wrong mapping here is indistinguishable from a 180° roll —
 * if a re-test shows the stone palm-side on ONE hand but correct on the
 * other, the roll offset is the culprit instead, not this.)
 *
 * @param {string | null} label - 'Left' | 'Right' from the detector.
 * @param {boolean} mirror
 * @returns {boolean}
 */
export function isWorldRightHand(label, mirror) {
  return mirror ? label === 'Left' : label === 'Right';
}

/**
 * Back-of-hand direction in world space. cross(wrist->indexMCP,
 * wrist->pinkyMCP) points out of the PALM for a right hand and out of the
 * BACK for a left hand (in our y-up space), so the handedness picks the sign.
 *
 * @param {Vector3} wrist
 * @param {Vector3} indexMcp
 * @param {Vector3} pinkyMcp
 * @param {boolean} isRight - from isWorldRightHand().
 * @returns {Vector3 | null} unit vector, or null when degenerate.
 */
export function computeDorsalDir(wrist, indexMcp, pinkyMcp, isRight) {
  const a = indexMcp.clone().sub(wrist);
  const b = pinkyMcp.clone().sub(wrist);
  const n = new Vector3().crossVectors(a, b);
  if (n.lengthSq() < 1e-10) return null;
  n.normalize();
  return isRight ? n.negate() : n;
}

/**
 * Compute the ring's world transform from one hand's landmarks.
 *
 * @param {import('./handTracker.js').Landmark[]} landmarks - 21 points, or falsy.
 * @param {object} params
 * @param {number} params.fovYRad - AR camera vertical fov (radians).
 * @param {{ containerW:number, containerH:number, videoW:number, videoH:number, mirror:boolean }} params.view
 * @param {{ radius:number, size:{x:number,y:number,z:number} }} params.frame - from frameModel().
 * @param {string | null} [params.handedLabel] - 'Left' | 'Right' from the detector.
 * @param {number} [params.depth=0.5] - working-plane distance.
 * @param {number} [params.rollRad=0] - user roll about the finger axis.
 * @param {number} [params.scaleMultiplier=1] - user scale slider.
 * @param {number} [params.fingerWidthK] - calibration: finger width as a
 *   fraction of the 13<->9 knuckle spacing (see DEFAULT_CALIBRATION).
 * @param {number} [params.zDamp] - calibration: landmark-depth strength on
 *   direction vectors (see DEFAULT_CALIBRATION).
 * @returns {{ position: Vector3, quaternion: Quaternion, scale: number } | null}
 *   null when the needed landmarks are absent (caller hides the ring).
 */
export function computeRingTransform(landmarks, params) {
  if (!landmarks || landmarks.length < 21) return null;
  const p0 = landmarks[WRIST];
  const p5 = landmarks[INDEX_MCP];
  const p9 = landmarks[MIDDLE_MCP];
  const p13 = landmarks[RING_MCP];
  const p14 = landmarks[RING_PIP];
  const p17 = landmarks[PINKY_MCP];
  if (!p0 || !p5 || !p9 || !p13 || !p14 || !p17) return null;

  const {
    fovYRad,
    view,
    frame,
    handedLabel = null,
    depth = 0.5,
    rollRad = 0,
    scaleMultiplier = 1,
    fingerWidthK = DEFAULT_CALIBRATION.fingerWidthK,
    zDamp = DEFAULT_CALIBRATION.zDamp
  } = params;

  // Plane points for anything positional / screen-aligned…
  const w13 = unproject(p13, depth, fovYRad, view);
  const w9 = unproject(p9, depth, fovYRad, view);
  // …and depth-aware points for direction vectors.
  const d0 = unproject(p0, depth, fovYRad, view, zDamp);
  const d5 = unproject(p5, depth, fovYRad, view, zDamp);
  const d13 = unproject(p13, depth, fovYRad, view, zDamp);
  const d14 = unproject(p14, depth, fovYRad, view, zDamp);
  const d17 = unproject(p17, depth, fovYRad, view, zDamp);

  // Position: a little way up the phalanx from the base knuckle, on the plane.
  const w14 = unproject(p14, depth, fovYRad, view);
  const position = w13.clone().lerp(w14, REST_FRACTION);

  // Finger axis (the band's hole axis), depth-aware so it tilts correctly
  // when the finger points toward/away from the camera.
  const fingerDir = d14.clone().sub(d13);
  if (fingerDir.lengthSq() < 1e-10) return null;
  fingerDir.normalize();

  // Anatomical facing: anchor the ring's stone to the back of the hand.
  const isRight = isWorldRightHand(handedLabel, view.mirror);
  let faceNormal = null;
  const dorsal = computeDorsalDir(d0, d5, d17, isRight);
  if (dorsal) {
    // Project the dorsal direction perpendicular to the finger axis.
    const perp = dorsal.clone().addScaledVector(fingerDir, -dorsal.dot(fingerDir));
    if (perp.lengthSq() > 1e-6) faceNormal = perp.normalize();
  }
  if (!faceNormal) {
    // Degenerate hand pose (or no handedness yet): fall back to facing the
    // camera, as the first release did.
    const viewDir = position.clone().negate().normalize();
    let side = new Vector3().crossVectors(fingerDir, viewDir);
    if (side.lengthSq() < 1e-8) side = new Vector3(1, 0, 0);
    side.normalize();
    faceNormal = new Vector3().crossVectors(side, fingerDir).normalize();
  }

  const side = new Vector3().crossVectors(fingerDir, faceNormal).normalize();
  const basisMat = new Matrix4().makeBasis(side, fingerDir, faceNormal);
  const basisQuat = new Quaternion().setFromRotationMatrix(basisMat);

  // Model alignment: rotate the detected hole axis onto local +Y (the slot
  // the basis maps to the finger), then apply the user's roll about the
  // finger plus the per-axis stone offset.
  const holeAxis = guessHoleAxis(frame.size);
  const align = holeAlignQuaternion(frame.size);
  const roll = new Quaternion().setFromAxisAngle(
    new Vector3(0, 1, 0),
    rollRad + STONE_ROLL_OFFSET[holeAxis]
  );
  const quaternion = basisQuat.multiply(roll.multiply(align));

  // Scale: fit the ring's outer diameter so its hole ~ the finger width. The
  // outer diameter comes from the dims perpendicular to the hole so a tall
  // center stone doesn't shrink the band relative to the finger.
  const fingerWidth = fingerWidthK * w13.distanceTo(w9);
  const targetOuter = fingerWidth / HOLE_RATIO;
  const modelOuter = Math.max(
    estimateOuterDiameter(frame.size, holeAxis) || 2 * frame.radius,
    1e-4
  );
  const scale = (targetOuter / modelOuter) * scaleMultiplier;

  return { position, quaternion, scale };
}
