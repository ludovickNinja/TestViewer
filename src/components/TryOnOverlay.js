// ----------------------------------------------------------------------------
// TryOnOverlay.js
// ----------------------------------------------------------------------------
// The DOM chrome for AR "try-on" mode: a close ("Back to viewer") button, a
// status/error line, and a small manual-adjust panel (scale + rotation). It
// does NOT own the camera <video> or the WebGL canvas — the AR controller
// mounts those behind this overlay and reads the adjust values each frame via
// getAdjust().
//
// Vanilla DOM + inline SVG, matching ViewerControls.js. The whole overlay is
// pointer-events:none so it never eats clicks meant for nothing; only the
// interactive controls opt back in.
//
// Why a manual adjust panel: monocular video can't measure true ring size,
// and the stone's default roll can be off for unusual exports — so the
// customer gets direct size/rotation nudges. This is a visualization, not a
// sizing tool, and the copy says so. (The finger-hole axis itself is a fixed
// convention now — GLB local +Z — so there's no axis toggle.)
// ----------------------------------------------------------------------------

const ICONS = {
  close:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"/></svg>'
};

import { DEFAULT_CALIBRATION } from '../ar/ringPlacement.js';

/**
 * @param {object} opts
 * @param {() => void} opts.onClose
 * @param {boolean} [opts.calibration=false] - show the internal calibration
 *   sliders (?ar=1&arcal=1): live numeric tuning of the finger-width factor
 *   and depth-tilt damping, so final values can be read off a real hand and
 *   baked into DEFAULT_CALIBRATION.
 * @returns {{
 *   element: HTMLElement,
 *   setStatus: (text: string) => void,
 *   setError: (text: string) => void,
 *   setTracking: (tracking: boolean) => void,
 *   getAdjust: () => { scaleMultiplier: number, rollRad: number, fingerWidthK?: number, zDamp?: number },
 * }}
 */
export function createTryOnOverlay({ onClose, calibration = false }) {
  const el = document.createElement('div');
  el.className = 'nc-ar';
  el.setAttribute('role', 'group');
  el.setAttribute('aria-label', 'Try-on controls');

  // ---- Top bar: back button + status ----
  const topbar = document.createElement('div');
  topbar.className = 'nc-ar__topbar';

  const backBtn = document.createElement('button');
  backBtn.type = 'button';
  backBtn.className = 'nc-ar__back';
  backBtn.innerHTML = `${ICONS.close}<span>Back to viewer</span>`;
  backBtn.addEventListener('click', () => onClose?.());

  const status = document.createElement('div');
  status.className = 'nc-ar__status';

  topbar.appendChild(backBtn);
  topbar.appendChild(status);

  // ---- Bottom panel: manual adjust ----
  const panel = document.createElement('div');
  panel.className = 'nc-ar__panel';

  const { row: scaleRow, input: scaleInput } = makeSlider({
    label: 'Size',
    min: 0.5,
    max: 2,
    step: 0.01,
    value: 1
  });
  const { row: rollRow, input: rollInput } = makeSlider({
    label: 'Rotate',
    min: -180,
    max: 180,
    step: 1,
    value: 0
  });

  const hint = document.createElement('p');
  hint.className = 'nc-ar__hint';
  hint.textContent = 'Preview only — not a precise ring size.';

  panel.appendChild(scaleRow);
  panel.appendChild(rollRow);

  // Internal calibration sliders (?arcal=1) with live numeric readouts. The
  // dialled-in values are meant to be read off and baked into
  // DEFAULT_CALIBRATION, then this mode goes unused.
  let widthInput = null;
  let tiltInput = null;
  if (calibration) {
    // Range widened after the first calibration pass landed exactly on the
    // old 0.8 ceiling — keep headroom above the current default.
    const calWidth = makeSlider({
      label: 'Width K',
      min: 0.4,
      max: 1.2,
      step: 0.005,
      value: DEFAULT_CALIBRATION.fingerWidthK,
      showValue: true
    });
    const calTilt = makeSlider({
      label: 'Tilt Z',
      min: 0,
      max: 1.5,
      step: 0.05,
      value: DEFAULT_CALIBRATION.zDamp,
      showValue: true
    });
    widthInput = calWidth.input;
    tiltInput = calTilt.input;
    panel.appendChild(calWidth.row);
    panel.appendChild(calTilt.row);
  }

  panel.appendChild(hint);

  el.appendChild(topbar);
  el.appendChild(panel);

  function setStatus(text) {
    el.classList.remove('is-error');
    status.textContent = text;
  }

  function setError(text) {
    el.classList.add('is-error');
    status.textContent = text;
    // No point offering the adjust controls when tracking never started.
    panel.style.display = 'none';
  }

  let trackingState = null;
  function setTracking(tracking) {
    if (tracking === trackingState) return;
    trackingState = tracking;
    if (el.classList.contains('is-error')) return;
    status.textContent = tracking ? '' : 'Point your camera at your hand';
  }

  function getAdjust() {
    const adjust = {
      scaleMultiplier: Number(scaleInput.value) || 1,
      rollRad: ((Number(rollInput.value) || 0) * Math.PI) / 180
    };
    if (widthInput) adjust.fingerWidthK = Number(widthInput.value) || undefined;
    if (tiltInput) adjust.zDamp = Number(tiltInput.value);
    return adjust;
  }

  return { element: el, setStatus, setError, setTracking, getAdjust };
}

/**
 * Build a labelled range slider row, optionally with a live numeric readout
 * (used by the calibration sliders so values can be read off and reported).
 * @returns {{ row: HTMLElement, input: HTMLInputElement }}
 */
function makeSlider({ label, min, max, step, value, showValue = false }) {
  const row = document.createElement('label');
  row.className = 'nc-ar__slider';

  const span = document.createElement('span');
  span.className = 'nc-ar__slider-label';
  span.textContent = label;

  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);

  row.appendChild(span);
  row.appendChild(input);

  if (showValue) {
    const readout = document.createElement('span');
    readout.className = 'nc-ar__value';
    const render = () => {
      readout.textContent = Number(input.value).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
    };
    render();
    input.addEventListener('input', render);
    row.appendChild(readout);
    row.classList.add('nc-ar__slider--with-value');
  }

  return { row, input };
}
