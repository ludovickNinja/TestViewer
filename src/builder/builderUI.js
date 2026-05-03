// ----------------------------------------------------------------------------
// builderUI.js
// ----------------------------------------------------------------------------
// Builds the floating panels that sit over the canvas, plus the small helper
// methods that the main module wires into them.
//
// The UI is intentionally plain DOM — no framework. We expose getters for
// values and setters for displayed state so the main module owns all logic.
// ----------------------------------------------------------------------------

const CATEGORIES = ['Shank', 'Head', 'Prongs', 'Basket', 'Stones', 'Accent', 'Other'];

/**
 * @typedef {{
 *   shanks: { id: string, name: string }[],
 *   heads:  { id: string, name: string }[],
 *   metals: { id: string, name: string }[],
 *   onLoadParts:    () => void,
 *   onShankChange:  (id: string) => void,
 *   onHeadChange:   (id: string) => void,
 *   onRename:       (newName: string) => void,
 *   onCategoryChange:(category: string) => void,
 *   onApplyMetal:   (metalId: string) => void,
 *   onExportGLB:    () => void,
 *   onExportJSON:   () => void,
 *   onResetView:    () => void
 * }} BuilderUIOptions
 */

/**
 * @param {HTMLElement} mountPoint
 * @param {BuilderUIOptions} options
 */
