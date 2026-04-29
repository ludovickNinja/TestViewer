// ----------------------------------------------------------------------------
// ThumbnailStrip.js
// ----------------------------------------------------------------------------
// The four boxes along the bottom of the viewer. Each box represents a preset
// camera angle: Front / Side / Top / Perspective.
//
// Each box tries to display a still image from /public/thumbnails/. If that
// image is missing (or fails to load), it falls back to a labeled placeholder
// so the customer never sees a broken-image icon.
//
// Clicking a box smoothly moves the camera to that preset.
// ----------------------------------------------------------------------------

import { CAMERA_VIEWS } from '../three/cameraViews.js';

/**
 * @typedef {Object} ThumbnailDefinition
 * @property {'front'|'side'|'top'|'perspective'} id
 * @property {string} label
 * @property {string|null} imageUrl
 */

/**
 * @param {{
 *   thumbnails: ThumbnailDefinition[],
 *   onSelect: (id: ThumbnailDefinition['id']) => void,
 * }} options
 * @returns {{ element: HTMLElement, setActive: (id: ThumbnailDefinition['id']) => void }}
 */
export function createThumbnailStrip(options) {
  const el = document.createElement('div');
  el.className = 'nc-thumbs';
  el.setAttribute('role', 'tablist');
  el.setAttribute('aria-label', 'Preset views');

  // Map of viewId -> button element, so setActive can highlight one at a time.
  const buttons = new Map();

  for (const thumb of options.thumbnails) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nc-thumb';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `${thumb.label} view`);
    btn.dataset.viewId = thumb.id;

    // <img> for the still preview, <div> placeholder behind it as a fallback.
    const img = document.createElement('img');
    img.className = 'nc-thumb__img';
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';

    const placeholder = document.createElement('div');
    placeholder.className = 'nc-thumb__placeholder';
    // Single-letter glyph (F / S / T / P) — quiet and elegant.
    placeholder.textContent = thumb.label.charAt(0);

    const label = document.createElement('div');
    label.className = 'nc-thumb__label';
    label.textContent = thumb.label;

    if (thumb.imageUrl) {
      img.src = thumb.imageUrl;
      // If the image 404s, ditch the <img> and show the placeholder instead.
      img.addEventListener('error', () => {
        img.remove();
        placeholder.classList.add('is-visible');
      });
      img.addEventListener('load', () => {
        img.classList.add('is-loaded');
      });
      btn.appendChild(img);
      btn.appendChild(placeholder);
    } else {
      placeholder.classList.add('is-visible');
      btn.appendChild(placeholder);
    }

    btn.appendChild(label);
    btn.addEventListener('click', () => options.onSelect(thumb.id));
    buttons.set(thumb.id, btn);
    el.appendChild(btn);
  }

  // Defensive: if a caller didn't pass a thumbnail for one of the preset
  // views, still render a fallback button for it so all four are always
  // available.
  for (const view of CAMERA_VIEWS) {
    if (buttons.has(view.id)) continue;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nc-thumb';
    btn.dataset.viewId = view.id;
    btn.innerHTML = `
      <div class="nc-thumb__placeholder is-visible">${view.label.charAt(0)}</div>
      <div class="nc-thumb__label">${view.label}</div>
    `;
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

  return { element: el, setActive };
}
