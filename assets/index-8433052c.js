import{c as V,R as v,r as s,d as c,F as m,j as o,h as x}from"./index-fed2dc62.js";import{S as d}from"./index-a694b7af.js";import{S as M,V as R}from"./index-bf9c4ee4.js";import{N as T,S as j}from"./index-129154f0.js";import{g as w,b as N}from"./actionCreators-dbef3c65.js";import"./attach-properties-to-component-a2c66ef2.js";import"./popup-e4e026e0.js";import"./MoreOutline-a3fc7f04.js";import"./index-017508ec.js";import"./dot-loading-b8487f5c.js";import"./index-54b0b29a.js";import"./index-2394357d.js";import"./request-22dbc0c8.js";const P=t=>{const[a,p]=s.useState(!0),[u,l]=s.useState([]),[i,f]=s.useState(0),{videosList:r,enterLoading:n}=t,{getVideoListDispatch:h,addDispatch:g}=t;s.useEffect(()=>{h()},[]);async function S(){return i>=5?[]:(await x(1e3),f(e=>e+1),r.map(e=>i>=1?{...e,id:e.id+=r.length}:{...e}))}async function L(){const e=await S();l(D=>[...D,...e]),p(e.length>0)}return c(m,{children:[n?o(d,{animated:!0,className:"movie"}):o(M,{}),n?o(d.Paragraph,{lineCount:20,animated:!0}):c(m,{children:[o(R,{videoData:u,addDispatch:g}),o(T,{loadMore:L,hasMore:a})]}),o(j,{top:2e3})]})},k=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),y=t=>({getVideoListDispatch(){t(w())},addDispatch(a){t(N(a))}}),K=V(k,y)(v.memo(P));export{K as default};
