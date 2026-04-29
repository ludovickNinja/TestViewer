import type { CameraViewId } from '../three/cameraViews';
import { CAMERA_VIEWS } from '../three/cameraViews';

export interface ThumbnailDefinition {
  id: CameraViewId;
  label: string;
  imageUrl: string | null;
}

export interface ThumbnailStripOptions {
  thumbnails: ThumbnailDefinition[];
  onSelect: (id: CameraViewId) => void;
}

export interface ThumbnailStripHandle {
  element: HTMLElement;
  setActive: (id: CameraViewId) => void;
}

export function createThumbnailStrip(options: ThumbnailStripOptions): ThumbnailStripHandle {
  const el = document.createElement('div');
  el.className = 'nc-thumbs';
  el.setAttribute('role', 'tablist');
  el.setAttribute('aria-label', 'Preset views');

  const buttons = new Map<CameraViewId, HTMLButtonElement>();

  for (const thumb of options.thumbnails) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nc-thumb';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `${thumb.label} view`);
    btn.dataset.viewId = thumb.id;

    const img = document.createElement('img');
    img.className = 'nc-thumb__img';
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';

    const placeholder = document.createElement('div');
    placeholder.className = 'nc-thumb__placeholder';
    placeholder.textContent = thumb.label.charAt(0);

    const label = document.createElement('div');
    label.className = 'nc-thumb__label';
    label.textContent = thumb.label;

    if (thumb.imageUrl) {
      img.src = thumb.imageUrl;
      img.addEventListener('error', () => {
        // Thumbnail not present — fall back to a labeled placeholder.
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

  // Sanity check: any view not provided as a thumbnail still gets a fallback button.
  for (const view of CAMERA_VIEWS) {
    if (!buttons.has(view.id)) {
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
  }

  function setActive(id: CameraViewId) {
    buttons.forEach((btn, key) => {
      const active = key === id;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  return { element: el, setActive };
}
