import{c as D,R as x,r as s,d as n,F as a,j as e,m as F}from"./index.2aac3aef.js";import{I as E,S as V,D as y}from"./index.739c172a.js";import{S as m}from"./index.0b185e73.js";import{S as C,V as M}from"./index.974b361e.js";import{g as I,a as R}from"./actionCreators.0eaf9676.js";import"./index.be7ad91b.js";import"./attach-properties-to-component.6acef87d.js";import"./index.07cc1218.js";import"./index.58d3d49b.js";import"./index.9bec9b7f.js";import"./request.be9e33f4.js";const T=o=>{const[r,u]=s.exports.useState(!0),[l,p]=s.exports.useState([]),[i,h]=s.exports.useState(0),{videosList:c,enterLoading:d}=o,{getVideoListDispatch:f,addDispatch:S}=o;s.exports.useEffect(()=>{f()},[]);async function g(){return i>=5?[]:(await F(1e3),h(t=>t+1),c.map(t=>i>=1?{...t,id:t.id=t.id+c.length}:{...t}))}async function L(){const t=await g();p(v=>[...v,...t]),u(t.length>0)}return n(a,{children:[d?e(m,{animated:!0,className:"movie"}):e(C,{}),d?e(m.Paragraph,{lineCount:20,animated:!0}):n(a,{children:[e(M,{videoData:l,addDispatch:S}),e(E,{loadMore:L,hasMore:r,className:"recommend",children:e(({hasMore:t})=>e(a,{children:t?n("div",{style:{marginBottom:"2.5rem"},children:[e("span",{style:{fontSize:"0.7rem"},children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),e(y,{})]}):e("div",{style:{marginBottom:"2.5rem"},children:e("span",{style:{fontSize:"0.7rem"},children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})}),{hasMore:r})})]}),e(V,{})]})},j=o=>({enterLoading:o.home.enterLoading,videosList:o.home.videosList}),B=o=>({getVideoListDispatch(){o(I())},addDispatch(r){o(R(r))}});var J=D(j,B)(x.memo(T));export{J as default};
