import{ag as a,r as d,ah as c,ai as u,aj as _,ak as l,al as f}from"./index.a473b22b.js";import{c as g}from"./request.fc735ace.js";var s={},p=a&&a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});var V=s.staged=void 0;const E=p(d.exports);function n(e){return typeof e=="function"?E.default.createElement(D,{stage:e}):e}function D(e){const t=e.stage();return n(t)}function L(e){return function(o,r){const i=e(o,r);return n(i)}}V=s.staged=L;const A=e=>({type:c,data:e}),I=e=>({type:u,data:e}),m=e=>({type:_,id:e}),y=e=>({type:l,id:e}),S=e=>({type:f,data:e}),N=()=>e=>{g().then(t=>{e(A(t)),e(I(!1))})},G=e=>t=>{t(m(e))},T=e=>t=>{t(y(e))},W=e=>t=>{t(S(e))};export{W as a,G as b,T as d,N as g,V as s};
