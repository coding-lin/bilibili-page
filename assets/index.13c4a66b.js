import{c as v,R as D,r as s,d as c,F as m,j as o,m as V}from"./index.d6c1f6e9.js";import{S as d}from"./index.16b90a01.js";import{S as M,V as R}from"./index.935cd2ff.js";import{N as T,S as j}from"./index.eda5ca45.js";import{g as w,b as N}from"./actionCreators.db0b2b4a.js";import"./attach-properties-to-component.6acef87d.js";import"./index.5323417d.js";import"./index.1deaab32.js";import"./index.c3cca3ef.js";import"./index.d52acdb4.js";import"./index.bd5de8c1.js";import"./request.0ea96a1b.js";const P=t=>{const[a,p]=s.exports.useState(!0),[u,l]=s.exports.useState([]),[r,f]=s.exports.useState(0),{videosList:i,enterLoading:n}=t,{getVideoListDispatch:h,addDispatch:g}=t;s.exports.useEffect(()=>{h()},[]);async function S(){return r>=5?[]:(await V(1e3),f(e=>e+1),i.map(e=>r>=1?{...e,id:e.id+=i.length}:{...e}))}async function L(){const e=await S();l(x=>[...x,...e]),p(e.length>0)}return c(m,{children:[n?o(d,{animated:!0,className:"movie"}):o(M,{}),n?o(d.Paragraph,{lineCount:20,animated:!0}):c(m,{children:[o(R,{videoData:u,addDispatch:g}),o(T,{loadMore:L,hasMore:a})]}),o(j,{top:2e3})]})},k=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),y=t=>({getVideoListDispatch(){t(w())},addDispatch(a){t(N(a))}});var J=v(k,y)(D.memo(P));export{J as default};
