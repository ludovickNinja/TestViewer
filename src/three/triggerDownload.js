// ----------------------------------------------------------------------------
// triggerDownload.js
// ----------------------------------------------------------------------------
// Wraps the "click a temporary anchor" trick that turns a data URL (or any
// other URL) into a browser download. Used by the screenshot and "download
// all angles" buttons next to the thumbnail strip.
// ----------------------------------------------------------------------------

/**
 * @param {string} url - data: URL, blob: URL, or any downloadable URL.
 * @param {string} filename
 */
export function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  // Some browsers require the anchor to be in the DOM before .click() will
  // actually start the download.
  document.body.appendChild(a);
  a.click();
  a.remove();
}
