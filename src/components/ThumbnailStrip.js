// ----------------------------------------------------------------------------
// ThumbnailStrip.js
// ----------------------------------------------------------------------------
// The four boxes along the bottom of the viewer. Each box represents a preset
// camera angle: Front / Side / Top / Perspective.
//
// Boxes start in a labeled placeholder state (single-glyph F / S / T / P).
// Once the model loads, src/main.js calls setThumbnail(id, dataUrl) with a
// freshly rendered preview of each angle, which fades in over the placeholder.
//
// Clicking a box smoothly moves the camera to that preset.
// ----------------------------------------------------------------------------

import { CAMERA_VIEWS } from '../three/cameraViews.js';

/**
 * @param {{
 *   onSelect: (id: import('../three/cameraViews.js').CameraViewId) => void,
 * }} options
 * @returns {{
 *   element: HTMLElement,
 *   setActive: (id: import('../three/cameraViews.js').CameraViewId) => void,
 *   setThumbnail: (id: import('../three/cameraViews.js').CameraViewId, imageUrl: string) => void,
 * }}
 */
export function createThumbnailStrip(options) {
  const el = document.createElement('div');
  el.className = 'nc-thumbs';
  el.setAttribute('role', 'tablist');
  el.setAttribute('aria-label', 'Preset views');

  // Map of viewId -> button element, so setActive can highlight one at a time.
  const buttons = new Map();
  // Map of viewId -> teardown callback for an active turntable, so a second
  // setTurntable() call (e.g. after a part-selector toggle) replaces the
  // previous one cleanly without leaking listeners or intervals.
  /** @type {Map<string, () => void>} */
  const turntableTeardowns = new Map();

  for (const view of CAMERA_VIEWS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nc-thumb';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `${view.label} view`);
    btn.dataset.viewId = view.id;

    // Single-letter glyph (F / S / T / P) sits behind every tile until the
    // live-rendered image arrives via setThumbnail().
    const placeholder = document.createElement('div');
    placeholder.className = 'nc-thumb__placeholder is-visible';
    placeholder.textContent = view.label.charAt(0);

    const label = document.createElement('div');
    label.className = 'nc-thumb__label';
    label.textContent = view.label;

    btn.appendChild(placeholder);
    btn.appendChild(label);

    btn.addEventListener('click', () => options.onSelect(view.id));
    buttons.set(view.id, btn);
    el.appendChild(btn);
  }

  /** Highlight a single thumbnail as the active view. */
  function setActive(id) {
    buttons.forEach((btn, key) => {
      const active = key === id;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  /**
   * Swap in a freshly generated image for one of the preset views. Called by
   * the viewer after the model loads to replace the F/S/T/P placeholders
   * with live renders of the actual GLB.
   *
   * @param {import('../three/cameraViews.js').CameraViewId} id
   * @param {string} imageUrl - Any valid <img> src (data URL, blob URL, http).
   */
  function setThumbnail(id, imageUrl) {
    const btn = buttons.get(id);
    if (!btn || !imageUrl) return;

    // Tear down any previous turntable so its interval can't keep firing
    // against the <img> we're about to replace.
    const previousTurntable = turntableTeardowns.get(id);
    if (previousTurntable) {
      previousTurntable();
      turntableTeardowns.delete(id);
    }

    const placeholder = btn.querySelector('.nc-thumb__placeholder');
    const existingImg = btn.querySelector('.nc-thumb__img');
    if (existingImg) existingImg.remove();

    const img = document.createElement('img');
    img.className = 'nc-thumb__img';
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = imageUrl;
    img.addEventListener('load', () => {
      img.classList.add('is-loaded');
      placeholder?.classList.remove('is-visible');
    });
    img.addEventListener('error', () => {
      img.remove();
      placeholder?.classList.add('is-visible');
    });
    btn.insertBefore(img, btn.firstChild);
  }

  /**
   * Attach a turntable preview to a tile. Each call supplies an array of
   * pre-rendered JPEG data URLs (one per frame); on hover or keyboard focus
   * a JS timer swaps the visible <img>'s src through the frames, so each
   * frame is its own naturally-centered square — the ring stays in the
   * middle of the tile, no vertical drift.
   *
   * @param {import('../three/cameraViews.js').CameraViewId} id
   * @param {string[]} frames - Pre-rendered frames in playback order.
   * @param {{ fps?: number }} [options]
   */
  function setTurntable(id, frames, options = {}) {
    const btn = buttons.get(id);
    if (!btn || !Array.isArray(frames) || frames.length < 2) return;

    // Tear down any previous turntable on this tile.
    const previous = turntableTeardowns.get(id);
    if (previous) {
      previous();
      turntableTeardowns.delete(id);
    }

    // Respect reduced-motion: leave the still tile as-is.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    // Preload every frame as a real <img> so the swap is instant — the
    // browser caches decoded data and reuses it for the visible <img>.
    const preload = frames.map((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
      return img;
    });

    const img = btn.querySelector('.nc-thumb__img');
    if (!img) return;
    // Snapshot the still frame so we can restore it on pointer leave.
    const restingSrc = img.src;

    const fps = options.fps ?? 15;
    const tickMs = Math.max(16, 1000 / fps);
    let timer = 0;
    let frameIndex = 0;

    const tick = () => {
      frameIndex = (frameIndex + 1) % frames.length;
      img.src = frames[frameIndex];
    };
    const start = () => {
      if (timer) return;
      frameIndex = 0;
      timer = window.setInterval(tick, tickMs);
    };
    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = 0;
      img.src = restingSrc;
    };

    btn.addEventListener('pointerenter', start);
    btn.addEventListener('pointerleave', stop);
    btn.addEventListener('focus', start);
    btn.addEventListener('blur', stop);
    btn.classList.add('nc-thumb--has-turntable');

    turntableTeardowns.set(id, () => {
      stop();
      btn.removeEventListener('pointerenter', start);
      btn.removeEventListener('pointerleave', stop);
      btn.removeEventListener('focus', start);
      btn.removeEventListener('blur', stop);
      btn.classList.remove('nc-thumb--has-turntable');
      // Drop the preload references so the cached frames can be GC'd next
      // time the user navigates a part toggle.
      preload.length = 0;
    });
  }

  return { element: el, setActive, setThumbnail, setTurntable };
}
