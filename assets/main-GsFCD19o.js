import"./base-Dr4DB6T4.js";import{s as g,f}from"./modelService-Daq0-EtN.js";const r="/TestViewer/",m=`${r}branding/noam-carver-logo.svg`;function b(){const t=document.getElementById("app");if(!t)throw new Error("Missing #app root element");t.innerHTML=`
    <main class="nc-landing">
      <header class="nc-landing__header">
        <img class="nc-landing__logo" src="${m}" alt="NOAM CARVER" />
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

        <div class="nc-landing__divider" role="presentation"></div>

        <a class="nc-btn nc-btn--ghost nc-landing__builder" href="${r}builder/">
          Builder
        </a>
      </section>

      <footer class="nc-landing__footer">
        <p>NOAM CARVER &middot; Bridal Jewelry</p>
      </footer>
    </main>
  `;const l=t.querySelector('[data-role="form"]'),o=t.querySelector('[data-role="input"]'),s=t.querySelector('[data-role="hint"]'),a=t.querySelector('[data-role="lucky"]');l.addEventListener("submit",n=>{n.preventDefault();const u=g(o.value);if(!u){i("Codes can only contain letters, numbers, dashes, and underscores."),o.focus();return}p(u)}),o.addEventListener("input",()=>i(""));let e=null,c=null;async function d(){if(!(e!==null||c!==null))try{e=await f()}catch(n){console.warn("[landing] could not load models.json",n),c=n,e=[]}}d().then(()=>{e&&e.length>0?a.disabled=!1:(a.disabled=!0,a.title="No sample previews available yet.")}),a.addEventListener("click",async()=>{if(await d(),!e||e.length===0){i("No sample previews are available yet.");return}const n=e[Math.floor(Math.random()*e.length)];p(n)});function i(n){s.textContent=n,s.classList.toggle("is-visible",n.length>0)}}function p(t){const l=`${r}viewer/?id=${encodeURIComponent(t)}`;window.location.assign(l)}b();
