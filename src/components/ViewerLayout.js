// ----------------------------------------------------------------------------
// ViewerLayout.js
// ----------------------------------------------------------------------------
// The page skeleton for the viewer route. It's just a few empty <div>s with
// `data-slot` attributes so other components know where to mount.
//
//   header       - the brand bar
//   stage        - where the Three.js <canvas> goes
//   overlay      - loading spinner / error states sit here, on top of the canvas
//   controls     - floating toolbar (auto-rotate / reset / fullscreen)
//   thumbnails   - bottom strip of preset views
// ----------------------------------------------------------------------------

/**
 * @returns {{
 *   root: HTMLElement,
 *   headerSlot: HTMLElement,
 *   stage: HTMLElement,
 *   overlay: HTMLElement,
 *   controlsSlot: HTMLElement,
 *   thumbnailsSlot: HTMLElement,
 * }}
 */
export function createViewerLayout() {
  const root = document.createElement('div');
  root.className = 'nc-app';
  root.innerHTML = `
    <div class="nc-app__header" data-slot="header"></div>
    <main class="nc-app__main">
      <div class="nc-stage" data-slot="stage">
        <div class="nc-stage__overlay" data-slot="overlay"></div>
        <div class="nc-stage__controls" data-slot="controls"></div>
      </div>
      <div class="nc-app__thumbs" data-slot="thumbnails"></div>
    </main>
  `;

  return {
    root,
    headerSlot: root.querySelector('[data-slot="header"]'),
    stage: root.querySelector('[data-slot="stage"]'),
    overlay: root.querySelector('[data-slot="overlay"]'),
    controlsSlot: root.querySelector('[data-slot="controls"]'),
    thumbnailsSlot: root.querySelector('[data-slot="thumbnails"]')
  };
}
