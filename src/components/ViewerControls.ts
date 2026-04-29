export interface ViewerControlsCallbacks {
  onToggleAutoRotate: (enabled: boolean) => void;
  onResetView: () => void;
  onToggleFullscreen: () => void;
}

export interface ViewerControlsHandle {
  element: HTMLElement;
  setAutoRotate: (enabled: boolean) => void;
  setFullscreenAvailable: (available: boolean) => void;
  setFullscreenActive: (active: boolean) => void;
}

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

export function createViewerControls(callbacks: ViewerControlsCallbacks): ViewerControlsHandle {
  const el = document.createElement('div');
  el.className = 'nc-controls';
  el.setAttribute('role', 'toolbar');
  el.setAttribute('aria-label', 'Viewer controls');

  const rotateBtn = document.createElement('button');
  rotateBtn.type = 'button';
  rotateBtn.className = 'nc-controls__btn';
  rotateBtn.setAttribute('aria-pressed', 'false');
  rotateBtn.setAttribute('aria-label', 'Toggle auto-rotate');
  rotateBtn.title = 'Auto-rotate';
  rotateBtn.innerHTML = ICONS.rotate;

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'nc-controls__btn';
  resetBtn.setAttribute('aria-label', 'Reset view');
  resetBtn.title = 'Reset view';
  resetBtn.innerHTML = ICONS.reset;

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

  function setAutoRotate(enabled: boolean) {
    autoRotate = enabled;
    rotateBtn.classList.toggle('is-active', enabled);
    rotateBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
  }

  function setFullscreenAvailable(available: boolean) {
    fsBtn.style.display = available ? '' : 'none';
  }

  function setFullscreenActive(active: boolean) {
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
