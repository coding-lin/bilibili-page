import{C as a,i as r,k as o,j as t}from"./index.3e008df0.js";import{a as n,c as i}from"./bilibili.63d36b3a.js";import{p}from"./index.d890454f.js";import{W as c,G}from"./index.d029c0ec.js";const m=s=>({type:a,data:s}),L=s=>({type:r,data:s}),d=s=>({type:o,data:s}),y=()=>s=>{n().then(e=>{s(m(e))})},A=()=>s=>{i().then(e=>{s(L(e)),s(d(!1))})};function g({goodsList:s}){return t(c,{children:t("div",{className:"container",children:s&&s.map(e=>t(G,{good:e},e.id))})})}g.propTypes={goodsList:p.array.isRequired};export{g as G,A as a,y as g};