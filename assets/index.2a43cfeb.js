import{c as r,R as m,r as n,d,F as p,j as e}from"./index.cb4d089d.js";import{S as s}from"./index.19adab36.js";import{S as c,V as L}from"./index.93a876da.js";import{g}from"./actionCreators.35e5a0a9.js";import"./attach-properties-to-component.6acef87d.js";import"./index.692aa605.js";import"./index.cb588ecd.js";import"./request.5950b006.js";const u=t=>{const{videosList:a,enterLoading:o}=t,{getVideoListDispatch:i}=t;return n.exports.useEffect(()=>{i()},[]),d(p,{children:[o?e(s,{animated:!0,className:"movie"}):e(c,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:a})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var C=r(f,h)(m.memo(u));export{C as default};
