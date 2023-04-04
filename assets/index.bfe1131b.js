import{s as a,p as t,c as E,R as L,r as s,u as w,d as r,j as o,P as C,l as G,O as T,m as d,T as z,F as R}from"./index.41a6b4bd.js";import{D as k}from"./index.4e23c3f8.js";import{I as j,S as B}from"./index.594360bf.js";import{S as P}from"./index.00fd95f0.js";import{G as A}from"./index.facd41df.js";import{a as M,b as I,d as N}from"./actionCreators.e21030e5.js";import"./index.2ac231a0.js";import"./index.5c466619.js";import"./attach-properties-to-component.6acef87d.js";import"./index.dc184eb1.js";import"./index.7f5aa5d9.js";import"./bilibili.03841b80.js";import"./request.6cb6d06a.js";const H=a.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,W=a.div`
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
`,q=a.div`
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
`,O=()=>o(q,{children:r("div",{className:"info",children:[o("img",{src:T,alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),J=e=>{const[n,u]=s.exports.useState(!0),[c,l]=s.exports.useState([]),[p,h]=s.exports.useState(0),m=w(),{goodsList:g,enterLoading:f}=e,{getGoodListDispatch:$,addDispatch:D,delDispatch:F}=e;s.exports.useEffect(()=>{$()},[]);async function b(){await d(1e3),z.show("\u5237\u65B0\u6210\u529F")}async function x(){return p>=5?[]:(await d(1e3),h(i=>i+1),g)}async function v(){const i=await x();l(S=>[...S,...i]),u(i.length>0)}const y=({hasMore:i})=>o(R,{children:i?r("div",{style:{marginBottom:"2.5rem"},children:[o("span",{style:{fontSize:"0.7rem"},children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),o(k,{})]}):o("div",{style:{marginBottom:"2.5rem"},children:o("span",{style:{fontSize:"0.7rem"},children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return r(H,{children:[r(W,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>m(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),O(),f?o(P.Paragraph,{lineCount:30,animated:!0}):r(C,{onRefresh:b,renderText:i=>o("div",{children:G[i]}),children:[o(A,{goodData:c,addDispatch:D,delDispatch:F}),o(j,{loadMore:v,hasMore:n,children:o(y,{hasMore:n})})]}),o(B,{top:2e3})]})},K=e=>({enterLoading:e.vip.enterLoading,goodsList:e.vip.goodsList}),Q=e=>({getGoodListDispatch(){e(M())},addDispatch(n){e(I(n))},delDispatch(n){e(N(n))}});var at=E(K,Q)(L.memo(J));export{at as default};
