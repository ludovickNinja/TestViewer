// ----------------------------------------------------------------------------
// ThumbnailActions.js
// ----------------------------------------------------------------------------
// The two small icon buttons that sit on either side of the bottom thumbnail
// strip:
//
//   - Leading  (left)  : "Screenshot" — downloads a square JPEG of the
//                        current camera view at full size.
//   - Trailing (right) : "Download all angles" — downloads one square JPEG
//                        per preset view (front / side / top / perspective).
//
// Both buttons are disabled until the model has finished loading, since
// there's nothing meaningful to capture before that.
// ----------------------------------------------------------------------------

const ICONS = {
  // Outline camera icon — represents "take a picture of what you see".
  camera:
    '<svg viewBox="0 0 24 24" aria-hidden="true">'
    + '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" '
    + 'd="M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>'
    + '<circle cx="12" cy="13" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    + '</svg>',
  // Tray + down-arrow — universal "download" affordance.
  download:
    '<svg viewBox="0 0 24 24" aria-hidden="true">'
    + '<path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" '
    + 'd="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"/>'
    + '</svg>'
};

/**
 * @param {{
 *   onScreenshot: () => void,
 *   onDownloadAll: () => void,
 * }} callbacks
 * @returns {{
 *   leading: HTMLButtonElement,
 *   trailing: HTMLButtonElement,
 *   setEnabled: (enabled: boolean) => void,
 * }}
 */
export function createThumbnailActions(callbacks) {
  const leading = document.createElement('button');
  leading.type = 'button';
  leading.className = 'nc-thumb-action nc-thumb-action--leading';
  leading.title = 'Download current view (1:1, full size)';
  leading.setAttribute('aria-label', 'Download current view');
  leading.innerHTML = ICONS.camera;
  leading.disabled = true;
  leading.addEventListener('click', () => callbacks.onScreenshot());

  const trailing = document.createElement('button');
  trailing.type = 'button';
  trailing.className = 'nc-thumb-action nc-thumb-action--trailing';
  trailing.title = 'Download all 4 angle views (1:1, full size)';
  trailing.setAttribute('aria-label', 'Download all angle views');
  trailing.innerHTML = ICONS.download;
  trailing.disabled = true;
  trailing.addEventListener('click', () => callbacks.onDownloadAll());

  function setEnabled(enabled) {
    leading.disabled = !enabled;
    trailing.disabled = !enabled;
  }

  return { leading, trailing, setEnabled };
}
