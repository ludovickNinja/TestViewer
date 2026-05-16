// ----------------------------------------------------------------------------
// adminMain.js — entry point for /admin/
// ----------------------------------------------------------------------------
// Authoring surface for the per-device pricing overrides used by the
// wedding-band cost estimator.
//
//   - Top section: live spot prices (gold/silver/platinum, USD/oz). Sourced
//     from Stooq via spotPriceService.js. Shows last-fetched timestamp and
//     a "Refresh now" button. Cache invalidates after 10:00 London each day
//     so a normal page load picks up the morning's prices automatically.
//
//   - Metals table: density (g/cm³) and premium (USD/g) per (karat × color).
//     Final $/g = (spotPerOz / 31.1) × purityFraction + premium; we show
//     the computed $/g read-only beside each row so the impact of editing
//     the premium is visible. Purity and spotMetal aren't editable — they
//     describe the alloy.
//
//   - Labor (USD, flat per band) + markup (%).
//
//   - Save persists the snapshot to localStorage under
//     `noam.carver.pricing.v1`. Reset clears it.
// ----------------------------------------------------------------------------

import '../styles/base.css';
import '../styles/admin.css';

import { loadPricing, savePricing, resetPricing, spotPerOzFor, pricePerGramFor } from '../pricing/pricingService.js';
import { ensureFreshSpot, loadSpot, refreshSpot } from '../pricing/spotPriceService.js';

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
        <section class="admin-section admin-section--spot">
          <h2 class="admin-section__title">Spot prices</h2>
          <p class="admin-section__hint">
            Pulled from Stooq (no key, public). The page auto-refreshes
            after 10:00 London time each day. Final $/g for each metal is
            <code>(spot ÷ 31.1) × purity + premium</code>.
          </p>
          <div class="admin-spot" data-role="spot">
            <div class="admin-spot__row"><dt>Gold</dt><dd data-role="spot-gold">—</dd></div>
            <div class="admin-spot__row"><dt>Silver</dt><dd data-role="spot-silver">—</dd></div>
            <div class="admin-spot__row"><dt>Platinum</dt><dd data-role="spot-platinum">—</dd></div>
          </div>
          <div class="admin-spot__meta">
            <span data-role="spot-meta">No snapshot yet.</span>
            <button type="button" class="admin-btn admin-btn--ghost admin-btn--small" data-role="refresh-spot">
              Refresh now
            </button>
          </div>
        </section>

        <section class="admin-section">
          <h2 class="admin-section__title">Metals</h2>
          <p class="admin-section__hint">
            Density (g/cm³) feeds the volume → mass calculation. Premium is
            the per-gram fee you charge above the raw alloy value (refining,
            forming, etc.); it's added on top of the live spot × purity. The
            computed $/g column updates live as you edit.
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
  let spot = loadSpot();

  // ---- Spot section ----
  const spotGold = appRoot.querySelector('[data-role="spot-gold"]');
  const spotSilver = appRoot.querySelector('[data-role="spot-silver"]');
  const spotPlatinum = appRoot.querySelector('[data-role="spot-platinum"]');
  const spotMeta = appRoot.querySelector('[data-role="spot-meta"]');
  const refreshBtn = appRoot.querySelector('[data-role="refresh-spot"]');

  function renderSpot() {
    if (spot) {
      spotGold.textContent = formatOz(spot.goldPerOzUSD);
      spotSilver.textContent = formatOz(spot.silverPerOzUSD);
      spotPlatinum.textContent = formatOz(spot.platinumPerOzUSD);
      const ts = new Date(spot.fetchedAt).toLocaleString();
      spotMeta.textContent = `Last fetched ${ts} · ${spot.source}`;
    } else {
      spotGold.textContent = formatOz(pricing.fallbackSpot.goldPerOzUSD);
      spotSilver.textContent = formatOz(pricing.fallbackSpot.silverPerOzUSD);
      spotPlatinum.textContent = formatOz(pricing.fallbackSpot.platinumPerOzUSD);
      spotMeta.textContent = 'No fetch yet — using bundled fallback. Press Refresh now.';
    }
    renderComputedPrices();
  }

  // ---- Metals table ----
  const metalsContainer = appRoot.querySelector('[data-role="metals"]');
  const headerRow = document.createElement('div');
  headerRow.className = 'admin-row admin-row--header';
  headerRow.innerHTML = `
    <span>Metal</span>
    <span>Density (g/cm³)</span>
    <span>Premium ($/g)</span>
    <span>Computed $/g</span>
  `;
  metalsContainer.appendChild(headerRow);

  const metalIds = Object.keys(pricing.metals);
  for (const id of metalIds) {
    const m = pricing.metals[id];
    const row = document.createElement('div');
    row.className = 'admin-row admin-row--with-computed';
    row.innerHTML = `
      <label class="admin-row__label">${escapeHtml(m.label)}</label>
      <input class="admin-row__input" type="number" data-role="density" data-id="${id}" min="0" step="0.01" value="${m.densityGPerCc}" />
      <input class="admin-row__input" type="number" data-role="premium" data-id="${id}" min="0" step="0.5" value="${m.premiumPerGramUSD}" />
      <span class="admin-row__readout" data-role="computed" data-id="${id}">—</span>
    `;
    metalsContainer.appendChild(row);
  }

  function renderComputedPrices() {
    for (const id of metalIds) {
      const readout = appRoot.querySelector(`[data-role="computed"][data-id="${id}"]`);
      if (!readout) continue;
      // Build a transient pricing object that picks up the in-form premium
      // edits so the readout reflects the unsaved state. Density isn't in
      // the $/g formula so we don't need it here.
      const premiumInput = appRoot.querySelector(`[data-role="premium"][data-id="${id}"]`);
      const premium = Number(premiumInput?.value);
      const entry = { ...pricing.metals[id] };
      if (Number.isFinite(premium) && premium >= 0) entry.premiumPerGramUSD = premium;
      readout.textContent = formatUSD(pricePerGramFor(entry, spot, pricing));
    }
  }

  // Wire premium edits to live-update the computed column.
  metalsContainer.addEventListener('input', (event) => {
    if (event.target?.dataset?.role === 'premium') renderComputedPrices();
  });

  // ---- Labor + markup ----
  const laborInput = appRoot.querySelector('[data-role="labor"]');
  const markupInput = appRoot.querySelector('[data-role="markup"]');
  laborInput.value = String(pricing.laborUSD);
  markupInput.value = String(pricing.markupPct);

  // ---- Status helpers ----
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
    const fresh = loadPricing();
    for (const id of Object.keys(fresh.metals)) {
      const density = appRoot.querySelector(`[data-role="density"][data-id="${id}"]`);
      const premium = appRoot.querySelector(`[data-role="premium"][data-id="${id}"]`);
      if (density) density.value = String(fresh.metals[id].densityGPerCc);
      if (premium) premium.value = String(fresh.metals[id].premiumPerGramUSD);
    }
    laborInput.value = String(fresh.laborUSD);
    markupInput.value = String(fresh.markupPct);
    renderComputedPrices();
  });

  refreshBtn.addEventListener('click', async () => {
    refreshBtn.disabled = true;
    refreshBtn.textContent = 'Fetching…';
    try {
      spot = await refreshSpot();
      renderSpot();
      flashStatus(status, 'Spot prices updated.');
    } catch (err) {
      console.error(err);
      flashStatus(status, `Fetch failed: ${err.message || err}`);
    } finally {
      refreshBtn.disabled = false;
      refreshBtn.textContent = 'Refresh now';
    }
  });

  // Initial render, then kick off a background freshness check.
  renderSpot();
  ensureFreshSpot().then((fresh) => {
    if (fresh) {
      spot = fresh;
      renderSpot();
    }
  });
}

function collect(appRoot, current) {
  const next = JSON.parse(JSON.stringify(current));
  for (const id of Object.keys(next.metals)) {
    const density = appRoot.querySelector(`[data-role="density"][data-id="${id}"]`);
    const premium = appRoot.querySelector(`[data-role="premium"][data-id="${id}"]`);
    const d = Number(density?.value);
    const p = Number(premium?.value);
    if (Number.isFinite(d) && d > 0) next.metals[id].densityGPerCc = d;
    if (Number.isFinite(p) && p >= 0) next.metals[id].premiumPerGramUSD = p;
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

function formatOz(n) {
  return `${n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })} / oz`;
}
function formatUSD(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

mount();
