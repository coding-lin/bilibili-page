import{s as a,p as t,c as S,R as y,r,u as F,d as s,j as o,P as T,l as k,V as C,m as u,T as R}from"./index.b398f1f6.js";import{S as z}from"./index.8156a4b9.js";import{G as j}from"./index.48017982.js";import{N as E,S as N}from"./index.42f9fd4c.js";import{a as P,b as A,d as M}from"./actionCreators.5f7b93cc.js";import"./attach-properties-to-component.6acef87d.js";import"./index.7c071fbb.js";import"./index.c6562f1a.js";import"./bilibili.03841b80.js";import"./index.8e3114f4.js";import"./index.b9288a6b.js";import"./index.8af38bc8.js";import"./request.c329a291.js";const B=a.div`
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
