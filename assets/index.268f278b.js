import{c as r,R as m,r as n,d as p,F as d,j as e}from"./index.2aac3aef.js";import{S as s}from"./index.0b185e73.js";import{S as c,V as L}from"./index.974b361e.js";import{g}from"./actionCreators.0eaf9676.js";import"./attach-properties-to-component.6acef87d.js";import"./index.07cc1218.js";import"./index.58d3d49b.js";import"./index.9bec9b7f.js";import"./request.be9e33f4.js";const u=t=>{const{videosList:i,enterLoading:o}=t,{getVideoListDispatch:a}=t;return n.exports.useEffect(()=>{a()},[]),p(d,{children:[o?e(s,{animated:!0,className:"movie"}):e(c,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:i})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var F=r(f,h)(m.memo(u));export{F as default};
