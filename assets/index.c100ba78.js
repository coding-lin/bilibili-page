import{r as l,v as pe,w as ee,A as me,y as S,V as ve,W as ye,X as P,Y as he,x as q,R as v,j as d,Z as be,$ as L,a0 as ge,a1 as te,a2 as Ce,a3 as ke,d as Z,a4 as xe}from"./index.c7438542.js";import{i as Se,a as $e,u as we}from"./index.7dbd6f89.js";import{u as $,c as Me}from"./index.65bf191e.js";import{a as Le}from"./attach-properties-to-component.6acef87d.js";function X(e){Se&&($e(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=l.exports.useRef(e);t.current=l.exports.useMemo(function(){return e},[e]);var r=l.exports.useRef();return r.current||(r.current=function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];return t.current.apply(this,s)}),r.current}var Oe=function(){var e=pe(l.exports.useState({}),2),t=e[1];return l.exports.useCallback(function(){return t({})},[])},Re=Oe;function Ge(e){return l.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),l.exports.createElement("g",{id:"MoreOutline-MoreOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.exports.createElement("g",{id:"MoreOutline-\u7F16\u7EC4"},l.exports.createElement("rect",{id:"MoreOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),l.exports.createElement("path",{d:"M12,21 C13.6568542,21 15,22.3431458 15,24 C15,25.6568542 13.6568542,27 12,27 C10.3431458,27 9,25.6568542 9,24 C9,22.3431458 10.3431458,21 12,21 Z M24,21 C25.6568542,21 27,22.3431458 27,24 C27,25.6568542 25.6568542,27 24,27 C22.3431458,27 21,25.6568542 21,24 C21,22.3431458 22.3431458,21 24,21 Z M36,21 C37.6568542,21 39,22.3431458 39,24 C39,25.6568542 37.6568542,27 36,27 C34.3431458,27 33,25.6568542 33,24 C33,22.3431458 34.3431458,21 36,21 Z",id:"MoreOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}const Ee={closeOnMaskClick:!1,destroyOnClose:!1,disableBodyScroll:!0,forceRender:!1,getContainer:()=>document.body,mask:!0,showCloseButton:!1,stopPropagation:["click"],visible:!1};function Pe(e){const[t,r]=l.exports.useState(e);return $(()=>{r(e)},[e]),t}const E="adm-popup",Ne=Object.assign(Object.assign({},Ee),{position:"bottom"}),Fe=e=>{const t=ee(Ne,e),{locale:r}=me(),s=S(`${E}-body`,t.bodyClassName,`${E}-body-position-${t.position}`),[a,c]=l.exports.useState(t.visible);$(()=>{t.visible&&c(!0)},[t.visible]);const g=l.exports.useRef(null);ve(g,t.disableBodyScroll&&a?"strict":!1);const y=ye(),{percent:b}=P({percent:t.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onRest:()=>{var u,m;y.current||(c(t.visible),t.visible?(u=t.afterShow)===null||u===void 0||u.call(t):(m=t.afterClose)===null||m===void 0||m.call(t))}}),C=Pe(a&&t.visible),k=he(t.stopPropagation,q(t,v.createElement("div",{className:E,onClick:t.onClick,style:{display:a?void 0:"none"}},t.mask&&d(be,{visible:C,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,onMaskClick:u=>{var m,w;(m=t.onMaskClick)===null||m===void 0||m.call(t,u),t.closeOnMaskClick&&((w=t.onClose)===null||w===void 0||w.call(t))},className:t.maskClassName,style:t.maskStyle,disableBodyScroll:!1,stopPropagation:t.stopPropagation}),v.createElement(L.div,{className:s,style:Object.assign(Object.assign({},t.bodyStyle),{transform:b.to(u=>t.position==="bottom"?`translate(0, ${u}%)`:t.position==="top"?`translate(0, -${u}%)`:t.position==="left"?`translate(-${u}%, 0)`:t.position==="right"?`translate(${u}%, 0)`:"none")}),ref:g},t.showCloseButton&&d("a",{className:S(`${E}-close-icon`,"adm-plain-anchor"),onClick:()=>{var u;(u=t.onClose)===null||u===void 0||u.call(t)},role:"button","aria-label":r.common.close,children:d(ge,{})}),t.children))));return d(te,{active:a,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose,children:Ce(t.getContainer,k)})};var We=Fe;const Ae=Me($);function Te(e){const{value:t,defaultValue:r,onChange:s}=e,a=Re(),c=l.exports.useRef(t!==void 0?t:r);t!==void 0&&(c.current=t);const g=X((y,b=!1)=>{const C=typeof y=="function"?y(c.current):y;if(!(!b&&C===c.current))return c.current=C,a(),s==null?void 0:s(C)});return[c.current,g]}function je(e,t){const r=X(e);$(()=>{const s=t.current;if(!!s)if(window.ResizeObserver){let a;const c=new ResizeObserver(()=>{a=window.requestAnimationFrame(()=>r(s))});return c.observe(s),()=>{window.cancelAnimationFrame(a),c.disconnect()}}else r(s)},[t])}function _e(e,t,r){const s=X(e);l.exports.useEffect(()=>{const a=new MutationObserver(()=>{s()});if(!!t.current)return a.observe(t.current,r),()=>{a.disconnect()}},[t])}var re={exports:{}},n={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=Symbol.for("react.element"),G=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),T=Symbol.for("react.context"),ze=Symbol.for("react.server_context"),j=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ne;ne=Symbol.for("react.module.reference");function p(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Y:switch(e=e.type,e){case N:case W:case F:case _:case z:return e;default:switch(e=e&&e.$$typeof,e){case ze:case T:case j:case I:case B:case A:return e;default:return t}}case G:return t}}}n.ContextConsumer=T;n.ContextProvider=A;n.Element=Y;n.ForwardRef=j;n.Fragment=N;n.Lazy=I;n.Memo=B;n.Portal=G;n.Profiler=W;n.StrictMode=F;n.Suspense=_;n.SuspenseList=z;n.isAsyncMode=function(){return!1};n.isConcurrentMode=function(){return!1};n.isContextConsumer=function(e){return p(e)===T};n.isContextProvider=function(e){return p(e)===A};n.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Y};n.isForwardRef=function(e){return p(e)===j};n.isFragment=function(e){return p(e)===N};n.isLazy=function(e){return p(e)===I};n.isMemo=function(e){return p(e)===B};n.isPortal=function(e){return p(e)===G};n.isProfiler=function(e){return p(e)===W};n.isStrictMode=function(e){return p(e)===F};n.isSuspense=function(e){return p(e)===_};n.isSuspenseList=function(e){return p(e)===z};n.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===N||e===W||e===F||e===_||e===z||e===Be||typeof e=="object"&&e!==null&&(e.$$typeof===I||e.$$typeof===B||e.$$typeof===A||e.$$typeof===T||e.$$typeof===j||e.$$typeof===ne||e.getModuleId!==void 0)};n.typeOf=p;re.exports=n;function Ie(e,t){let r=0;function s(a){v.Children.forEach(a,c=>{re.exports.isFragment(c)?s(c.props.children):(t(c,r),r+=1)})}s(e)}const f="adm-tabs",Ve=()=>null,De={activeLineMode:"auto",stretch:!0},Ke=e=>{var t;const r=ee(De,e),s=l.exports.useRef(null),a=l.exports.useRef(null),c={};let g=null;const y=[];Ie(r.children,(o,i)=>{if(!v.isValidElement(o))return;const h=o.key;if(typeof h!="string")return;i===0&&(g=h);const x=y.push(o);c[h]=x-1});const[b,C]=Te({value:r.activeKey,defaultValue:(t=r.defaultActiveKey)!==null&&t!==void 0?t:g,onChange:o=>{var i;o!==null&&((i=r.onChange)===null||i===void 0||i.call(r,o))}}),[{x:k,width:u},m]=P(()=>({x:0,width:0,config:{tension:300,clamp:!0}})),[{scrollLeft:w},oe]=P(()=>({scrollLeft:0,config:{tension:300,clamp:!0}})),[{leftMaskOpacity:se,rightMaskOpacity:ie},ae]=P(()=>({leftMaskOpacity:0,rightMaskOpacity:0,config:{clamp:!0}}));function O(o=!1){const i=s.current;if(!i)return;const h=c[b];if(h===void 0){m.start({x:0,width:0,immediate:!0});return}const x=a.current;if(!x)return;const M=i.children.item(h+1),J=M.children.item(0),V=J.offsetLeft,D=J.offsetWidth,ce=M.offsetLeft,le=M.offsetWidth,K=i.offsetWidth,Q=i.scrollWidth,ue=i.scrollLeft,fe=x.offsetWidth;let R=0,U=0;if(r.activeLineMode==="auto"?(R=V,U=D):r.activeLineMode==="full"?(R=ce,U=le):R=V+(D-fe)/2,m.start({x:R,width:U,immediate:o}),Q-K<=0)return;const de=ke(V-(K-D)/2,0,Q-K);oe.start({scrollLeft:de,from:{scrollLeft:ue},immediate:o})}$(()=>{O(!k.isAnimating)},[]),Ae(()=>{O()},[b]),je(()=>{O(!k.isAnimating)},s),_e(()=>{O(!k.isAnimating)},s,{subtree:!0,childList:!0,characterData:!0});const{run:H}=we((o=!1)=>{const i=s.current;if(!i)return;const h=i.scrollLeft,x=h>0,M=h+i.offsetWidth<i.scrollWidth;ae.start({leftMaskOpacity:x?1:0,rightMaskOpacity:M?1:0,immediate:o})},{wait:100,trailing:!0,leading:!0});return $(()=>{H(!0)},[]),q(r,v.createElement("div",{className:f},v.createElement("div",{className:`${f}-header`},v.createElement(L.div,{className:S(`${f}-header-mask`,`${f}-header-mask-left`),style:{opacity:se}}),v.createElement(L.div,{className:S(`${f}-header-mask`,`${f}-header-mask-right`),style:{opacity:ie}}),v.createElement(L.div,{className:`${f}-tab-list`,ref:s,scrollLeft:w,onScroll:H},v.createElement(L.div,{ref:a,className:`${f}-tab-line`,style:{width:r.activeLineMode==="fixed"?"var(--fixed-active-line-width, 30px)":u,x:k}}),y.map(o=>q(o.props,d("div",{className:S(`${f}-tab-wrapper`,{[`${f}-tab-wrapper-stretch`]:r.stretch}),children:d("div",{onClick:()=>{const{key:i}=o;o.props.disabled||i!=null&&C(i.toString())},className:S(`${f}-tab`,{[`${f}-tab-active`]:o.key===b,[`${f}-tab-disabled`]:o.props.disabled}),children:o.props.title})},o.key))))),y.map(o=>{if(o.props.children===void 0)return null;const i=o.key===b;return d(te,{active:i,forceRender:o.props.forceRender,destroyOnClose:o.props.destroyOnClose,children:d("div",{className:`${f}-content`,style:{display:i?"block":"none"},children:o.props.children})},o.key)})))};var He=Le(Ke,{Tab:Ve});const Je=({visible:e,setVisible:t})=>Z(We,{visible:e,onMaskClick:()=>{t(!1)},bodyStyle:{height:"30vh"},children:[Z("div",{className:"link",children:[d("span",{children:"\u5206\u4EAB"}),d("div",{className:"icon-container",children:xe.map(r=>Z("div",{className:"icon",children:[d("img",{src:r.icon,alt:""}),d("p",{children:r.name})]},r.id))})]}),d("div",{className:"bottom",onClick:()=>{t(!1)},children:d("span",{children:"\u53D6\u6D88"})})]});export{Ge as M,We as P,Je as S,He as T};
