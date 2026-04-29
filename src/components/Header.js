// ----------------------------------------------------------------------------
// Header.js
// ----------------------------------------------------------------------------
// The top branding bar of the viewer page. Shows the NOAM CARVER logo and,
// once a model has loaded, the model's name on the right side.
// ----------------------------------------------------------------------------

/**
 * Build the header element.
 *
 * @param {string} logoUrl - URL of the NOAM CARVER logo SVG.
 * @returns {{ element: HTMLElement, setModelName: (name: string|null) => void }}
 */
export function createHeader(logoUrl) {
  const header = document.createElement('header');
  header.className = 'nc-header';
  header.innerHTML = `
    <div class="nc-header__inner">
      <a class="nc-header__brand" href="../" aria-label="NOAM CARVER">
        <img class="nc-header__logo" src="${logoUrl}" alt="NOAM CARVER" />
      </a>
      <div class="nc-header__meta" aria-live="polite">
        <span class="nc-header__eyebrow">Private preview</span>
        <span class="nc-header__model-name" data-role="model-name"></span>
      </div>
    </div>
  `;

  const nameEl = header.querySelector('[data-role="model-name"]');

  /**
   * Set or clear the displayed model name.
   * Pass `null` to hide the name entirely.
   * @param {string|null} name
   */
  function setModelName(name) {
    nameEl.textContent = name ?? '';
    nameEl.style.display = name ? '' : 'none';
  }

  // Start hidden; the main script calls setModelName once the ID is known.
  setModelName(null);

  return { element: header, setModelName };
}
