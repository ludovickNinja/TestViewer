/**
 * Top-level viewer layout. Provides the slots that the rest of the app
 * mounts content into: header, viewer stage, controls, thumbnails.
 */
export interface ViewerLayoutHandle {
  root: HTMLElement;
  headerSlot: HTMLElement;
  stage: HTMLElement;
  overlay: HTMLElement;
  controlsSlot: HTMLElement;
  thumbnailsSlot: HTMLElement;
}

export function createViewerLayout(): ViewerLayoutHandle {
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
    headerSlot: root.querySelector<HTMLElement>('[data-slot="header"]')!,
    stage: root.querySelector<HTMLElement>('[data-slot="stage"]')!,
    overlay: root.querySelector<HTMLElement>('[data-slot="overlay"]')!,
    controlsSlot: root.querySelector<HTMLElement>('[data-slot="controls"]')!,
    thumbnailsSlot: root.querySelector<HTMLElement>('[data-slot="thumbnails"]')!
  };
}
