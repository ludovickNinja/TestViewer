/**
 * Brand header for the viewer. Renders the NOAM CARVER wordmark and
 * (optionally) the current model name as a subtitle.
 */
export interface HeaderHandle {
  element: HTMLElement;
  setModelName: (name: string | null) => void;
}

export function createHeader(logoUrl: string): HeaderHandle {
  const header = document.createElement('header');
  header.className = 'nc-header';
  header.innerHTML = `
    <div class="nc-header__inner">
      <a class="nc-header__brand" href="./" aria-label="NOAM CARVER">
        <img class="nc-header__logo" src="${logoUrl}" alt="NOAM CARVER" />
      </a>
      <div class="nc-header__meta" aria-live="polite">
        <span class="nc-header__eyebrow">Private preview</span>
        <span class="nc-header__model-name" data-role="model-name"></span>
      </div>
    </div>
  `;

  const nameEl = header.querySelector<HTMLElement>('[data-role="model-name"]')!;

  function setModelName(name: string | null) {
    nameEl.textContent = name ?? '';
    nameEl.style.display = name ? '' : 'none';
  }

  setModelName(null);

  return { element: header, setModelName };
}
