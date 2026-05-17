import{ap as at,aq as dt,ar as ct,as as ht,at as ut,au as pt,av as gt,aw as mt,C as ft,e as vt,R as bt,ax as nt,ay as At,az as yt,aA as wt,aB as xt}from"./disposeScene-CwT6_1wO.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class M{constructor(t,e,i,l,m="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(m),this.domElement.classList.add("controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("name"),M.nextNameID=M.nextNameID||0,this.$name.id=`lil-gui-name-${++M.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",p=>p.stopPropagation()),this.domElement.addEventListener("keyup",p=>p.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ct extends M{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function J(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const _t={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:J,toHexString:J},P={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},$t={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const i=P.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const l=s*i<<16^t*i<<8^e*i<<0;return P.toHexString(l)}},Et={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=P.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const l=s*i<<16^t*i<<8^e*i<<0;return P.toHexString(l)}},kt=[_t,P,$t,Et];function St(s){return kt.find(t=>t.match(s))}class Mt extends M{constructor(t,e,i,l){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=St(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const m=J(this.$text.value);m&&this._setValueFromHexString(m)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class N extends M{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ft extends M{constructor(t,e,i,l,m,p){super(t,e,i,"number"),this._initInput(),this.min(l),this.max(m);const A=p!==void 0;this.step(A?p:this._getImplicitStep(),A),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},i=d=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+d),this.$input.value=this.getValue())},l=d=>{d.key==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),i(this._step*this._arrowKeyMultiplier(d)*-1))},m=d=>{this._inputFocused&&(d.preventDefault(),i(this._step*this._normalizeMouseWheel(d)))};let p=!1,A,_,u,f,y;const x=5,F=d=>{A=d.clientX,_=u=d.clientY,p=!0,f=this.getValue(),y=0,window.addEventListener("mousemove",k),window.addEventListener("mouseup",$)},k=d=>{if(p){const b=d.clientX-A,w=d.clientY-_;Math.abs(w)>x?(d.preventDefault(),this.$input.blur(),p=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>x&&$()}if(!p){const b=d.clientY-u;y-=b*this._step*this._arrowKeyMultiplier(d),f+y>this._max?y=this._max-f:f+y<this._min&&(y=this._min-f),this._snapClampSetValue(f+y)}u=d.clientY},$=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",$)},E=()=>{this._inputFocused=!0},c=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",l),this.$input.addEventListener("wheel",m,{passive:!1}),this.$input.addEventListener("mousedown",F),this.$input.addEventListener("focus",E),this.$input.addEventListener("blur",c)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(c,d,b,w,B)=>(c-d)/(b-d)*(B-w)+w,e=c=>{const d=this.$slider.getBoundingClientRect();let b=t(c,d.left,d.right,this._min,this._max);this._snapClampSetValue(b)},i=c=>{this._setDraggingStyle(!0),e(c.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",m)},l=c=>{e(c.clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",m)};let p=!1,A,_;const u=c=>{c.preventDefault(),this._setDraggingStyle(!0),e(c.touches[0].clientX),p=!1},f=c=>{c.touches.length>1||(this._hasScrollBar?(A=c.touches[0].clientX,_=c.touches[0].clientY,p=!0):u(c),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchend",x))},y=c=>{if(p){const d=c.touches[0].clientX-A,b=c.touches[0].clientY-_;Math.abs(d)>Math.abs(b)?u(c):(window.removeEventListener("touchmove",y),window.removeEventListener("touchend",x))}else c.preventDefault(),e(c.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",x)},F=this._callOnFinishChange.bind(this),k=400;let $;const E=c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)&&this._hasScrollBar)return;c.preventDefault();const b=this._normalizeMouseWheel(c)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout($),$=setTimeout(F,k)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",E,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Lt extends M{constructor(t,e,i,l){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Ot extends M{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Dt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function It(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let et=!1;class W{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:l,title:m="Controls",closeFolders:p=!1,injectStyles:A=!0,touchStyles:_=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(m),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),_&&this.domElement.classList.add("allow-touch-styles"),!et&&A&&(It(Dt),et=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=p}add(t,e,i,l,m){if(Object(i)===i)return new Lt(this,t,e,i);const p=t[e];switch(typeof p){case"number":return new Ft(this,t,e,i,l,m);case"boolean":return new Ct(this,t,e);case"string":return new Ot(this,t,e);case"function":return new N(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,p)}addColor(t,e,i=1){return new Mt(this,t,e,i)}addFolder(t){const e=new W({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof N||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof N)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=m=>{m.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const l=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const X={None:mt,Linear:gt,Reinhard:pt,Cineon:ut,ACESFilmic:ht,AgX:ct,Neutral:dt},it=[["metalness",0,1,.01],["roughness",0,1,.01],["transmission",0,1,.01],["thickness",0,5,.01],["ior",1,2.7,.001],["dispersion",0,1,.001],["bounces",1,8,1],["reflectivity",0,1,.01],["clearcoat",0,1,.01],["clearcoatRoughness",0,1,.01],["sheen",0,1,.01],["envMapIntensity",0,5,.05],["opacity",0,1,.01],["attenuationDistance",.1,20,.05]],Vt=(()=>{const s={"(none)":""};for(const{id:t,group:e,label:i}of at(nt)){const l=e==="metals"?"Metal":"Gem";s[`${l}: ${i}`]=t}return s})();function Tt(s){const{renderer:t,scene:e,camera:i,canvas:l}=s,m=new bt,p=new vt;let A=null,_=null,u=null,f=null,y=null,x=1;const F=new Map,k=document.createElement("div");k.className="nc-inspector-panel",k.innerHTML=`
    <div class="nc-inspector-header">
      <strong>Inspector</strong>
      <span class="nc-inspector-hint">click a mesh</span>
    </div>
    <div class="nc-inspector-body" data-empty="true">
      Nothing selected.
    </div>
  `;const $=k.querySelector(".nc-inspector-body");document.body.appendChild(k);const E=new W({title:"Debug"});E.domElement.classList.add("nc-inspector-gui");const c=E.addFolder("Scene");c.add(t,"toneMappingExposure",0,5,.01).name("exposure"),typeof e.environmentIntensity=="number"&&c.add(e,"environmentIntensity",0,5,.05).name("env intensity");const d={mode:Ht(X,t.toneMapping)||"ACESFilmic"};c.add(d,"mode",Object.keys(X)).name("tone mapping").onChange(n=>{t.toneMapping=X[n],e.traverse(o=>{o.isMesh&&(Array.isArray(o.material)?o.material:[o.material]).forEach(a=>a&&(a.needsUpdate=!0))})});const w={source:"color",color:e.background?.isColor?"#"+e.background.getHexString():"#f4f4f5"};function B(){w.source==="metal"&&s.environments?.metal?e.background=s.environments.metal:w.source==="gem"&&s.environments?.gem?e.background=s.environments.gem:w.source==="none"?e.background=null:e.background?.isColor?e.background.set(w.color):e.background=new ft(w.color)}const st=s.environments?["color","metal","gem","none"]:["color","none"];if(c.add(w,"source",st).name("bg source").onChange(B),c.addColor(w,"color").name("bg color").onChange(()=>{w.source==="color"&&B()}),c.close(),s.lights){const n=E.addFolder("Lights");for(const[o,r]of Object.entries(s.lights)){const a=n.addFolder(o);a.add(r,"visible"),a.add(r,"intensity",0,10,.05),r.color&&a.addColor({color:"#"+r.color.getHexString()},"color").onChange(h=>r.color.set(h)),r.groundColor&&a.addColor({ground:"#"+r.groundColor.getHexString()},"ground").onChange(h=>r.groundColor.set(h)),r.position&&r.isDirectionalLight&&(a.add(r.position,"x",-10,10,.05).name("pos.x"),a.add(r.position,"y",-10,10,.05).name("pos.y"),a.add(r.position,"z",-10,10,.05).name("pos.z")),a.close()}n.close()}const D=E.addFolder("Camera");D.add(i,"fov",10,90,1).onChange(()=>i.updateProjectionMatrix()),D.add(i,"near",.001,1,.001).onChange(()=>i.updateProjectionMatrix()),D.add(i,"far",1,200,1).onChange(()=>i.updateProjectionMatrix()),D.add({log:()=>{const{x:n,y:o,z:r}=i.position;console.log("camera position:",[+n.toFixed(3),+o.toFixed(3),+r.toFixed(3)])}},"log").name("log position"),D.close();const T=E.addFolder("Overrides");T.add({copy:async()=>{const n=JSON.stringify(Y(),null,2);try{await navigator.clipboard.writeText(n),console.log(`[inspector] copied overrides to clipboard:
