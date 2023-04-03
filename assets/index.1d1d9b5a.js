import{s as a,p as t,c as S,R as E,r as s,u as L,d as n,j as o,P as w,l as C,O as T,m as u,T as z,F as G}from"./index.e8af86ff.js";import{I as R,S as k,D as j}from"./index.bc1d7491.js";import{S as B}from"./index.6fc44990.js";import{G as P}from"./index.39517cf6.js";import{a as A,b as M}from"./actionCreators.4798ded0.js";import"./index.be294718.js";import"./attach-properties-to-component.6acef87d.js";import"./index.4cd04c16.js";import"./index.3c7f2aed.js";import"./bilibili.03841b80.js";import"./request.dd1a347b.js";const I=a.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,N=a.div`
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
      width: ${t(270)};
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
`,W=()=>o(H,{children:n("div",{className:"info",children:[o("img",{src:T,alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),q=e=>{const[r,c]=s.exports.useState(!0),[d,l]=s.exports.useState([]),[p,h]=s.exports.useState(0),m=L(),{goodsList:g,enterLoading:f}=e,{getGoodListDispatch:$,addDispatch:D}=e;s.exports.useEffect(()=>{$()},[]);async function F(){await u(1e3),z.show("\u5237\u65B0\u6210\u529F")}async function b(){return p>=5?[]:(await u(1e3),h(i=>i+1),g)}async function x(){const i=await b();l(y=>[...y,...i]),c(i.length>0)}const v=({hasMore:i})=>o(G,{children:i?n("div",{style:{marginBottom:"2.5rem"},children:[o("span",{style:{fontSize:"0.7rem"},children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),o(j,{})]}):o("div",{style:{marginBottom:"2.5rem"},children:o("span",{style:{fontSize:"0.7rem"},children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return n(I,{children:[n(N,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>m(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),W(),f?o(B.Paragraph,{lineCount:30,animated:!0}):n(w,{onRefresh:F,renderText:i=>o("div",{children:C[i]}),children:[o(P,{goodData:d,addDispatch:D}),o(R,{loadMore:x,hasMore:r,children:o(v,{hasMore:r})})]}),o(k,{top:2e3})]})},O=e=>({enterLoading:e.vip.enterLoading,goodsList:e.vip.goodsList}),J=e=>({getGoodListDispatch(){e(A())},addDispatch(r){e(M(r))}});var it=S(O,J)(E.memo(q));export{it as default};
