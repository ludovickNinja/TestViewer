// ----------------------------------------------------------------------------
// LoadingOverlay.js
// ----------------------------------------------------------------------------
// A small centered "Loading preview" panel with a thin progress bar.
//
// The bar handles two cases:
//   1. We know the file's total size (from the HTTP Content-Length header):
//      the bar fills proportionally, 0% -> 100%.
//   2. We don't know it: the bar plays a subtle indeterminate animation so
//      the customer still gets feedback that something is happening.
// ----------------------------------------------------------------------------

/**
 * @returns {{
 *   element: HTMLElement,
 *   show: (label?: string) => void,
 *   setProgress: (ratio: number) => void,
 *   hide: () => void,
 * }}
 */
export function createLoadingOverlay() {
  const el = document.createElement('div');
  el.className = 'nc-loading';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.innerHTML = `
    <div class="nc-loading__panel">
      <div class="nc-loading__label" data-role="label">Loading preview</div>
      <div class="nc-loading__bar" aria-hidden="true">
        <div class="nc-loading__bar-fill" data-role="fill"></div>
      </div>
    </div>
  `;
  el.style.display = 'none';

  const label = el.querySelector('[data-role="label"]');
  const fill = el.querySelector('[data-role="fill"]');

  function show(text = 'Loading preview') {
    label.textContent = text;
    fill.style.width = '0%';
    el.style.display = '';
  }

  /**
   * @param {number} ratio - A number between 0 and 1, or NaN if unknown.
   */
  function setProgress(ratio) {
    if (Number.isFinite(ratio)) {
      const pct = Math.max(0, Math.min(1, ratio)) * 100;
      fill.style.width = `${pct.toFixed(0)}%`;
      fill.classList.remove('is-indeterminate');
    } else {
      // No known total — show the looping indeterminate animation instead.
      fill.classList.add('is-indeterminate');
    }
  }

  function hide() {
    el.style.display = 'none';
  }

  return { element: el, show, setProgress, hide };
}