`+n)}catch(o){console.warn("[inspector] clipboard unavailable, logging instead:",o),console.log(n)}}},"copy").name("copy JSON"),T.add({download:()=>{const n=`${y||"model"}.json`;Pt(n,Y())}},"download").name("download .json"),T.add({clear:()=>{F.clear(),console.log("[inspector] overrides cleared")}},"clear").name("clear"),T.close();function ot(){if(!A)return[];const n=[];return A.traverse(o=>{o.isMesh&&o.visible&&n.push(o)}),n}function U(n){const o=n.clientX,r=n.clientY;function a(h){l.removeEventListener("pointerup",a);const g=h.clientX-o,O=h.clientY-r;Math.hypot(g,O)>4||rt(h.clientX,h.clientY)}l.addEventListener("pointerup",a)}function rt(n,o){const r=l.getBoundingClientRect();p.x=(n-r.left)/r.width*2-1,p.y=-((o-r.top)/r.height)*2+1,m.setFromCamera(p,i);const a=m.intersectObjects(ot(),!1);if(a.length===0){j(null);return}j(a[0].object)}function j(n){if(_=n,u&&(e.remove(u),u.dispose(),u=null),f&&(f.destroy(),f=null),!n){$.dataset.empty="true",$.textContent="Nothing selected.";return}u=new At(n,4904703),u.material.depthTest=!1,u.material.transparent=!0,e.add(u),I(n),K(n)}function I(n){const o=n.geometry,r=n.position,a=n.rotation,h=n.scale,g=Array.isArray(n.material)?n.material[0]:n.material,O=o?.attributes?.position?.count??0,v=o?.index?o.index.count/3:O/3,C=g?[["name",g.name||"(unnamed)"],["type",g.type],["color",g.color?"#"+g.color.getHexString():"—"],["metalness",z(g.metalness)],["roughness",z(g.roughness)],["transmission",z(g.transmission)],["ior",z(g.ior)],["envMapIntensity",z(g.envMapIntensity)],["envMap",g.envMap?"set":"none"]]:[["material","none"]];$.dataset.empty="false",$.innerHTML=`
      <div class="nc-row"><span>name</span><b>${R(n.name)||"(unnamed)"}</b></div>
      <div class="nc-row"><span>type</span><b>${R(n.type)}</b></div>
      <div class="nc-row"><span>uuid</span><b class="nc-mono">${n.uuid.slice(0,8)}</b></div>
      <div class="nc-row"><span>visible</span><b>${n.visible}</b></div>
      <div class="nc-section">Transform</div>
      <div class="nc-row"><span>position</span><b class="nc-mono">${G(r)}</b></div>
      <div class="nc-row"><span>rotation</span><b class="nc-mono">${G(a,"rad")}</b></div>
      <div class="nc-row"><span>scale</span><b class="nc-mono">${G(h)}</b></div>
      <div class="nc-section">Geometry</div>
      <div class="nc-row"><span>type</span><b>${R(o?.type??"—")}</b></div>
      <div class="nc-row"><span>vertices</span><b>${O}</b></div>
      <div class="nc-row"><span>triangles</span><b>${Math.round(v)}</b></div>
      <div class="nc-section">Material</div>
      ${C.map(([L,H])=>`<div class="nc-row"><span>${L}</span><b>${R(String(H))}</b></div>`).join("")}
    `}function K(n){f=E.addFolder(`Selection: ${n.name||n.type}`),f.add(n,"visible").onChange(S);const o=f.addFolder("Transform");o.add(n.position,"x",-5,5,.001).name("pos.x").onChange(S),o.add(n.position,"y",-5,5,.001).name("pos.y").onChange(S),o.add(n.position,"z",-5,5,.001).name("pos.z").onChange(S),o.add(n.rotation,"x",-Math.PI,Math.PI,.001).name("rot.x").onChange(S),o.add(n.rotation,"y",-Math.PI,Math.PI,.001).name("rot.y").onChange(S),o.add(n.rotation,"z",-Math.PI,Math.PI,.001).name("rot.z").onChange(S),o.add(n.scale,"x",.01,5,.001).name("scl.x").onChange(S),o.add(n.scale,"y",.01,5,.001).name("scl.y").onChange(S),o.add(n.scale,"z",.01,5,.001).name("scl.z").onChange(S),o.close();const r=Array.isArray(n.material)?n.material[0]:n.material;if(r){const h=f.addFolder("Material"),g={preset:""},O=h.add(g,"preset",Vt).name("apply preset").onChange(v=>{if(!v)return;const C=yt(nt,v);if(C){wt(r,C,s.environments,x);for(const[L,H]of Object.entries(C))L==="label"||L.startsWith("$")||V(r.name,L,H,{preScaled:!0});C.shader&&typeof s.reapplyMeshMaterial=="function"?(s.reapplyMeshMaterial(n,Y(),x),K(n),j(n)):(h.controllersRecursive().forEach(L=>L.updateDisplay()),I(n)),g.preset="",O.updateDisplay()}});if(s.environments){const v=zt(r,s.environments);h.add({env:v},"env",["metal","gem","none"]).name("envMap").onChange(C=>{C==="metal"?r.envMap=s.environments.metal:C==="gem"?r.envMap=s.environments.gem:r.envMap=null,r.needsUpdate=!0,V(r.name,"envMap",C),I(n)})}r.color&&h.addColor({color:"#"+r.color.getHexString()},"color").onChange(v=>{r.color.set(v),V(r.name,"color",v)}),r.attenuationColor&&h.addColor({attenuationColor:"#"+r.attenuationColor.getHexString()},"attenuationColor").onChange(v=>{r.attenuationColor.set(v),V(r.name,"attenuationColor",v)});for(const[v,C,L,H]of it)typeof r[v]=="number"&&h.add(r,v,C,L,H).onChange(lt=>{V(r.name,v,lt),I(n)});h.add({wireframe:!!r.wireframe},"wireframe").onChange(v=>{r.wireframe=v})}const a=f.addFolder("Preset");a.add({copy:async()=>{const h=Z(n),g=JSON.stringify(h,null,2);try{await navigator.clipboard.writeText(g),console.log(`[inspector] copied preset to clipboard:
