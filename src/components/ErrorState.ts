export interface ErrorStateOptions {
  title: string;
  message?: string;
}

export function createErrorState(options: ErrorStateOptions): HTMLElement {
  const el = document.createElement('div');
  el.className = 'nc-error';
  el.setAttribute('role', 'alert');
  el.innerHTML = `
    <div class="nc-error__panel">
      <div class="nc-error__title"></div>
      <div class="nc-error__message"></div>
    </div>
  `;
  el.querySelector<HTMLElement>('.nc-error__title')!.textContent = options.title;
  el.querySelector<HTMLElement>('.nc-error__message')!.textContent = options.message ?? '';
  return el;
}
