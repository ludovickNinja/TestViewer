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
// COORDINATE / DEPTH NOTE: monocular video gives no true metric depth, so we
// place everything on a fixed working plane at `depth` in front of an AR
// camera at the origin looking down -Z. That makes this a VISUALIZATION, not
// a sizing tool — the user's manual scale multiplier is the final say.
//
// COVER-CROP NOTE: the <video> is shown with `object-fit: cover`, which scales
// to fill the stage and crops the overflow. `mapVideoToNdc` reproduces that
// transform so a landmark lands where it's actually drawn, not where an
// un-cropped frame would put it.
// ----------------------------------------------------------------------------

import { Matrix4, Quaternion, Vector3 } from 'three';

// Landmark indices (MediaPipe hand model).
const RING_MCP = 13;
const RING_PIP = 14;
const MIDDLE_MCP = 9;

// Empirical constants — tuned defaults, overridable via `opts`.
const REST_FRACTION = 0.35; // how far up 13->14 the band rests (0 = at knuckle)
const FINGER_WIDTH_K = 0.62; // finger width as a fraction of 13<->9 knuckle spacing
const HOLE_RATIO = 0.65; // ring inner-hole diameter as a fraction of its outer diameter

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
 * Unproject a landmark onto the working plane at `depth` in front of an AR
 * camera at the origin (fov `fovYRad`, aspect = containerW/containerH).
 * @returns {Vector3}
 */
function unproject(nx, ny, depth, fovYRad, view) {
  const { ndcX, ndcY } = mapVideoToNdc(nx, ny, view);
  const halfH = depth * Math.tan(fovYRad / 2);
  const halfW = halfH * (view.containerW / view.containerH);
  return new Vector3(ndcX * halfW, ndcY * halfH, -depth);
}

/**
 * Quaternion that rotates the model's local axis `axisIndex` (0=x,1=y,2=z)
 * onto +Y — i.e. declares which local axis is the finger-hole axis. Combined
 * with a roll about +Y so the user can spin the ring to face the camera.
 *
 * @param {number} axisIndex
 * @param {number} rollRad
 * @returns {Quaternion}
 */
export function alignQuaternion(axisIndex, rollRad = 0) {
  const axes = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];
  const from = axes[axisIndex] ?? axes[1];
  const align = new Quaternion().setFromUnitVectors(from, new Vector3(0, 1, 0));
  const roll = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), rollRad);
  return roll.multiply(align);
}

/**
 * Pick a sensible default hole-axis: the thinnest bounding-box dimension,
 * which for most bands is the finger-axis (band width). Stone-heavy rings can
 * break this — hence the manual axis toggle in the overlay.
 * @param {{ x: number, y: number, z: number }} size
 * @returns {number} axis index 0/1/2
 */
export function guessHoleAxis(size) {
  if (!size) return 1;
  const { x, y, z } = size;
  if (x <= y && x <= z) return 0;
  if (y <= x && y <= z) return 1;
  return 2;
}

/**
 * Compute the ring's world transform from one hand's landmarks.
 *
 * @param {import('./handTracker.js').Landmark[]} landmarks - 21 points, or falsy.
 * @param {import('three').Box3Like | { x:number,y:number,z:number }} _unused
 * @param {object} params
 * @param {number} params.fovYRad - AR camera vertical fov (radians).
 * @param {{ containerW:number, containerH:number, videoW:number, videoH:number, mirror:boolean }} params.view
 * @param {{ radius:number, size:{x:number,y:number,z:number} }} params.frame - from frameModel().
 * @param {number} [params.depth=0.5] - working-plane distance.
 * @param {number} [params.axisIndex] - hole-axis override; defaults to guessHoleAxis(frame.size).
 * @param {number} [params.rollRad=0] - user roll about the finger axis.
 * @param {number} [params.scaleMultiplier=1] - user scale slider.
 * @returns {{ position: Vector3, quaternion: Quaternion, scale: number } | null}
 *   null when the needed landmarks are absent (caller hides the ring).
 */
export function computeRingTransform(landmarks, params) {
  if (!landmarks || landmarks.length < 21) return null;
  const p13 = landmarks[RING_MCP];
  const p14 = landmarks[RING_PIP];
  const p9 = landmarks[MIDDLE_MCP];
  if (!p13 || !p14 || !p9) return null;

  const {
    fovYRad,
    view,
    frame,
    depth = 0.5,
    rollRad = 0,
    scaleMultiplier = 1
  } = params;
  const axisIndex = params.axisIndex ?? guessHoleAxis(frame.size);

  const w13 = unproject(p13.x, p13.y, depth, fovYRad, view);
  const w14 = unproject(p14.x, p14.y, depth, fovYRad, view);
  const w9 = unproject(p9.x, p9.y, depth, fovYRad, view);

  // Position: a little way up the phalanx from the base knuckle.
  const position = w13.clone().lerp(w14, REST_FRACTION);

  // Orientation basis: finger axis (band hole), camera-facing normal, side.
  const fingerDir = w14.clone().sub(w13).normalize();
  const viewDir = position.clone().negate().normalize(); // toward camera at origin
  let side = new Vector3().crossVectors(fingerDir, viewDir);
  if (side.lengthSq() < 1e-8) side = new Vector3(1, 0, 0); // finger pointing at camera
  side.normalize();
  const faceNormal = new Vector3().crossVectors(side, fingerDir).normalize();

  const basisMat = new Matrix4().makeBasis(side, fingerDir, faceNormal);
  const basisQuat = new Quaternion().setFromRotationMatrix(basisMat);
  const quaternion = basisQuat.multiply(alignQuaternion(axisIndex, rollRad));

  // Scale: fit the ring's outer diameter so its hole ~ the finger width.
  const fingerWidth = FINGER_WIDTH_K * w13.distanceTo(w9);
  const targetOuter = fingerWidth / HOLE_RATIO;
  const modelOuter = 2 * Math.max(frame.radius, 1e-4);
  const scale = (targetOuter / modelOuter) * scaleMultiplier;

  return { position, quaternion, scale };
}
