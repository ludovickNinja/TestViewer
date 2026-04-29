export interface LoadingOverlayHandle {
  element: HTMLElement;
  show: (label?: string) => void;
  setProgress: (ratio: number) => void;
  hide: () => void;
}

export function createLoadingOverlay(): LoadingOverlayHandle {
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

  const label = el.querySelector<HTMLElement>('[data-role="label"]')!;
  const fill = el.querySelector<HTMLElement>('[data-role="fill"]')!;

  function show(text = 'Loading preview') {
    label.textContent = text;
    fill.style.width = '0%';
    el.style.display = '';
  }

  function setProgress(ratio: number) {
    if (Number.isFinite(ratio)) {
      const pct = Math.max(0, Math.min(1, ratio)) * 100;
      fill.style.width = `${pct.toFixed(0)}%`;
      fill.classList.remove('is-indeterminate');
    } else {
      fill.classList.add('is-indeterminate');
    }
  }

  function hide() {
    el.style.display = 'none';
  }

  return { element: el, show, setProgress, hide };
}
