import{c as r,R as n,r as m,d,F as c,j as e}from"./index.41a6b4bd.js";import{S as s}from"./index.00fd95f0.js";import{S as p,V as L}from"./index.f8bba062.js";import{g}from"./actionCreators.f66ee6e4.js";import"./attach-properties-to-component.6acef87d.js";import"./index.294fd4f7.js";import"./index.dc184eb1.js";import"./request.6cb6d06a.js";const u=t=>{const{videosList:i,enterLoading:o}=t,{getVideoListDispatch:a}=t;return m.exports.useEffect(()=>{a()},[]),d(c,{children:[o?e(s,{animated:!0,className:"movie"}):e(p,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:i})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var F=r(f,h)(n.memo(u));export{F as default};
