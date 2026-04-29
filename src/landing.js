// ----------------------------------------------------------------------------
// landing.js — entry point for the LANDING page (/)
// ----------------------------------------------------------------------------
// The landing page lets the user do one of two things:
//
//   1. Paste their preview code into the input and submit.
//      -> Redirects to /viewer/?id=<sanitized code>.
//
//   2. Click "Test your luck".
//      -> Picks a random ID from /public/models.json and redirects there.
//
// If models.json is missing or empty, the "Test your luck" button quietly
// disables itself and shows a small note.
// ----------------------------------------------------------------------------

import './styles/base.css';
import './styles/landing.css';

import { fetchAvailableModelIds, sanitizeModelId } from './services/modelService.js';

const baseUrl = import.meta.env.BASE_URL ?? '/';
const logoUrl = `${baseUrl}branding/noam-carver-logo.svg`;

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  // Build the entire landing page as one HTML string. Keeps it easy to read.
  appRoot.innerHTML = `
    <main class="nc-landing">
      <header class="nc-landing__header">
        <img class="nc-landing__logo" src="${logoUrl}" alt="NOAM CARVER" />
        <p class="nc-landing__eyebrow">Private 3D previews</p>
      </header>

      <section class="nc-landing__panel">
        <h1 class="nc-landing__title">Enter your preview code</h1>
        <p class="nc-landing__lede">
          Use the code we sent you, or try a random sample from our gallery.
        </p>

        <form class="nc-landing__form" data-role="form" autocomplete="off" novalidate>
          <label class="nc-landing__label" for="nc-code">Preview code</label>
          <input
            id="nc-code"
            class="nc-landing__input"
            data-role="input"
            type="text"
            inputmode="latin"
            spellcheck="false"
            autocapitalize="off"
            autocorrect="off"
            placeholder="e.g. NC12345"
            maxlength="64"
          />
          <p class="nc-landing__hint" data-role="hint" aria-live="polite"></p>

          <div class="nc-landing__actions">
            <button class="nc-btn nc-btn--primary" type="submit">View preview</button>
            <button class="nc-btn nc-btn--ghost" type="button" data-role="lucky" disabled>
              Test your luck
            </button>
          </div>
        </form>
      </section>

      <footer class="nc-landing__footer">
        <p>NOAM CARVER &middot; Bridal Jewelry</p>
      </footer>
    </main>
  `;

  const form = appRoot.querySelector('[data-role="form"]');
  const input = appRoot.querySelector('[data-role="input"]');
  const hint = appRoot.querySelector('[data-role="hint"]');
  const luckyBtn = appRoot.querySelector('[data-role="lucky"]');

  // ---- 1. "View preview" form submit ----
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const safe = sanitizeModelId(input.value);
    if (!safe) {
      // Show inline validation rather than navigating to a broken URL.
      showHint('Codes can only contain letters, numbers, dashes, and underscores.');
      input.focus();
      return;
    }
    goToViewer(safe);
  });

  // Clear the hint as soon as the user starts editing again.
  input.addEventListener('input', () => showHint(''));

  // ---- 2. "Test your luck" — fetch the manifest, pick a random ID ----
  // We do this lazily on click so the page itself loads instantly.
  let availableIds = null;     // null = not yet fetched
  let availabilityError = null;

  async function ensureAvailability() {
    if (availableIds !== null || availabilityError !== null) return;
    try {
      availableIds = await fetchAvailableModelIds();
    } catch (err) {
      console.warn('[landing] could not load models.json', err);
      availabilityError = err;
      availableIds = [];
    }
  }

  // Pre-fetch in the background so the button is enabled before the user
  // even tries it. If the fetch fails we just leave the button disabled.
  ensureAvailability().then(() => {
    if (availableIds && availableIds.length > 0) {
      luckyBtn.disabled = false;
    } else {
      luckyBtn.disabled = true;
      luckyBtn.title = 'No sample previews available yet.';
    }
  });

  luckyBtn.addEventListener('click', async () => {
    await ensureAvailability();
    if (!availableIds || availableIds.length === 0) {
      showHint('No sample previews are available yet.');
      return;
    }
    const pick = availableIds[Math.floor(Math.random() * availableIds.length)];
    goToViewer(pick);
  });

  /** Show a small validation/info message under the input. Empty string clears it. */
  function showHint(text) {
    hint.textContent = text;
    hint.classList.toggle('is-visible', text.length > 0);
  }
}

/**
 * Send the user to /viewer/?id=<id>, respecting Vite's base path.
 * @param {string} id - Already sanitized.
 */
function goToViewer(id) {
  const target = `${baseUrl}viewer/?id=${encodeURIComponent(id)}`;
  window.location.assign(target);
}

mount();
