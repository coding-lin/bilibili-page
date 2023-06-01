import{s as a,p as t,c as S,R as y,r,u as F,d as s,j as o,P as T,l as k,V as C,m as u,T as R}from"./index.c9f20990.js";import{S as z}from"./index.20f027b0.js";import{G as j}from"./index.568afdd3.js";import{N as E,S as N}from"./index.ea568362.js";import{a as P,b as A,d as M}from"./actionCreators.f81fc803.js";import"./attach-properties-to-component.6acef87d.js";import"./index.bd37c9c2.js";import"./index.13c7b6aa.js";import"./bilibili.03841b80.js";import"./index.b430f9e6.js";import"./index.d64ad771.js";import"./index.b2658c95.js";import"./request.6e67ebe6.js";const B=a.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,H=a.div`
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
  span {
    font-size: ${t(16)};
    font-weight: 600;
    line-height: ${t(60)};
  }
`,W=a.div`
  width: 100%;
  height: ${t(240)};
  margin-top: ${t(60)};
  margin-bottom: ${t(26)};
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
    }
  }
`,q=a.div`
  position: relative;
  width: 100%;
  height: ${t(26)};
  margin-bottom: ${t(10)};
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${t(110)};
    height: ${t(26)};
    line-height: ${t(26)};
    border-radius: ${t(14)};
    font-size: ${t(14)};
    background: rgba(227, 229, 231);
    z-index: 10;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0.05rem;
    background: #eee;
  }
`,I=()=>o(W,{children:s("div",{className:"info",children:[o("img",{src:C,alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"})]})}),O=()=>s(q,{children:[o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"}),o("p",{})]}),V=e=>{const[n,l]=r.exports.useState(!0),[h,g]=r.exports.useState([]),[c,m]=r.exports.useState(0),f=F(),{goodsList:p,enterLoading:$,cartGoodsList:d}=e,{getGoodListDispatch:D,addDispatch:x,delDispatch:v}=e;console.log(d,"-----"),r.exports.useEffect(()=>{D()},[]);async function b(){await u(1e3),R.show("\u5237\u65B0\u6210\u529F")}async function w(){return c>=5?[]:(await u(1e3),m(i=>i+1),p.map(i=>c>=1?{...i,id:i.id+=p.length}:{...i}))}async function L(){const i=await w();g(G=>[...G,...i]),l(i.length>0)}return s(B,{children:[s(H,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>f(-1)}),d.length>0?s("span",{children:["\u8D2D\u7269\u8F66(",d.length,")"]}):o("span",{children:"\u8D2D\u7269\u8F66"})]}),I(),O(),$?o(z.Paragraph,{lineCount:20,animated:!0}):s(T,{onRefresh:b,renderText:i=>o("div",{children:k[i]}),children:[o(j,{goodData:h,addDispatch:x,delDispatch:v}),o(E,{loadMore:L,hasMore:n})]}),o(N,{top:3e3})]})},J=e=>({enterLoading:e.vip.enterLoading,goodsList:e.vip.goodsList,cartGoodsList:e.vip.cartGoodsList}),K=e=>({getGoodListDispatch(){e(P())},addDispatch(n){e(A(n))},delDispatch(n){e(M(n))}});var at=S(J,K)(y.memo(V));export{at as default};