export function createBuilderUI(mountPoint, options) {
  const root = document.createElement('div');
  root.className = 'builder-ui';

  // ---- Top header strip (logo + back link) ----
  const header = document.createElement('header');
  header.className = 'builder-ui__header';
  header.innerHTML = `
    <a class="builder-ui__back" href="../">&larr; Back</a>
    <span class="builder-ui__title-strip">CROWNRING · Builder</span>
  `;
  root.appendChild(header);

  // ---- Toast / status message (shown when GLBs are missing, etc.) ----
  const toast = document.createElement('div');
  toast.className = 'builder-ui__toast';
  toast.setAttribute('role', 'status');
  toast.hidden = true;
  root.appendChild(toast);

  // ---- Left panel: library ----
  const left = document.createElement('section');
  left.className = 'builder-panel builder-panel--left';
  left.innerHTML = `
    <h2 class="builder-panel__title">Builder</h2>

    <label class="builder-field">
      <span class="builder-field__label">Shank</span>
      <select class="builder-field__select" data-role="shank-select"></select>
    </label>

    <label class="builder-field">
      <span class="builder-field__label">Head</span>
      <select class="builder-field__select" data-role="head-select"></select>
    </label>

    <button class="builder-btn builder-btn--primary" type="button" data-role="load-parts">
      Load / Update
    </button>

    <dl class="builder-meta">
      <dt>Selected shank</dt>
      <dd data-role="shank-name">—</dd>
      <dt>Selected head</dt>
      <dd data-role="head-name">—</dd>
    </dl>
  `;
  root.appendChild(left);

  // Populate selectors.
  const shankSelect = left.querySelector('[data-role="shank-select"]');
  const headSelect = left.querySelector('[data-role="head-select"]');
  fillSelect(shankSelect, options.shanks);
  fillSelect(headSelect, options.heads);

  shankSelect.addEventListener('change', () => options.onShankChange(shankSelect.value));
  headSelect.addEventListener('change', () => options.onHeadChange(headSelect.value));
  left.querySelector('[data-role="load-parts"]').addEventListener('click', () => {
    options.onLoadParts();
  });

  const shankNameEl = left.querySelector('[data-role="shank-name"]');
  const headNameEl = left.querySelector('[data-role="head-name"]');

  // ---- Right panel: selection / material ----
  const right = document.createElement('section');
  right.className = 'builder-panel builder-panel--right';
  right.innerHTML = `
    <h2 class="builder-panel__title">Selection</h2>

    <div class="builder-meta builder-meta--single">
      <dt>Part name</dt>
      <dd data-role="selected-name">— No part selected —</dd>
    </div>

    <label class="builder-field">
      <span class="builder-field__label">Rename</span>
      <input class="builder-field__input" type="text" data-role="rename-input"
             placeholder="Select a mesh first" disabled />
    </label>

    <label class="builder-field">
      <span class="builder-field__label">Category</span>
      <select class="builder-field__select" data-role="category-select" disabled>
        ${CATEGORIES.map((c) => `<option value="${c}">${c}</option>`).join('')}
      </select>
    </label>

    <label class="builder-field">
      <span class="builder-field__label">Metal</span>
      <select class="builder-field__select" data-role="metal-select"></select>
    </label>

    <button class="builder-btn builder-btn--primary" type="button"
            data-role="apply-metal" disabled>
      Apply material
    </button>
  `;
  root.appendChild(right);

  fillSelect(right.querySelector('[data-role="metal-select"]'), options.metals);

  const selectedNameEl = right.querySelector('[data-role="selected-name"]');
  const renameInput = right.querySelector('[data-role="rename-input"]');
  const categorySelect = right.querySelector('[data-role="category-select"]');
  const metalSelect = right.querySelector('[data-role="metal-select"]');
  const applyMetalBtn = right.querySelector('[data-role="apply-metal"]');

  renameInput.addEventListener('change', () => {
    const value = renameInput.value.trim();
    if (value) options.onRename(value);
  });
  categorySelect.addEventListener('change', () => {
    options.onCategoryChange(categorySelect.value);
  });
  applyMetalBtn.addEventListener('click', () => {
    options.onApplyMetal(metalSelect.value);
  });

  // ---- Bottom-right action bar ----
  const actions = document.createElement('div');
  actions.className = 'builder-actions';
  actions.innerHTML = `
    <button class="builder-btn builder-btn--ghost" type="button" data-role="reset-view">
      Reset view
    </button>
    <button class="builder-btn builder-btn--ghost" type="button" data-role="export-json">
      Export JSON
    </button>
    <button class="builder-btn builder-btn--primary" type="button" data-role="export-glb">
      Export GLB
    </button>
  `;
  root.appendChild(actions);

  actions.querySelector('[data-role="reset-view"]').addEventListener('click', () => {
    options.onResetView();
  });
  actions.querySelector('[data-role="export-json"]').addEventListener('click', () => {
    options.onExportJSON();
  });
  actions.querySelector('[data-role="export-glb"]').addEventListener('click', () => {
    options.onExportGLB();
  });

  mountPoint.appendChild(root);

  // ---- Public API for the main module ----

  let toastTimer = 0;
  function showToast(message, persist = false) {
    toast.textContent = message;
    toast.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    if (!persist) {
      toastTimer = window.setTimeout(() => {
        toast.hidden = true;
      }, 4000);
    }
  }
  function hideToast() {
    toast.hidden = true;
    if (toastTimer) clearTimeout(toastTimer);
  }

  function setShankName(name) {
    shankNameEl.textContent = name || '—';
  }
  function setHeadName(name) {
    headNameEl.textContent = name || '—';
  }

  /**
   * Update the "right panel" to reflect a freshly selected mesh, or null.
   */
  function setSelected(mesh) {
    if (!mesh) {
      selectedNameEl.textContent = '— No part selected —';
      renameInput.value = '';
      renameInput.disabled = true;
      categorySelect.value = 'Other';
      categorySelect.disabled = true;
      applyMetalBtn.disabled = true;
      return;
    }
    selectedNameEl.textContent = mesh.name || '(unnamed)';
    renameInput.value = mesh.name || '';
    renameInput.disabled = false;
    // The loader stores roles in lowercase ("shank", "head"); the dropdown
    // expects display-case values ("Shank", "Head"). Normalize once.
    categorySelect.value = normalizeCategory(mesh.userData?.builderCategory);
    categorySelect.disabled = false;
    applyMetalBtn.disabled = false;
    if (mesh.userData?.builderMetalId) {
      metalSelect.value = mesh.userData.builderMetalId;
    }
  }

  function getSelectedShankId() {
    return shankSelect.value;
  }
  function getSelectedHeadId() {
    return headSelect.value;
  }
  function getSelectedMetalId() {
    return metalSelect.value;
  }

  function setSelectedShankId(id) {
    if (id) shankSelect.value = id;
  }
  function setSelectedHeadId(id) {
    if (id) headSelect.value = id;
  }

  return {
    root,
    showToast,
    hideToast,
    setShankName,
    setHeadName,
    setSelected,
    getSelectedShankId,
    getSelectedHeadId,
    getSelectedMetalId,
    setSelectedShankId,
    setSelectedHeadId
  };
}

function fillSelect(select, items) {
  select.innerHTML = items
    .map((it) => `<option value="${it.id}">${escapeHtml(it.name)}</option>`)
    .join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function normalizeCategory(cat) {
  if (!cat) return 'Other';
  if (CATEGORIES.includes(cat)) return cat;
  const cap = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  if (CATEGORIES.includes(cap)) return cap;
  return 'Other';
}
