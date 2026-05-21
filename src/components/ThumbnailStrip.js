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

  return { element: el, setActive, setThumbnail };
}
