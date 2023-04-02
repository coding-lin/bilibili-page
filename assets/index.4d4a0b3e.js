import{s,p as t,c as S,R as y,r,u as E,d as n,j as e,P as L,l as w,O as C,m as u,T,F as z}from"./index.5bf6a9d8.js";import{I as R,S as k,D as G}from"./index.9f31de06.js";import{S as j}from"./index.f317a476.js";import{G as B}from"./index.9f193e03.js";import{a as P}from"./actionCreators.7b17f092.js";import"./index.2a91861f.js";import"./attach-properties-to-component.6acef87d.js";import"./index.521e6cef.js";import"./index.c87f67ee.js";import"./bilibili.03841b80.js";import"./request.5d8a1104.js";const A=s.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,M=s.div`
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
`,I=s.div`
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
      width: ${t(152)};
      height: ${t(165)};
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
`,N=()=>e(I,{children:n("div",{className:"info",children:[e("img",{src:C,alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),H=i=>{const[a,c]=r.exports.useState(!0),[d,h]=r.exports.useState([]),[l,p]=r.exports.useState(0),m=E(),{goodsList:g,enterLoading:f}=i,{getGoodListDispatch:$}=i;r.exports.useEffect(()=>{$()},[]);async function F(){await u(1e3),T.show("\u5237\u65B0\u6210\u529F")}async function x(){return l>=5?[]:(await u(1e3),p(o=>o+1),g)}async function b(){const o=await x();h(D=>[...D,...o]),c(o.length>0)}const v=({hasMore:o})=>e(z,{children:o?n("div",{style:{marginBottom:"2.5rem"},children:[e("span",{style:{fontSize:"0.7rem"},children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),e(G,{})]}):e("div",{style:{marginBottom:"2.5rem"},children:e("span",{style:{fontSize:"0.7rem"},children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return n(A,{children:[n(M,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>m(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),N(),f?e(j.Paragraph,{lineCount:30,animated:!0}):n(L,{onRefresh:F,renderText:o=>e("div",{children:w[o]}),children:[e(B,{goodData:d}),e(R,{loadMore:b,hasMore:a,children:e(v,{hasMore:a})})]}),e(k,{})]})},W=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),q=i=>({getGoodListDispatch(){i(P())}});var et=S(W,q)(y.memo(H));export{et as default};
