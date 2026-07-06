// ----------------------------------------------------------------------------
// handTracker.js
// ----------------------------------------------------------------------------
// Wraps Google's MediaPipe Tasks-Vision HandLandmarker — the 21-point hand
// landmark detector we use to place a ring on the customer's finger.
//
// The library (~a few MB of JS + WASM) is loaded LAZILY from a CDN the first
// time the customer opens try-on, so it never touches the main viewer bundle.
// This mirrors how loadModel.js pulls the Draco decoder from a CDN. The CDN
// URL is VERSION-PINNED on purpose: the .mjs and its matching WASM share an
// ABI, and a floating tag could pull a mismatched pair and fail to init.
//
// Maintenance note: to upgrade MediaPipe, bump MEDIAPIPE_VERSION below (and
// re-test), or vendor the files into /public and point these URLs at
// import.meta.env.BASE_URL for same-origin, offline-friendly serving.
// ----------------------------------------------------------------------------

const MEDIAPIPE_VERSION = '0.10.14';
const CDN_BASE = `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MEDIAPIPE_VERSION}`;
const WASM_BASE = `${CDN_BASE}/wasm`;
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/**
 * A single hand's 21 normalized landmarks. Each point's x/y are in [0,1]
 * relative to the input frame (origin top-left); z is depth-ish relative to
 * the wrist.
 * @typedef {{ x: number, y: number, z: number }} Landmark
 */

let visionModulePromise = null;

/**
 * Lazily import the MediaPipe tasks-vision ESM bundle from the pinned CDN.
 * Cached so repeated open/close of try-on doesn't re-download it.
 */
function loadVisionModule() {
  if (!visionModulePromise) {
    // Vite leaves fully-qualified URL imports alone, so this resolves at
    // runtime against the CDN rather than being bundled.
    visionModulePromise = import(/* @vite-ignore */ `${CDN_BASE}/vision_bundle.mjs`);
  }
  return visionModulePromise;
}

/**
 * Create a HandLandmarker configured for real-time video. Tries the GPU
 * delegate first and falls back to CPU if GPU init throws (some older mobile
 * GPUs / drivers).
 *
 * @returns {Promise<import('@mediapipe/tasks-vision').HandLandmarker>}
 */
export async function loadHandLandmarker() {
  const vision = await loadVisionModule();
  const { HandLandmarker, FilesetResolver } = vision;
  const fileset = await FilesetResolver.forVisionTasks(WASM_BASE);

  const baseOptions = { modelAssetPath: MODEL_URL };
  try {
    return await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { ...baseOptions, delegate: 'GPU' },
      runningMode: 'VIDEO',
      numHands: 1
    });
  } catch {
    return HandLandmarker.createFromOptions(fileset, {
      baseOptions: { ...baseOptions, delegate: 'CPU' },
      runningMode: 'VIDEO',
      numHands: 1
    });
  }
}

/**
 * Run detection on one video frame. `timestampMs` MUST strictly increase
 * across calls (VIDEO running mode requirement) — pass performance.now().
 *
 * @param {import('@mediapipe/tasks-vision').HandLandmarker} landmarker
 * @param {HTMLVideoElement} video
 * @param {number} timestampMs
 * @returns {{ landmarks: Landmark[][] }} `landmarks[0]` is the first hand's 21 points, or empty.
 */
export function detectHands(landmarker, video, timestampMs) {
  if (!landmarker || !video || video.readyState < 2) return { landmarks: [] };
  try {
    const result = landmarker.detectForVideo(video, timestampMs);
    return { landmarks: result?.landmarks ?? [] };
  } catch {
    return { landmarks: [] };
  }
}

/**
 * Release the detector's native resources.
 * @param {import('@mediapipe/tasks-vision').HandLandmarker | null} landmarker
 */
export function closeHandTracker(landmarker) {
  try {
    landmarker?.close();
  } catch {
    /* ignore */
  }
}
