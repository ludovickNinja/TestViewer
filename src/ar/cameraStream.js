// ----------------------------------------------------------------------------
// cameraStream.js
// ----------------------------------------------------------------------------
// Thin wrapper around getUserMedia for the AR "try-on" mode. It owns the
// <video> element the hand tracker reads from and the MediaStream lifecycle.
//
// getUserMedia only works in a SECURE CONTEXT — HTTPS, or localhost during
// dev. On GitHub Pages the site is already HTTPS, so the live viewer is fine;
// LAN testing over a bare IP would need HTTPS. `isTryOnSupported()` gates the
// whole feature on that + API presence so the button never appears where it
// can't work.
//
// iOS Safari quirks handled here: the <video> must be `playsinline` + `muted`
// to autoplay without going fullscreen, and the getUserMedia() call must
// originate from a user gesture (it does — the Try-on button click chain).
// ----------------------------------------------------------------------------

/**
 * Is the AR try-on feature usable in this browser/context? Used by the viewer
 * to show or hide the Try-on button.
 * @returns {boolean}
 */
export function isTryOnSupported() {
  return (
    typeof window !== 'undefined' &&
    window.isSecureContext === true &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === 'function'
  );
}

/**
 * A small, UI-friendly error shape. `code` is stable for branching; `message`
 * is customer-facing copy.
 * @typedef {{ code: string, message: string }} CameraError
 */

/**
 * Map a raw getUserMedia rejection into a tagged, human-readable error.
 * @param {unknown} err
 * @returns {CameraError}
 */
function toCameraError(err) {
  const name = err && typeof err === 'object' && 'name' in err ? String(err.name) : '';
  switch (name) {
    case 'NotAllowedError':
    case 'SecurityError':
      return {
        code: 'denied',
        message: 'Camera access was blocked. Enable camera permission for this site and try again.'
      };
    case 'NotFoundError':
    case 'OverconstrainedError':
      return {
        code: 'notfound',
        message: 'No camera was found on this device.'
      };
    case 'NotReadableError':
      return {
        code: 'busy',
        message: 'Your camera is already in use by another app. Close it and try again.'
      };
    default:
      return {
        code: 'unknown',
        message: 'We could not start the camera. Please try again.'
      };
  }
}

/**
 * Request the camera and return a playing <video> plus its stream.
 *
 * @param {object} opts
 * @param {'user' | 'environment'} opts.facingMode - Front ('user') on desktop,
 *   rear ('environment') on mobile.
 * @returns {Promise<{ video: HTMLVideoElement, stream: MediaStream }>}
 * @throws {CameraError}
 */
export async function startCamera({ facingMode = 'user' } = {}) {
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: facingMode },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    });
  } catch (err) {
    throw toCameraError(err);
  }

  const video = document.createElement('video');
  video.playsInline = true;
  video.muted = true;
  video.autoplay = true;
  // Safari respects the attribute form of playsinline more reliably.
  video.setAttribute('playsinline', '');
  video.setAttribute('muted', '');
  video.srcObject = stream;

  // Wait until we know the real frame dimensions — the placement math needs
  // videoWidth/videoHeight to map landmarks correctly.
  await new Promise((resolve) => {
    if (video.readyState >= 1 && video.videoWidth > 0) {
      resolve();
      return;
    }
    video.addEventListener('loadedmetadata', () => resolve(), { once: true });
  });

  try {
    await video.play();
  } catch {
    // Autoplay can reject if the gesture chain was lost; the frames still
    // arrive once the element is in the DOM, so this is non-fatal.
  }

  return { video, stream };
}

/**
 * Stop every track on a stream and release the camera (turns off the
 * indicator light). Safe to call with null/already-stopped streams.
 * @param {MediaStream | null | undefined} stream
 */
export function stopCamera(stream) {
  if (!stream) return;
  for (const track of stream.getTracks()) {
    try {
      track.stop();
    } catch {
      /* ignore */
    }
  }
}
