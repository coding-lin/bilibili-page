import{w as o,R as s,l as m,m as i,n as p}from"./index.99c4a17e.js";function d(e,a){const r=[];for(let t=e;t<=a;t++)r.push(t);return r}const n="adm-skeleton",l=e=>o(e,s.createElement("div",{className:m(n,{[`${n}-animated`]:e.animated})})),k=e=>o(e,s.createElement(l,{animated:e.animated,className:`${n}-title`})),u={lineCount:3},h=e=>{const a=i(u,e),r=d(1,a.lineCount),t=s.createElement("div",{className:`${n}-paragraph`},r.map(c=>s.createElement(l,{key:c,animated:a.animated,className:`${n}-paragraph-line`})));return o(a,t)};var g=p(l,{Title:k,Paragraph:h});export{g as S};
