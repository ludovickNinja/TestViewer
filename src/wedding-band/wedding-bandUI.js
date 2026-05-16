// ----------------------------------------------------------------------------
// wedding-bandUI.js
// ----------------------------------------------------------------------------
// Builds the parameter panel that floats over the canvas. Plain DOM, no
// framework. The main module owns all logic; the UI just emits onChange
// whenever any input changes and exposes getParams / setParams.
// ----------------------------------------------------------------------------

/**
 * @typedef {{
 *   widthMm: number,
 *   thicknessMm: number,
 *   profile: 'flat' | 'dome',
 *   comfortFit: boolean,
 *   goldId: string,
 *   fingerSize: number
 * }} BandParams
 *
 * @typedef {{
 *   golds:       { id: string, name: string }[],
 *   fingerSizes: { size: number, diameterMm: number }[],
 *   ranges:      { width: Range, thickness: Range },
 *   defaults:    BandParams,
 *   onChange:    (params: BandParams) => void,
 *   onResetView: () => void
 * }} WeddingBandUIOptions
 *
 * @typedef {{ min: number, max: number, step: number, default: number }} Range
 */

/**
 * @param {HTMLElement} mountPoint
 * @param {WeddingBandUIOptions} options
 */
export function createWeddingBandUI(mountPoint, options) {
  const { golds, fingerSizes, ranges, defaults } = options;

  const root = document.createElement('div');
  root.className = 'wedding-band-ui';

  // ---- Header strip ----
  const header = document.createElement('header');
  header.className = 'wedding-band-ui__header';
  header.innerHTML = `
    <a class="wedding-band-ui__back" href="../">&larr; Back</a>
    <span class="wedding-band-ui__title-strip">NOAM CARVER · Wedding Band</span>
  `;
  root.appendChild(header);

  // ---- Left panel: parameters ----
  const panel = document.createElement('section');
  panel.className = 'wedding-band-panel wedding-band-panel--left';
  panel.innerHTML = `
    <h2 class="wedding-band-panel__title">Wedding Band</h2>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">
        Width <span class="wedding-band-field__value" data-role="width-value"></span>
      </span>
      <input class="wedding-band-field__range" type="range"
             data-role="width"
             min="${ranges.width.min}" max="${ranges.width.max}" step="${ranges.width.step}" />
    </label>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">
        Thickness <span class="wedding-band-field__value" data-role="thickness-value"></span>
      </span>
      <input class="wedding-band-field__range" type="range"
             data-role="thickness"
             min="${ranges.thickness.min}" max="${ranges.thickness.max}" step="${ranges.thickness.step}" />
    </label>

    <div class="wedding-band-field">
      <span class="wedding-band-field__label">Band Profile</span>
      <div class="wedding-band-segmented" data-role="profile">
        <button type="button" data-value="flat">Flat</button>
        <button type="button" data-value="dome">Dome</button>
      </div>
    </div>

    <div class="wedding-band-field">
      <span class="wedding-band-field__label">Comfort Fit</span>
      <div class="wedding-band-segmented" data-role="comfort-fit">
        <button type="button" data-value="yes">Yes</button>
        <button type="button" data-value="no">No</button>
      </div>
    </div>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">Gold Color</span>
      <select class="wedding-band-field__select" data-role="gold"></select>
    </label>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">Finger Size (US)</span>
      <select class="wedding-band-field__select" data-role="finger-size"></select>
    </label>
  `;
  root.appendChild(panel);

  // ---- Bottom-right action bar ----
  const actions = document.createElement('div');
  actions.className = 'wedding-band-actions';
  actions.innerHTML = `
    <button class="wedding-band-btn wedding-band-btn--ghost" type="button" data-role="reset-view">
      Reset view
    </button>
  `;
  root.appendChild(actions);

  mountPoint.appendChild(root);

  // ---- Populate selects ----
  const goldSelect = panel.querySelector('[data-role="gold"]');
  goldSelect.innerHTML = golds
    .map((g) => `<option value="${g.id}">${escapeHtml(g.name)}</option>`)
    .join('');

  const fingerSelect = panel.querySelector('[data-role="finger-size"]');
  fingerSelect.innerHTML = fingerSizes
    .map(
      (f) =>
        `<option value="${f.size}">US ${formatSize(f.size)} &nbsp;·&nbsp; ${f.diameterMm.toFixed(2)} mm</option>`
    )
    .join('');

  // ---- Wire up inputs ----
  const widthInput = panel.querySelector('[data-role="width"]');
  const widthValue = panel.querySelector('[data-role="width-value"]');
  const thicknessInput = panel.querySelector('[data-role="thickness"]');
  const thicknessValue = panel.querySelector('[data-role="thickness-value"]');
  const profileGroup = panel.querySelector('[data-role="profile"]');
  const comfortGroup = panel.querySelector('[data-role="comfort-fit"]');

  /** @type {BandParams} */
  const state = {
    widthMm: defaults.widthMm ?? ranges.width.default,
    thicknessMm: defaults.thicknessMm ?? ranges.thickness.default,
    profile: defaults.profile,
    comfortFit: !!defaults.comfortFit,
    goldId: defaults.goldId,
    fingerSize: defaults.fingerSize
  };

  function applyStateToInputs() {
    widthInput.value = String(state.widthMm);
    widthValue.textContent = `${state.widthMm.toFixed(1)} mm`;
    thicknessInput.value = String(state.thicknessMm);
    thicknessValue.textContent = `${state.thicknessMm.toFixed(1)} mm`;
    setSegmented(profileGroup, state.profile);
    setSegmented(comfortGroup, state.comfortFit ? 'yes' : 'no');
    goldSelect.value = state.goldId;
    fingerSelect.value = String(state.fingerSize);
  }
  applyStateToInputs();

  function emit() {
    options.onChange({ ...state });
  }

  widthInput.addEventListener('input', () => {
    state.widthMm = Number(widthInput.value);
    widthValue.textContent = `${state.widthMm.toFixed(1)} mm`;
    emit();
  });
  thicknessInput.addEventListener('input', () => {
    state.thicknessMm = Number(thicknessInput.value);
    thicknessValue.textContent = `${state.thicknessMm.toFixed(1)} mm`;
    emit();
  });
  profileGroup.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-value]');
    if (!btn) return;
    state.profile = btn.dataset.value;
    setSegmented(profileGroup, state.profile);
    emit();
  });
  comfortGroup.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-value]');
    if (!btn) return;
    state.comfortFit = btn.dataset.value === 'yes';
    setSegmented(comfortGroup, state.comfortFit ? 'yes' : 'no');
    emit();
  });
  goldSelect.addEventListener('change', () => {
    state.goldId = goldSelect.value;
    emit();
  });
  fingerSelect.addEventListener('change', () => {
    state.fingerSize = Number(fingerSelect.value);
    emit();
  });

  actions.querySelector('[data-role="reset-view"]').addEventListener('click', () => {
    options.onResetView();
  });

  return {
    root,
    getParams: () => ({ ...state }),
    setParams: (next) => {
      Object.assign(state, next);
      applyStateToInputs();
    }
  };
}

function setSegmented(group, value) {
  for (const btn of group.querySelectorAll('button[data-value]')) {
    btn.classList.toggle('is-active', btn.dataset.value === value);
  }
}

function formatSize(size) {
  return Number.isInteger(size) ? String(size) : size.toFixed(1);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
