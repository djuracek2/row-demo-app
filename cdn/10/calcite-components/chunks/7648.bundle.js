/*! For license information please see 7648.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7648],{3849:(t,e,n)=>{function i(){const t=navigator.userAgentData;return t?.brands?t.brands.map((({brand:t,version:e})=>`${t}/${e}`)).join(" "):navigator.userAgent}n.d(e,{g:()=>i})},7648:(t,e,n)=>{n.r(e),n.d(e,{calcite_link:()=>c});var i=n(9113),o=n(7146),a=n(2627),s=n(8545),l=n(8220);const c=class{constructor(t){(0,i.r)(this,t),this.childElClickHandler=t=>{t.isTrusted||t.stopPropagation()},this.storeTagRef=t=>{this.childEl=t},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}connectedCallback(){(0,a.c)(this)}componentWillLoad(){(0,s.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,a.u)(this)}disconnectedCallback(){(0,a.d)(this)}render(){const{download:t,el:e}=this,n=(0,o.g)(e),s=this.href?"a":"span",c=(0,i.h)("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),r=(0,i.h)("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"}),d=s,h="span"===s?"link":null,u="span"===s?0:null;return(0,i.h)(i.H,{role:"presentation"},(0,i.h)(a.I,{disabled:this.disabled},(0,i.h)(d,{class:{[l.C.rtl]:"rtl"===n},download:"a"!==d||""!==t&&!t?null:t,href:"a"===d&&this.href,onClick:this.childElClickHandler,rel:"a"===d&&this.rel,role:h,tabIndex:u,target:"a"===d&&this.target,ref:this.storeTagRef},this.iconStart?c:null,(0,i.h)("slot",null),this.iconEnd?r:null)))}clickHandler(t){this.disabled||t.isTrusted||this.childEl.click()}async setFocus(){await(0,s.c)(this),(0,o.d)(this.childEl)}get el(){return(0,i.g)(this)}};c.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"},2627:(t,e,n)=>{n.d(e,{I:()=>y,c:()=>g,d:()=>m,u:()=>u});var i=n(3849),o=n(9113);const a=/firefox/i.test((0,i.g)()),s=a?new WeakMap:null;function l(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function c(t){const e=t.target;if(a&&!s.get(e))return;const{disabled:n}=e;n&&t.preventDefault()}const r=["mousedown","mouseup","click"];function d(t){const e=t.target;a&&!s.get(e)||e.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}const h={capture:!0};function u(t){if(t.disabled)return t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void p(t);b(t),t.el.removeAttribute("aria-disabled")}function p(t){if(t.el.click=l,a){const e=function(t){return t.el.parentElement||t.el}(t),n=s.get(t.el);return n!==e&&(v(n),s.set(t.el,e)),void f(s.get(t.el))}f(t.el)}function f(t){t&&(t.addEventListener("pointerdown",c,h),r.forEach((e=>t.addEventListener(e,d,h))))}function b(t){if(delete t.el.click,a)return v(s.get(t.el)),void s.delete(t.el);v(t.el)}function v(t){t&&(t.removeEventListener("pointerdown",c,h),r.forEach((e=>t.removeEventListener(e,d,h))))}function g(t){t.disabled&&a&&p(t)}function m(t){a&&b(t)}const k={container:"interaction-container"};function y({disabled:t},e){return(0,o.h)("div",{class:k.container,inert:t},...e)}},8545:(t,e,n)=>{n.d(e,{a:()=>l,b:()=>c,c:()=>r,s:()=>s});var i=n(9113);const o=new WeakMap,a=new WeakMap;function s(t){a.set(t,new Promise((e=>o.set(t,e))))}function l(t){o.get(t)()}function c(t){return a.get(t)}async function r(t){return await c(t),(0,i.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}}}]);