`+g)}catch(O){console.warn("[inspector] clipboard unavailable, logging instead:",O),console.log(g)}}},"copy").name("copy as JSON"),a.add({log:()=>console.log("[inspector] selected:",n,Z(n))},"log").name("log to console"),a.close(),f.open()}function Z(n){const o=Array.isArray(n.material)?n.material[0]:n.material,r={name:n.name||null,type:n.type,uuid:n.uuid,visible:n.visible,position:n.position.toArray().map(a=>+a.toFixed(4)),rotation:[n.rotation.x,n.rotation.y,n.rotation.z].map(a=>+a.toFixed(4)),scale:n.scale.toArray().map(a=>+a.toFixed(4))};if(o){const a={type:o.type,name:o.name||null};o.color&&(a.color="#"+o.color.getHexString()),o.attenuationColor&&(a.attenuationColor="#"+o.attenuationColor.getHexString());for(const[h]of it)typeof o[h]=="number"&&Number.isFinite(o[h])&&(a[h]=+o[h].toFixed(4));typeof o.wireframe=="boolean"&&(a.wireframe=o.wireframe),r.material=a}return r}function S(){u&&u.update(),_&&I(_)}function V(n,o,r,{preScaled:a=!1}={}){if(!n)return;const h=F.get(n)??{};if(typeof r=="number"){const g=!a&&xt(o)&&x!==0?r/x:r;h[o]=+g.toFixed(4)}else h[o]=r;F.set(n,h)}function Y(){const n={};for(const[o,r]of F)n[o]={...r};return n}let Q=0;function q(){Q=requestAnimationFrame(q),u&&u.update(),s.requestRender?.()}q(),l.addEventListener("pointerdown",U);function tt(n){n.key==="Escape"&&j(null)}return window.addEventListener("keydown",tt),{attach(n,o={}){if(A=n,y=o.modelId??null,x=Number.isFinite(o.scale)&&o.scale>0?o.scale:1,o.initialOverrides&&typeof o.initialOverrides=="object")for(const[r,a]of Object.entries(o.initialOverrides))a&&typeof a=="object"&&F.set(r,{...a})},dispose(){cancelAnimationFrame(Q),l.removeEventListener("pointerdown",U),window.removeEventListener("keydown",tt),u&&(e.remove(u),u.dispose()),E.destroy(),k.remove()}}}function z(s){return s==null?"—":typeof s!="number"?String(s):s.toFixed(3)}function G(s,t=""){return`${s.x.toFixed(3)}, ${s.y.toFixed(3)}, ${s.z.toFixed(3)}${t?" "+t:""}`}function Ht(s,t){for(const[e,i]of Object.entries(s))if(i===t)return e;return null}function zt(s,t){return s.envMap?s.envMap===t.metal?"metal":s.envMap===t.gem?"gem":"metal":"none"}function Pt(s,t){const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(e),l=document.createElement("a");l.href=i,l.download=s,document.body.appendChild(l),l.click(),l.remove(),URL.revokeObjectURL(i)}function R(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}export{Tt as c};
