// ----------------------------------------------------------------------------
// ErrorState.js
// ----------------------------------------------------------------------------
// A simple "something went wrong" panel. Used in two places on the viewer:
//   - "No preview selected." when the URL is missing ?id=...
//   - "Preview not found." when the .glb fails to load
// ----------------------------------------------------------------------------

/**
 * @param {{ title: string, message?: string }} options
 * @returns {HTMLElement}
 */
export function createErrorState(options) {
  const el = document.createElement('div');
  el.className = 'nc-error';
  el.setAttribute('role', 'alert');
  el.innerHTML = `
    <div class="nc-error__panel">
      <div class="nc-error__title"></div>
      <div class="nc-error__message"></div>
    </div>
  `;
  // Use textContent (not innerHTML) so we never accidentally interpret HTML
  // from an error message — a small but real safety win.
  el.querySelector('.nc-error__title').textContent = options.title;
  el.querySelector('.nc-error__message').textContent = options.message ?? '';
  return el;
}
