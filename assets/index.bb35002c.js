import{c as r,R as n,r as m,d,F as c,j as e}from"./index.49bc75a5.js";import{S as i}from"./index.7e79e3df.js";import{S as p,V as L}from"./index.0127762e.js";import{g}from"./actionCreators.700b01d4.js";import"./attach-properties-to-component.6acef87d.js";import"./index.403316ef.js";import"./index.77a6de17.js";import"./request.6c9dfb78.js";const u=t=>{const{videosList:s,enterLoading:o}=t,{getVideoListDispatch:a}=t;return m.exports.useEffect(()=>{a()},[]),d(c,{children:[o?e(i,{animated:!0,className:"movie"}):e(p,{}),o?e(i.Paragraph,{lineCount:20,animated:!0}):e(L,{videoData:s})]})},f=t=>({enterLoading:t.home.enterLoading,videosList:t.home.videosList}),h=t=>({getVideoListDispatch(){t(g())}});var F=r(f,h)(n.memo(u));export{F as default};
