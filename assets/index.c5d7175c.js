import{c as r,R as n,r as m,d,F as c,j as e}from"./index.a473b22b.js";import{S as i}from"./index.c5d2c103.js";import{S as p,V as L}from"./index.92267dec.js";import{g}from"./actionCreators.f7a7df81.js";import"./attach-properties-to-component.6acef87d.js";import"./index.09003ebb.js";import"./index.3675ff45.js";import"./request.fc735ace.js";const u=t=>{const{videosList:s,enterLoading:o}=t,{getVideoListDispatch:a}=t;return m.exports.useEffect(()=>{a()},[]),d(c,{children:[o?e(i,{animated:!0,className:"movie"}):e(p,{}),o?e(i.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:s})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var F=r(f,h)(n.memo(u));export{F as default};
