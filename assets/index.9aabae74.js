import{c as r,R as n,r as m,d as c,F as d,j as e}from"./index.8f621ef8.js";import{S as s}from"./index.c2022831.js";import{S as p,V as L,g}from"./index.e682e5ff.js";import"./bilibili.250404e7.js";import"./index.f97456e5.js";const u=t=>{const{videosList:a,enterLoading:o}=t,{getVideoListDispatch:i}=t;return m.exports.useEffect(()=>{i()},[]),c(d,{children:[o?e(s,{animated:!0,className:"movie"}):e(p,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videosList:a})]})},h=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),f=t=>({getVideoListDispatch(){t(g())}});var j=r(h,f)(n.memo(u));export{j as default};
