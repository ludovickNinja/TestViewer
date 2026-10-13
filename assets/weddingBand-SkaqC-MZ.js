import"./base-Dr4DB6T4.js";import{ap as X,e as P,i as Y,f as Q,l as J,j as Z,k as ee}from"./disposeScene-CQn0nB1A.js";import{c as U}from"./builderMaterials-C3vS7jEg.js";import{f as te,m as ae}from"./applyPreset-ou48NXk3.js";import{c as ne}from"./inspector-HwpzU-6S.js";import{l as ie,a as se,e as de,p as oe,c as re,h as le}from"./pricingService-DX4FvGoD.js";const ce=[{size:4,diameterMm:14.07},{size:4.5,diameterMm:14.47},{size:5,diameterMm:14.88},{size:5.5,diameterMm:15.29},{size:6,diameterMm:15.69},{size:6.5,diameterMm:16.1},{size:7,diameterMm:16.51},{size:7.5,diameterMm:16.91},{size:8,diameterMm:17.32},{size:8.5,diameterMm:17.73},{size:9,diameterMm:18.13},{size:9.5,diameterMm:18.54},{size:10,diameterMm:18.95},{size:10.5,diameterMm:19.35},{size:11,diameterMm:19.76},{size:11.5,diameterMm:20.16},{size:12,diameterMm:20.57},{size:12.5,diameterMm:20.98},{size:13,diameterMm:21.38}],me={width:{min:2,max:8,step:.5,default:4},thickness:{min:1.2,max:3,step:.1,default:1.8}},ue={profile:"flat",comfortFit:!0,goldId:"yellow-gold",fingerSize:7},L={fingerSizes:ce,ranges:me,defaults:ue},$=.001;function pe(e){return e*$/2}const ge=.08,fe=.25;function V(e){const{widthMm:d,thicknessMm:b,insideRadiusM:l,profile:E,comfortFit:p,opts:g={}}=e,c=Math.max(2,g.arcSegments??16),F=d*$,i=b*$,y=l,a=y+i,o=F/2,x=Math.min(o*.49,i*.4),h=(r=>Math.max(0,Math.min(r,x)))((g.edgeBevel??ge)*$),k=p?Math.max(0,Math.min((g.comfortDepth??fe)*$,i*.5,o*.8)):0,I=k>1e-6,w=I?0:h,C=I?y+k:y+w;let _=(g.domeHeight??.15*b)*$;_=Math.max(0,Math.min(_,i*.6));const s=E==="dome"&&_>1e-6,m=[],t=(r,f,M,v)=>{for(let u=0;u<=c;u++){const S=v+Math.PI/2*(u/c);m.push(new P(r+M*Math.cos(S),f+M*Math.sin(S)))}};if(m.push(new P(C,-o)),h>0?t(a-h,-o+h,h,-Math.PI/2):m.push(new P(a,-o)),s){const r=(o*o+_*_)/(2*_),f=a+_-r,M=Math.asin(o/r);for(let v=1;v<c;v++){const u=-M+2*M*v/c;m.push(new P(f+r*Math.cos(u),r*Math.sin(u)))}}if(h>0?t(a-h,o-h,h,0):m.push(new P(a,o)),m.push(new P(C,o)),I){const r=(k*k+o*o)/(2*k),f=y+r,M=Math.atan2(o,k-r),v=2*(Math.PI-M),u=Math.max(c,Math.ceil(c*v/(Math.PI/2)));for(let S=1;S<u;S++){const T=M+v*(S/u);m.push(new P(f+r*Math.cos(T),r*Math.sin(T)))}}else if(w>0){const r=y+w,f=o-w;for(let u=1;u<=c;u++){const S=Math.PI/2+Math.PI/2*(u/c);m.push(new P(r+w*Math.cos(S),f+w*Math.sin(S)))}m.push(new P(y,-o+w));const M=y+w,v=-o+w;for(let u=1;u<c;u++){const S=Math.PI+Math.PI/2*(u/c);m.push(new P(M+w*Math.cos(S),v+w*Math.sin(S)))}}return m.push(m[0].clone()),m}function he(e,d=128){const b=V(e),l=new X(b,d);return l.computeVertexNormals(),l}function be(e,d){const{metals:b,karats:l,fingerSizes:E,ranges:p,defaults:g}=d,c=new Set(["yellow-gold","white-gold","rose-gold"]),F=n=>c.has(n),i=document.createElement("div");i.className="wedding-band-ui";const y=document.createElement("header");y.className="wedding-band-ui__header",y.innerHTML=`
    <a class="wedding-band-ui__back" href="../">&larr; Back</a>
    <span class="wedding-band-ui__title-strip">NOAM CARVER · Wedding Band</span>
  `,i.appendChild(y);const a=document.createElement("section");a.className="wedding-band-panel wedding-band-panel--left",a.innerHTML=`
    <h2 class="wedding-band-panel__title">Wedding Band</h2>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">
        Width <span class="wedding-band-field__value" data-role="width-value"></span>
      </span>
      <input class="wedding-band-field__range" type="range"
             data-role="width"
             min="${p.width.min}" max="${p.width.max}" step="${p.width.step}" />
    </label>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">
        Thickness <span class="wedding-band-field__value" data-role="thickness-value"></span>
      </span>
      <input class="wedding-band-field__range" type="range"
             data-role="thickness"
             min="${p.thickness.min}" max="${p.thickness.max}" step="${p.thickness.step}" />
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
      <span class="wedding-band-field__label">Metal</span>
      <select class="wedding-band-field__select" data-role="metal"></select>
    </label>

    <label class="wedding-band-field" data-role="karat-field">
      <span class="wedding-band-field__label">Karat</span>
      <div class="wedding-band-segmented" data-role="karat"></div>
    </label>

    <label class="wedding-band-field">
      <span class="wedding-band-field__label">Finger Size (US)</span>
      <select class="wedding-band-field__select" data-role="finger-size"></select>
    </label>

    <section class="wedding-band-pricing" data-role="pricing">
      <h3 class="wedding-band-pricing__title">Estimated Price</h3>
      <dl class="wedding-band-pricing__rows">
        <div class="wedding-band-pricing__row">
          <dt>Weight</dt>
          <dd data-role="price-weight">—</dd>
        </div>
        <div class="wedding-band-pricing__row">
          <dt>$/g</dt>
          <dd data-role="price-pergram">—</dd>
        </div>
        <div class="wedding-band-pricing__row">
          <dt>Metal</dt>
          <dd data-role="price-metal">—</dd>
        </div>
        <div class="wedding-band-pricing__row">
          <dt>Labor</dt>
          <dd data-role="price-labor">—</dd>
        </div>
        <div class="wedding-band-pricing__row">
          <dt>Markup</dt>
          <dd data-role="price-markup">—</dd>
        </div>
        <div class="wedding-band-pricing__row wedding-band-pricing__row--total">
          <dt>Total</dt>
          <dd data-role="price-total">—</dd>
        </div>
      </dl>
      <p class="wedding-band-pricing__source" data-role="price-source">Spot: bundled fallback</p>
      <a class="wedding-band-pricing__admin" href="../admin/">Edit pricing &rarr;</a>
    </section>
  `,i.appendChild(a);const o=document.createElement("div");o.className="wedding-band-actions",o.innerHTML=`
    <button class="wedding-band-btn wedding-band-btn--ghost" type="button" data-role="reset-view">
      Reset view
    </button>
  `,i.appendChild(o),e.appendChild(i);const x=a.querySelector('[data-role="metal"]');x.innerHTML=b.map(n=>`<option value="${n.id}">${N(n.name)}</option>`).join("");const z=a.querySelector('[data-role="karat"]');z.innerHTML=l.map(n=>`<button type="button" data-value="${n.id}">${N(n.label)}</button>`).join("");const h=a.querySelector('[data-role="karat-field"]'),k=a.querySelector('[data-role="finger-size"]');k.innerHTML=E.map(n=>`<option value="${n.size}">US ${we(n.size)} &nbsp;·&nbsp; ${n.diameterMm.toFixed(2)} mm</option>`).join("");const I=a.querySelector('[data-role="width"]'),w=a.querySelector('[data-role="width-value"]'),C=a.querySelector('[data-role="thickness"]'),_=a.querySelector('[data-role="thickness-value"]'),s=a.querySelector('[data-role="profile"]'),m=a.querySelector('[data-role="comfort-fit"]'),t={widthMm:g.widthMm??p.width.default,thicknessMm:g.thicknessMm??p.thickness.default,profile:g.profile,comfortFit:!!g.comfortFit,metalId:g.metalId,karat:g.karat,fingerSize:g.fingerSize};function r(){I.value=String(t.widthMm),w.textContent=`${t.widthMm.toFixed(1)} mm`,C.value=String(t.thicknessMm),_.textContent=`${t.thicknessMm.toFixed(1)} mm`,q(s,t.profile),q(m,t.comfortFit?"yes":"no"),x.value=t.metalId,h.style.display=F(t.metalId)?"":"none",q(z,t.karat??""),k.value=String(t.fingerSize)}r();function f(){d.onChange({...t})}I.addEventListener("input",()=>{t.widthMm=Number(I.value),w.textContent=`${t.widthMm.toFixed(1)} mm`,f()}),C.addEventListener("input",()=>{t.thicknessMm=Number(C.value),_.textContent=`${t.thicknessMm.toFixed(1)} mm`,f()}),s.addEventListener("click",n=>{const R=n.target.closest("button[data-value]");R&&(t.profile=R.dataset.value,q(s,t.profile),f())}),m.addEventListener("click",n=>{const R=n.target.closest("button[data-value]");R&&(t.comfortFit=R.dataset.value==="yes",q(m,t.comfortFit?"yes":"no"),f())}),x.addEventListener("change",()=>{t.metalId=x.value,F(t.metalId)?(t.karat||(t.karat=l[0]?.id??"14k"),h.style.display="",q(z,t.karat)):(t.karat=null,h.style.display="none"),f()}),z.addEventListener("click",n=>{const R=n.target.closest("button[data-value]");R&&(t.karat=R.dataset.value,q(z,t.karat),f())}),k.addEventListener("change",()=>{t.fingerSize=Number(k.value),f()}),o.querySelector('[data-role="reset-view"]').addEventListener("click",()=>{d.onResetView()});const M=a.querySelector('[data-role="price-weight"]'),v=a.querySelector('[data-role="price-pergram"]'),u=a.querySelector('[data-role="price-metal"]'),S=a.querySelector('[data-role="price-labor"]'),T=a.querySelector('[data-role="price-markup"]'),B=a.querySelector('[data-role="price-total"]'),K=a.querySelector('[data-role="price-source"]');function j(n){if(!n){M.textContent="—",v.textContent="—",u.textContent="—",S.textContent="—",T.textContent="—",B.textContent="—";return}M.textContent=`${n.weightGrams.toFixed(2)} g`,n.breakdown?(v.textContent=D(n.breakdown.pricePerGramUSD),u.textContent=D(n.breakdown.metalUSD),S.textContent=D(n.breakdown.laborUSD),T.textContent=D(n.breakdown.markupUSD),B.textContent=D(n.breakdown.totalUSD)):(v.textContent="—",u.textContent="—",S.textContent="—",T.textContent="—",B.textContent="—"),n.spotSourceLabel&&(K.textContent=n.spotSourceLabel)}return{root:i,getParams:()=>({...t}),setParams:n=>{Object.assign(t,n),r()},setPricing:j}}function D(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2})}function q(e,d){for(const b of e.querySelectorAll("button[data-value]"))b.classList.toggle("is-active",b.dataset.value===d)}function we(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function N(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Me=1e6;function ve(e){if(!e||e.length<4)return 0;let d=0,b=0;for(let p=0;p<e.length-1;p++){const g=e[p],c=e[p+1],F=g.x*c.y-c.x*g.y;d+=F,b+=(g.x+c.x)*F}d*=.5;const l=Math.abs(d);if(l<1e-18)return 0;const E=b/(6*d);return 2*Math.PI*E*l}function Se(e,d){return e*Me*d}const ye=new URLSearchParams(window.location.search).get("debug")==="1",ke=[{id:"yellow-gold",name:"Yellow Gold",preset:"yellow-gold"},{id:"white-gold",name:"White Gold",preset:"white-gold"},{id:"rose-gold",name:"Rose Gold",preset:"rose-gold"},{id:"platinum",name:"Platinum",preset:"white-gold"},{id:"silver",name:"Sterling Silver",preset:"white-gold"}],G=ke.map(e=>({...te(ae,e.preset),...e})),_e=[{id:"10k",label:"10K"},{id:"14k",label:"14K"},{id:"18k",label:"18K"}],O=L.fingerSizes||[];function A(e){return G.find(d=>d.id===e)||G[0]}function xe(e){const d=O.find(b=>b.size===e);return d?d.diameterMm:16.51}function ze(){const e=document.getElementById("app");if(!e)throw new Error("Missing #app root element");e.innerHTML=`
    <main class="wedding-band-page">
      <div class="wedding-band-stage" data-role="stage"></div>
      <div class="wedding-band-overlay" data-role="overlay"></div>
    </main>
  `;const d=e.querySelector('[data-role="stage"]'),b=e.querySelector('[data-role="overlay"]'),l=Y(d,{canvasClass:"wedding-band-canvas"}),E=ye?ne(l):null,p=L.defaults.metalId??L.defaults.goldId??G[0].id,g=le(p)?L.defaults.karat??"14k":null,c={widthMm:L.ranges.width.default,thicknessMm:L.ranges.thickness.default,profile:L.defaults.profile,comfortFit:L.defaults.comfortFit,metalId:p,karat:g,fingerSize:L.defaults.fingerSize},F=A(c.metalId),i=new Q(H(c),U(F,{environments:l.environments}));i.rotation.x=Math.PI/2,i.visible=!1,l.scene.add(i);let y=c.metalId,a=1;const o=ie();let x=se(),z=null;function h(s){if(!z)return;const m=Ie(s),t=ve(m),r=oe(s.metalId,s.karat),f=o.metals[r];if(!f){z.setPricing({weightGrams:0,breakdown:null,spotSourceLabel:k()});return}const M=Se(t,f.densityGPerCc),v=re(o,x,r,M);z.setPricing({weightGrams:M,breakdown:v,spotSourceLabel:k()})}function k(){if(!x)return"Spot: bundled fallback";const s=new Date(x.fetchedAt).toLocaleString();return`Spot: ${x.source} · ${s}`}function I(){const s=Z(i);ee(l.camera,l.controls,s),a=s.radius,l.applyMaterialEnvironments(i,null,a),l.requestRender()}l.envMapsReady.then(()=>{i.visible=!0,I(),E?.attach(i,{modelId:"wedding-band",scale:a})});function w(s){const m=i.geometry;if(i.geometry=H(s),m&&m.dispose(),s.metalId!==y){const t=A(s.metalId),r=i.material;i.material=U(t,{environments:l.environments}),r&&r.dispose&&r.dispose(),y=s.metalId}h(s),l.requestRender()}z=be(b,{metals:G,karats:_e,fingerSizes:O,ranges:L.ranges,defaults:c,onChange:w,onResetView:()=>I()}),h(c),de().then(s=>{s&&(x=s,h(z.getParams()))});const C=()=>{const s=d.getBoundingClientRect();l.setSize(s.width,s.height)};C();const _=new ResizeObserver(C);_.observe(d),window.addEventListener("resize",C),l.start(),window.addEventListener("beforeunload",()=>{_.disconnect(),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose&&i.material.dispose(),E?.dispose(),J(l)})}function H(e){return he(W(e))}function Ie(e){return V(W(e))}function W(e){return{widthMm:e.widthMm,thicknessMm:e.thicknessMm,insideRadiusM:pe(xe(e.fingerSize)),profile:e.profile,comfortFit:e.comfortFit}}ze();
