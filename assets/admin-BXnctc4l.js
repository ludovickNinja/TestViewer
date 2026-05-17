import"./base-Dr4DB6T4.js";import{l as k,a as D,s as q,r as C,b as $,e as U,d as x}from"./pricingService-DX4FvGoD.js";function N(){const e=document.getElementById("app");if(!e)return;e.innerHTML=`
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
  `;const r=k();let a=D();const S=e.querySelector('[data-role="spot-gold"]'),y=e.querySelector('[data-role="spot-silver"]'),l=e.querySelector('[data-role="spot-platinum"]'),d=e.querySelector('[data-role="spot-meta"]'),o=e.querySelector('[data-role="refresh-spot"]');function f(){if(a){S.textContent=u(a.goldPerOzUSD),y.textContent=u(a.silverPerOzUSD),l.textContent=u(a.platinumPerOzUSD);const t=new Date(a.fetchedAt).toLocaleString();d.textContent=`Last fetched ${t} · ${a.source}`}else S.textContent=u(r.fallbackSpot.goldPerOzUSD),y.textContent=u(r.fallbackSpot.silverPerOzUSD),l.textContent=u(r.fallbackSpot.platinumPerOzUSD),d.textContent="No fetch yet — using bundled fallback. Press Refresh now.";g()}const b=e.querySelector('[data-role="metals"]'),i=document.createElement("div");i.className="admin-row admin-row--header",i.innerHTML=`
    <span>Metal</span>
    <span>Density (g/cm³)</span>
    <span>Premium ($/g)</span>
    <span>Computed $/g</span>
  `,b.appendChild(i);const c=Object.keys(r.metals);for(const t of c){const n=r.metals[t],s=document.createElement("div");s.className="admin-row admin-row--with-computed",s.innerHTML=`
      <label class="admin-row__label">${O(n.label)}</label>
      <input class="admin-row__input" type="number" data-role="density" data-id="${t}" min="0" step="0.01" value="${n.densityGPerCc}" />
      <input class="admin-row__input" type="number" data-role="premium" data-id="${t}" min="0" step="0.5" value="${n.premiumPerGramUSD}" />
      <span class="admin-row__readout" data-role="computed" data-id="${t}">—</span>
    `,b.appendChild(s)}function g(){for(const t of c){const n=e.querySelector(`[data-role="computed"][data-id="${t}"]`);if(!n)continue;const s=e.querySelector(`[data-role="premium"][data-id="${t}"]`),m=Number(s?.value),P={...r.metals[t]};Number.isFinite(m)&&m>=0&&(P.premiumPerGramUSD=m),n.textContent=F(x(P,a,r))}}b.addEventListener("input",t=>{t.target?.dataset?.role==="premium"&&g()});const h=e.querySelector('[data-role="labor"]'),_=e.querySelector('[data-role="markup"]');h.value=String(r.laborUSD),_.value=String(r.markupPct);const w=e.querySelector('[data-role="form"]'),v=e.querySelector('[data-role="status"]');w.addEventListener("submit",t=>{t.preventDefault();const n=L(e,r);q(n),p(v,"Saved.")}),e.querySelector('[data-role="reset"]').addEventListener("click",()=>{C(),p(v,"Reset to defaults. Reload to refresh.");const t=k();for(const n of Object.keys(t.metals)){const s=e.querySelector(`[data-role="density"][data-id="${n}"]`),m=e.querySelector(`[data-role="premium"][data-id="${n}"]`);s&&(s.value=String(t.metals[n].densityGPerCc)),m&&(m.value=String(t.metals[n].premiumPerGramUSD))}h.value=String(t.laborUSD),_.value=String(t.markupPct),g()}),o.addEventListener("click",async()=>{o.disabled=!0,o.textContent="Fetching…";try{a=await $(),f(),p(v,"Spot prices updated.")}catch(t){console.error(t),p(v,`Fetch failed: ${t.message||t}`)}finally{o.disabled=!1,o.textContent="Refresh now"}}),f(),U().then(t=>{t&&(a=t,f())})}function L(e,r){const a=JSON.parse(JSON.stringify(r));for(const o of Object.keys(a.metals)){const f=e.querySelector(`[data-role="density"][data-id="${o}"]`),b=e.querySelector(`[data-role="premium"][data-id="${o}"]`),i=Number(f?.value),c=Number(b?.value);Number.isFinite(i)&&i>0&&(a.metals[o].densityGPerCc=i),Number.isFinite(c)&&c>=0&&(a.metals[o].premiumPerGramUSD=c)}const S=e.querySelector('[data-role="labor"]'),y=e.querySelector('[data-role="markup"]'),l=Number(S?.value),d=Number(y?.value);return Number.isFinite(l)&&l>=0&&(a.laborUSD=l),Number.isFinite(d)&&d>=0&&(a.markupPct=d),a}function p(e,r){e.textContent=r,clearTimeout(p._t),p._t=setTimeout(()=>{e.textContent=""},2500)}function u(e){return`${e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2})} / oz`}function F(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2})}function O(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}N();
