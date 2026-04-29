// ----------------------------------------------------------------------------
// ViewerControls.js
// ----------------------------------------------------------------------------
// The small floating toolbar in the top-right (or bottom-center on mobile):
//
//   - Auto-rotate toggle
//   - Reset view (returns to the default Perspective preset)
//   - Fullscreen toggle (only shown if the browser supports it)
//
// The icons are inline SVGs so we don't need an icon font or extra files.
// ----------------------------------------------------------------------------

const ICONS = {
  rotate:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 5V2L7 6l5 4V7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-4.9-4H5.07A7 7 0 1 0 12 5z"/></svg>',
  reset:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"/></svg>',
  expand:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 5h5V3H3v7h2zm9-2v2h5v5h2V3zM5 14H3v7h7v-2H5zm14 5h-5v2h7v-7h-2z"/></svg>',
  collapse:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>'
};

/**
 * @param {{
 *   onToggleAutoRotate: (enabled: boolean) => void,
 *   onResetView: () => void,
 *   onToggleFullscreen: () => void,
 * }} callbacks
 * @returns {{
 *   element: HTMLElement,
 *   setAutoRotate: (enabled: boolean) => void,
 *   setFullscreenAvailable: (available: boolean) => void,
 *   setFullscreenActive: (active: boolean) => void,
 * }}
 */
export function createViewerControls(callbacks) {
  const el = document.createElement('div');
  el.className = 'nc-controls';
  el.setAttribute('role', 'toolbar');
  el.setAttribute('aria-label', 'Viewer controls');

  // ---- Auto-rotate ----
  const rotateBtn = document.createElement('button');
  rotateBtn.type = 'button';
  rotateBtn.className = 'nc-controls__btn';
  rotateBtn.setAttribute('aria-pressed', 'false');
  rotateBtn.setAttribute('aria-label', 'Toggle auto-rotate');
  rotateBtn.title = 'Auto-rotate';
  rotateBtn.innerHTML = ICONS.rotate;

  // ---- Reset view ----
  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'nc-controls__btn';
  resetBtn.setAttribute('aria-label', 'Reset view');
  resetBtn.title = 'Reset view';
  resetBtn.innerHTML = ICONS.reset;

  // ---- Fullscreen ----
  const fsBtn = document.createElement('button');
  fsBtn.type = 'button';
  fsBtn.className = 'nc-controls__btn';
  fsBtn.setAttribute('aria-label', 'Toggle fullscreen');
  fsBtn.title = 'Fullscreen';
  fsBtn.innerHTML = ICONS.expand;

  el.appendChild(rotateBtn);
  el.appendChild(resetBtn);
  el.appendChild(fsBtn);

  let autoRotate = false;

  rotateBtn.addEventListener('click', () => {
    autoRotate = !autoRotate;
    setAutoRotate(autoRotate);
    callbacks.onToggleAutoRotate(autoRotate);
  });
  resetBtn.addEventListener('click', () => callbacks.onResetView());
  fsBtn.addEventListener('click', () => callbacks.onToggleFullscreen());

  function setAutoRotate(enabled) {
    autoRotate = enabled;
    rotateBtn.classList.toggle('is-active', enabled);
    rotateBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
  }

  function setFullscreenAvailable(available) {
    fsBtn.style.display = available ? '' : 'none';
  }

  function setFullscreenActive(active) {
    // Swap the icon between "expand" and "collapse" depending on state.
    fsBtn.innerHTML = active ? ICONS.collapse : ICONS.expand;
    fsBtn.classList.toggle('is-active', active);
  }

  return {
    element: el,
    setAutoRotate,
    setFullscreenAvailable,
    setFullscreenActive
  };
}
