import{r as l,y as F,D as O,A as f,W as x,X as w,N as E,Y as M,z as S,R as v,j as s,Z as B,O as R,$ as P,Q as j,a0 as $,u as A,d as a,F as D,T as C,M as T,a1 as z}from"./index.5755cf91.js";import{u as b}from"./index.07a0dc15.js";import{T as c}from"./index.115ebb16.js";import"./index.07f956fc.js";import"./attach-properties-to-component.6acef87d.js";function _(n){return l.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n,{style:Object.assign({verticalAlign:"-0.125em"},n.style),className:["antd-mobile-icon",n.className].filter(Boolean).join(" ")}),l.exports.createElement("g",{id:"MoreOutline-MoreOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.exports.createElement("g",{id:"MoreOutline-\u7F16\u7EC4"},l.exports.createElement("rect",{id:"MoreOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),l.exports.createElement("path",{d:"M12,21 C13.6568542,21 15,22.3431458 15,24 C15,25.6568542 13.6568542,27 12,27 C10.3431458,27 9,25.6568542 9,24 C9,22.3431458 10.3431458,21 12,21 Z M24,21 C25.6568542,21 27,22.3431458 27,24 C27,25.6568542 25.6568542,27 24,27 C22.3431458,27 21,25.6568542 21,24 C21,22.3431458 22.3431458,21 24,21 Z M36,21 C37.6568542,21 39,22.3431458 39,24 C39,25.6568542 37.6568542,27 36,27 C34.3431458,27 33,25.6568542 33,24 C33,22.3431458 34.3431458,21 36,21 Z",id:"MoreOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}const Z={closeOnMaskClick:!1,destroyOnClose:!1,disableBodyScroll:!0,forceRender:!1,getContainer:()=>document.body,mask:!0,showCloseButton:!1,stopPropagation:["click"],visible:!1};function I(n){const[e,o]=l.exports.useState(n);return b(()=>{o(n)},[n]),e}const u="adm-popup",L=Object.assign(Object.assign({},Z),{position:"bottom"}),V=n=>{const e=F(L,n),{locale:o}=O(),r=f(`${u}-body`,e.bodyClassName,`${u}-body-position-${e.position}`),[d,p]=l.exports.useState(e.visible);b(()=>{e.visible&&p(!0)},[e.visible]);const h=l.exports.useRef(null);x(h,e.disableBodyScroll&&d?"strict":!1);const g=w(),{percent:k}=E({percent:e.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onRest:()=>{var i,t;g.current||(p(e.visible),e.visible?(i=e.afterShow)===null||i===void 0||i.call(e):(t=e.afterClose)===null||t===void 0||t.call(e))}}),y=I(d&&e.visible),N=M(e.stopPropagation,S(e,v.createElement("div",{className:u,onClick:e.onClick,style:{display:d?void 0:"none"}},e.mask&&s(B,{visible:y,forceRender:e.forceRender,destroyOnClose:e.destroyOnClose,onMaskClick:i=>{var t,m;(t=e.onMaskClick)===null||t===void 0||t.call(e,i),e.closeOnMaskClick&&((m=e.onClose)===null||m===void 0||m.call(e))},className:e.maskClassName,style:e.maskStyle,disableBodyScroll:!1,stopPropagation:e.stopPropagation}),v.createElement(R.div,{className:r,style:Object.assign(Object.assign({},e.bodyStyle),{transform:k.to(i=>e.position==="bottom"?`translate(0, ${i}%)`:e.position==="top"?`translate(0, -${i}%)`:e.position==="left"?`translate(-${i}%, 0)`:e.position==="right"?`translate(${i}%, 0)`:"none")}),ref:h},e.showCloseButton&&s("a",{className:f(`${u}-close-icon`,"adm-plain-anchor"),onClick:()=>{var i;(i=e.onClose)===null||i===void 0||i.call(e)},role:"button","aria-label":o.common.close,children:s(P,{})}),e.children))));return s(j,{active:d,forceRender:e.forceRender,destroyOnClose:e.destroyOnClose,children:$(e.getContainer,N)})};var W=V;const Y=()=>{const n=A(),[e,o]=l.exports.useState(!1);return a(D,{children:[s("div",{className:"back-icon",children:s("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>n(-1)})}),s("div",{className:"sousuo-icon",onClick:()=>C.show("\u529F\u80FD\u5F85\u5B8C\u5584"),children:s("i",{className:"iconfont icon-sousuo"})}),s(_,{className:"share",onClick:()=>{o(!0)}}),s("div",{className:"bg-img",children:s("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/30/64254aee57d84.jpg",alt:""})}),a("div",{className:"info",children:[s("div",{className:"avatar",children:s("img",{src:T,alt:""})}),a("div",{className:"detail",children:[a("div",{children:[s("span",{className:"data",children:"1"}),s("p",{children:"\u7C89\u4E1D"})]}),a("div",{children:[s("span",{children:"34"}),s("p",{children:"\u5173\u6CE8"})]}),a("div",{children:[s("span",{children:"10"}),s("p",{children:"\u83B7\u8D5E"})]})]}),s("div",{className:"edit",onClick:()=>C.show("\u6682\u4E0D\u652F\u6301\u7F16\u8F91"),children:s("span",{children:"\u7F16\u8F91\u8D44\u6599"})}),s("div",{className:"username",children:s("span",{children:"dafenqi616"})}),s("div",{className:"vip",children:s("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/30/64259d5d149e7.png",alt:""})}),s("div",{className:"schlool",children:s("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/30/64259ca543116.png",alt:""})})]}),a(c,{defaultActiveKey:"home",children:[s(c.Tab,{title:"\u4E3B\u9875",children:"\u4E3B\u9875"},"home"),s(c.Tab,{title:"\u52A8\u6001",children:"\u52A8\u6001"},"trends"),s(c.Tab,{title:"\u6295\u7A3F",children:"\u6295\u7A3F"},"contribute"),s(c.Tab,{title:"\u6536\u85CF",children:"\u6536\u85CF"},"collect")]}),a(W,{visible:e,onMaskClick:()=>{o(!1)},bodyStyle:{height:"30vh"},children:[a("div",{className:"link",children:[s("span",{children:"\u5206\u4EAB"}),s("div",{className:"icon-container",children:z.map(r=>a("div",{className:"icon",children:[s("img",{src:r.icon,alt:""}),s("p",{children:r.name})]},r.id))})]}),s("div",{className:"bottom",onClick:()=>{o(!1)},children:s("span",{children:"\u53D6\u6D88"})})]})]})};export{Y as default};
