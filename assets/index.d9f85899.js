import{s as a,p as t,c as S,R as y,r,u as F,d as n,j as o,P as T,l as C,V as R,m as u,T as k}from"./index.120f60a9.js";import{S as j}from"./index.df887b29.js";import{G as z}from"./index.92883d61.js";import{N as E,S as N}from"./index.c0a8706a.js";import{a as P,b as A,d as M}from"./actionCreators.a1e52291.js";import"./attach-properties-to-component.6acef87d.js";import"./index.5a4c0fb4.js";import"./index.5f32af6f.js";import"./bilibili.03841b80.js";import"./index.8babb0e7.js";import"./index.26638907.js";import"./index.2d70bfca.js";import"./request.9cf4ee24.js";const B=a.div`
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
`,q=()=>o(W,{children:n("div",{className:"info",children:[o("img",{src:R,alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),I=e=>{const[s,l]=r.exports.useState(!0),[h,g]=r.exports.useState([]),[d,m]=r.exports.useState(0),f=F(),{goodsList:c,enterLoading:$,cartGoodsList:p}=e,{getGoodListDispatch:D,addDispatch:b,delDispatch:x}=e;r.exports.useEffect(()=>{D()},[]);async function v(){await u(1e3),k.show("\u5237\u65B0\u6210\u529F")}async function L(){return d>=5?[]:(await u(1e3),m(i=>i+1),c.map(i=>d>=1?{...i,id:i.id+=c.length}:{...i}))}async function w(){const i=await L();g(G=>[...G,...i]),l(i.length>0)}return n(B,{children:[n(H,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>f(-1)}),p.length>0?n("span",{children:["\u8D2D\u7269\u8F66(",p.length,")"]}):o("span",{children:"\u8D2D\u7269\u8F66"})]}),q(),$?o(j.Paragraph,{lineCount:20,animated:!0}):n(T,{onRefresh:v,renderText:i=>o("div",{children:C[i]}),children:[o(z,{goodData:h,addDispatch:b,delDispatch:x}),o(E,{loadMore:w,hasMore:s})]}),o(N,{top:3e3})]})},V=e=>({enterLoading:e.vip.enterLoading,goodsList:e.vip.goodsList,cartGoodsList:e.vip.cartGoodsList}),J=e=>({getGoodListDispatch(){e(P())},addDispatch(s){e(A(s))},delDispatch(s){e(M(s))}});var nt=S(V,J)(y.memo(I));export{nt as default};
