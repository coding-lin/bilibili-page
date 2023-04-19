import{s as a,p as t,c as S,R as y,r,u as F,d as n,j as o,P as G,l as T,O as C,m as p,T as R}from"./index.6104a6e4.js";import{S as k}from"./index.efff46f9.js";import{G as j}from"./index.87d181be.js";import{N as z,S as E}from"./index.3966dd2d.js";import{a as N,b as P,d as A}from"./index.fb9ea054.js";import"./attach-properties-to-component.6acef87d.js";import"./index.7f1d5081.js";import"./index.4f5e7f66.js";import"./index.0286947d.js";import"./index.8e0e7866.js";import"./request.8a845f46.js";import"./bilibili.03841b80.js";const M=a.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,B=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${t(60)};
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: ${t(20)};
    top: ${t(20)};
    left: ${t(18)};
  }
  h2 {
    font-size: ${t(18)};
    font-weight: 600;
    line-height: ${t(60)};
  }
`,H=a.div`
  width: 100%;
  height: ${t(264)};
  margin-top: ${t(60)};
  margin-bottom: ${t(26)};
  border-bottom: ${t(1)} solid rgba(100, 100, 100, 0.10);
  .info {
    position: relative;
    width: 100%;
    height: ${t(276)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${t(250)};
      margin: 0 auto;
    }
    p {
      font-size: ${t(14)};
      left: -50%;
      right: -50%;
      bottom: ${t(36)};
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: ${t(110)};
      height: ${t(26)};
      line-height: ${t(26)};
      margin-top: ${t(-55)};
      margin-left: ${t(-55)};
      border-radius: ${t(14)};
      font-size: ${t(14)};
      background-color: rgba(227, 229, 231);
    }
  }
`,W=()=>o(H,{children:n("div",{className:"info",children:[o("img",{src:C,alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),q=i=>{const[s,u]=r.exports.useState(!0),[l,h]=r.exports.useState([]),[d,m]=r.exports.useState(0),g=F(),{goodsList:c,enterLoading:f}=i,{getGoodListDispatch:$,addDispatch:b,delDispatch:x}=i;r.exports.useEffect(()=>{$()},[]);async function D(){await p(1e3),R.show("\u5237\u65B0\u6210\u529F")}async function v(){return d>=5?[]:(await p(1e3),m(e=>e+1),c.map(e=>d>=1?{...e,id:e.id+=c.length}:{...e}))}async function w(){const e=await v();h(L=>[...L,...e]),u(e.length>0)}return n(M,{children:[n(B,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>g(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),W(),f?o(k.Paragraph,{lineCount:20,animated:!0}):n(G,{onRefresh:D,renderText:e=>o("div",{children:T[e]}),children:[o(j,{goodData:l,addDispatch:b,delDispatch:x}),o(z,{loadMore:w,hasMore:s})]}),o(E,{top:3e3})]})},I=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),O=i=>({getGoodListDispatch(){i(N())},addDispatch(s){i(P(s))},delDispatch(s){i(A(s))}});var it=S(I,O)(y.memo(q));export{it as default};
