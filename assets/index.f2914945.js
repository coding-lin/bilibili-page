import{c as r,R as m,r as n,d,F as p,j as e}from"./index.41a6b4bd.js";import{S as s}from"./index.00fd95f0.js";import{S as c,V as L}from"./index.f8bba062.js";import{g}from"./actionCreators.f66ee6e4.js";import"./attach-properties-to-component.6acef87d.js";import"./index.294fd4f7.js";import"./index.dc184eb1.js";import"./request.6cb6d06a.js";const u=t=>{const{videosList:a,enterLoading:o}=t,{getVideoListDispatch:i}=t;return n.exports.useEffect(()=>{i()},[]),d(p,{children:[o?e(s,{animated:!0,className:"movie"}):e(c,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:a})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var C=r(f,h)(m.memo(u));export{C as default};
