import{s as a,p as t,c as E,R as L,r as s,u as w,d as r,j as e,P as C,l as G,O as T,m as d,T as z,F as R}from"./index.9884a26e.js";import{I as k,S as j,D as B}from"./index.221c93e6.js";import{S as P}from"./index.d0ebee37.js";import{G as A}from"./index.77dda2fe.js";import{a as M,b as I,d as N}from"./actionCreators.9b6c4f94.js";import"./index.6907d045.js";import"./attach-properties-to-component.6acef87d.js";import"./index.73846c3c.js";import"./index.f8cfb250.js";import"./bilibili.03841b80.js";import"./request.8cf404ae.js";const H=a.div`
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
`,O=()=>e(q,{children:r("div",{className:"info",children:[e("img",{src:T,alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),J=o=>{const[n,u]=s.exports.useState(!0),[c,l]=s.exports.useState([]),[p,h]=s.exports.useState(0),m=w(),{goodsList:g,enterLoading:f}=o,{getGoodListDispatch:$,addDispatch:D,delDispatch:F}=o;s.exports.useEffect(()=>{$()},[]);async function b(){await d(1e3),z.show("\u5237\u65B0\u6210\u529F")}async function x(){return p>=5?[]:(await d(1e3),h(i=>i+1),g)}async function v(){const i=await x();l(S=>[...S,...i]),u(i.length>0)}const y=({hasMore:i})=>e(R,{children:i?r("div",{style:{marginBottom:"2.5rem"},children:[e("span",{style:{fontSize:"0.7rem"},children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),e(B,{})]}):e("div",{style:{marginBottom:"2.5rem"},children:e("span",{style:{fontSize:"0.7rem"},children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return r(H,{children:[r(W,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>m(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),O(),f?e(P.Paragraph,{lineCount:30,animated:!0}):r(C,{onRefresh:b,renderText:i=>e("div",{children:G[i]}),children:[e(A,{goodData:c,addDispatch:D,delDispatch:F}),e(k,{loadMore:v,hasMore:n,children:e(y,{hasMore:n})})]}),e(j,{top:2e3})]})},K=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),Q=o=>({getGoodListDispatch(){o(M())},addDispatch(n){o(I(n))},delDispatch(n){o(N(n))}});var rt=E(K,Q)(L.memo(J));export{rt as default};
