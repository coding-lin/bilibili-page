import{c as r,R as n,r as m,d as c,F as d,j as t}from"./index.8f621ef8.js";import{S as s}from"./index.c2022831.js";import{S as p,V as L,g}from"./index.e682e5ff.js";import"./bilibili.250404e7.js";import"./index.f97456e5.js";const u=e=>{const{videosList:a,enterLoading:o}=e,{getVideoListDispatch:i}=e;return m.exports.useEffect(()=>{i()},[]),c(d,{children:[o?t(s,{animated:!0,className:"movie"}):t(p,{}),o?t(s.Paragraph,{lineCount:20,animated:!0}):t(L,{videosList:a})]})},h=e=>({enterLoading:e.home.enterLoading,videosList:e.home.videosList}),f=e=>({getVideoListDispatch(){e(g())}});var j=r(h,f)(n.memo(u));export{j as default};
