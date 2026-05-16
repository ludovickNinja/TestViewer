// ----------------------------------------------------------------------------
// adminMain.js — entry point for /admin/
// ----------------------------------------------------------------------------
// Form-driven editor for the per-device pricing overrides used by the
// wedding-band cost estimator. Reads the merged defaults+overrides via
// pricingService.loadPricing(), lets the user edit every field, and writes
// back via savePricing(). A "Reset to defaults" button clears the override
// key so subsequent loads return the bundled JSON.
// ----------------------------------------------------------------------------

import '../styles/base.css';
import '../styles/admin.css';

import { loadPricing, savePricing, resetPricing } from '../pricing/pricingService.js';

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  appRoot.innerHTML = `
    <main class="admin-page">
      <header class="admin-page__header">
        <a class="admin-page__back" href="../wedding-band/">&larr; Back to wedding band</a>
        <h1 class="admin-page__title">Pricing</h1>
        <p class="admin-page__subtitle">
          Numbers are saved locally to this browser. Reset to restore the
          bundled defaults.
        </p>
      </header>

      <form class="admin-form" data-role="form">
        <section class="admin-section">
          <h2 class="admin-section__title">Metals</h2>
          <p class="admin-section__hint">
            Density (g/cm³) feeds the volume → mass calculation. Price per
            gram is the raw metal cost; labor and markup apply on top.
          </p>
          <div class="admin-table" data-role="metals"></div>
        </section>

        <section class="admin-section">
          <h2 class="admin-section__title">Labor &amp; markup</h2>
          <div class="admin-field">
            <label for="labor">Labor per band (USD)</label>
            <input type="number" id="labor" data-role="labor" min="0" step="1" />
          </div>
          <div class="admin-field">
            <label for="markup">Markup (% of metal + labor)</label>
            <input type="number" id="markup" data-role="markup" min="0" step="0.5" />
          </div>
        </section>

        <div class="admin-actions">
          <button type="submit" class="admin-btn admin-btn--primary">Save</button>
          <button type="button" class="admin-btn admin-btn--ghost" data-role="reset">Reset to defaults</button>
          <span class="admin-status" data-role="status" aria-live="polite"></span>
        </div>
      </form>
    </main>
  `;

  const pricing = loadPricing();

  const metalsContainer = appRoot.querySelector('[data-role="metals"]');
  const headerRow = document.createElement('div');
  headerRow.className = 'admin-row admin-row--header';
  headerRow.innerHTML = `
    <span>Metal</span>
    <span>Density (g/cm³)</span>
    <span>Price / g (USD)</span>
  `;
  metalsContainer.appendChild(headerRow);

  const metalIds = Object.keys(pricing.metals);
  for (const id of metalIds) {
    const m = pricing.metals[id];
    const row = document.createElement('div');
    row.className = 'admin-row';
    row.innerHTML = `
      <label class="admin-row__label">${escapeHtml(m.label)}</label>
      <input class="admin-row__input" type="number" data-role="density" data-id="${id}" min="0" step="0.01" value="${m.densityGPerCc}" />
      <input class="admin-row__input" type="number" data-role="price" data-id="${id}" min="0" step="0.5" value="${m.pricePerGramUSD}" />
    `;
    metalsContainer.appendChild(row);
  }

  const laborInput = appRoot.querySelector('[data-role="labor"]');
  const markupInput = appRoot.querySelector('[data-role="markup"]');
  laborInput.value = String(pricing.laborUSD);
  markupInput.value = String(pricing.markupPct);

  const form = appRoot.querySelector('[data-role="form"]');
  const status = appRoot.querySelector('[data-role="status"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const next = collect(appRoot, pricing);
    savePricing(next);
    flashStatus(status, 'Saved.');
  });

  appRoot.querySelector('[data-role="reset"]').addEventListener('click', () => {
    resetPricing();
    flashStatus(status, 'Reset to defaults. Reload to refresh.');
    // Repopulate the form with the freshly-loaded (now default) values.
    const fresh = loadPricing();
    for (const id of Object.keys(fresh.metals)) {
      const density = appRoot.querySelector(`[data-role="density"][data-id="${id}"]`);
      const price = appRoot.querySelector(`[data-role="price"][data-id="${id}"]`);
      if (density) density.value = String(fresh.metals[id].densityGPerCc);
      if (price) price.value = String(fresh.metals[id].pricePerGramUSD);
    }
    laborInput.value = String(fresh.laborUSD);
    markupInput.value = String(fresh.markupPct);
  });
}

function collect(appRoot, current) {
  const next = JSON.parse(JSON.stringify(current));
  for (const id of Object.keys(next.metals)) {
    const density = appRoot.querySelector(`[data-role="density"][data-id="${id}"]`);
    const price = appRoot.querySelector(`[data-role="price"][data-id="${id}"]`);
    const d = Number(density?.value);
    const p = Number(price?.value);
    if (Number.isFinite(d) && d > 0) next.metals[id].densityGPerCc = d;
    if (Number.isFinite(p) && p >= 0) next.metals[id].pricePerGramUSD = p;
  }
  const laborInput = appRoot.querySelector('[data-role="labor"]');
  const markupInput = appRoot.querySelector('[data-role="markup"]');
  const labor = Number(laborInput?.value);
  const markup = Number(markupInput?.value);
  if (Number.isFinite(labor) && labor >= 0) next.laborUSD = labor;
  if (Number.isFinite(markup) && markup >= 0) next.markupPct = markup;
  return next;
}

function flashStatus(el, msg) {
  el.textContent = msg;
  clearTimeout(flashStatus._t);
  flashStatus._t = setTimeout(() => { el.textContent = ''; }, 2500);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

mount();
