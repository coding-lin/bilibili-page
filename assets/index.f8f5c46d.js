import{c as r,R as n,r as m,d,F as c,j as e}from"./index.cb4d089d.js";import{S as s}from"./index.19adab36.js";import{S as p,V as L}from"./index.93a876da.js";import{g}from"./actionCreators.35e5a0a9.js";import"./attach-properties-to-component.6acef87d.js";import"./index.692aa605.js";import"./index.cb588ecd.js";import"./request.5950b006.js";const u=t=>{const{videosList:i,enterLoading:o}=t,{getVideoListDispatch:a}=t;return m.exports.useEffect(()=>{a()},[]),d(c,{children:[o?e(s,{animated:!0,className:"movie"}):e(p,{}),o?e(s.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:i})]})},v=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),f=t=>({getVideoListDispatch(){t(g())}});var F=r(v,f)(n.memo(u));export{F as default};
