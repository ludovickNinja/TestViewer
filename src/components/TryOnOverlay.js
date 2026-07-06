// ----------------------------------------------------------------------------
// TryOnOverlay.js
// ----------------------------------------------------------------------------
// The DOM chrome for AR "try-on" mode: a close ("Back to viewer") button, a
// status/error line, and a small manual-adjust panel (scale, rotation, and a
// hole-axis toggle). It does NOT own the camera <video> or the WebGL canvas —
// the AR controller mounts those behind this overlay and reads the adjust
// values each frame via getAdjust().
//
// Vanilla DOM + inline SVG, matching ViewerControls.js. The whole overlay is
// pointer-events:none so it never eats clicks meant for nothing; only the
// interactive controls opt back in.
//
// Why a manual adjust panel: a ring GLB carries no standard "finger-hole" axis
// (Rhino exports vary), and monocular video can't measure true ring size — so
// the customer gets direct scale/rotation/axis nudges. This is a visualization,
// not a sizing tool, and the copy says so.
// ----------------------------------------------------------------------------

const ICONS = {
  close:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"/></svg>',
  axis:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>'
};

const AXIS_LABELS = ['X', 'Y', 'Z'];

/**
 * @param {object} opts
 * @param {number} opts.initialAxis - default hole-axis index (0/1/2).
 * @param {() => void} opts.onClose
 * @returns {{
 *   element: HTMLElement,
 *   setStatus: (text: string) => void,
 *   setError: (text: string) => void,
 *   setTracking: (tracking: boolean) => void,
 *   getAdjust: () => { scaleMultiplier: number, rollRad: number, axisIndex: number },
 * }}
 */
export function createTryOnOverlay({ initialAxis = 1, onClose }) {
  let axisIndex = clampAxis(initialAxis);

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

  const axisBtn = document.createElement('button');
  axisBtn.type = 'button';
  axisBtn.className = 'nc-ar__axis';
  axisBtn.title = 'Change which way the band sits on the finger';
  const renderAxis = () => {
    axisBtn.innerHTML = `${ICONS.axis}<span>Fit: ${AXIS_LABELS[axisIndex]}</span>`;
  };
  renderAxis();
  axisBtn.addEventListener('click', () => {
    axisIndex = (axisIndex + 1) % 3;
    renderAxis();
  });

  const hint = document.createElement('p');
  hint.className = 'nc-ar__hint';
  hint.textContent = 'Preview only — not a precise ring size.';

  panel.appendChild(scaleRow);
  panel.appendChild(rollRow);
  panel.appendChild(axisBtn);
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
    return {
      scaleMultiplier: Number(scaleInput.value) || 1,
      rollRad: ((Number(rollInput.value) || 0) * Math.PI) / 180,
      axisIndex
    };
  }

  return { element: el, setStatus, setError, setTracking, getAdjust };
}

function clampAxis(n) {
  const i = Math.round(Number(n));
  return i === 0 || i === 1 || i === 2 ? i : 1;
}

/**
 * Build a labelled range slider row.
 * @returns {{ row: HTMLElement, input: HTMLInputElement }}
 */
function makeSlider({ label, min, max, step, value }) {
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
  return { row, input };
}
