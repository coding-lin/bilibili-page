import{s as a,p as t,c as S,R as y,r,u as F,d as n,j as e,P as G,l as T,O as C,m as p,T as R}from"./index.04a8343c.js";import{S as k}from"./index.58240bda.js";import{G as j}from"./index.85b0b0cb.js";import{N as z,S as E}from"./index.2b08ee75.js";import{a as N,b as P,d as A}from"./index.12753733.js";import"./attach-properties-to-component.6acef87d.js";import"./index.0ca34cc7.js";import"./index.a211f1ad.js";import"./index.cde84e63.js";import"./index.e0a9c5f5.js";import"./request.df35fd8f.js";import"./bilibili.03841b80.js";const M=a.div`
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
`,W=()=>e(H,{children:n("div",{className:"info",children:[e("img",{src:C,alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),q=i=>{const[s,u]=r.exports.useState(!0),[l,h]=r.exports.useState([]),[d,g]=r.exports.useState(0),m=F(),{goodsList:c,enterLoading:f}=i,{getGoodListDispatch:$,addDispatch:b,delDispatch:x}=i;r.exports.useEffect(()=>{$()},[]);async function D(){await p(1e3),R.show("\u5237\u65B0\u6210\u529F")}async function v(){return d>=5?[]:(await p(1e3),g(o=>o+1),c.map(o=>d>=1?{...o,id:o.id=o.id+c.length}:{...o}))}async function w(){const o=await v();h(L=>[...L,...o]),u(o.length>0)}return n(M,{children:[n(B,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>m(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),W(),f?e(k.Paragraph,{lineCount:20,animated:!0}):n(G,{onRefresh:D,renderText:o=>e("div",{children:T[o]}),children:[e(j,{goodData:l,addDispatch:b,delDispatch:x}),e(z,{loadMore:w,hasMore:s})]}),e(E,{top:3e3})]})},I=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),O=i=>({getGoodListDispatch(){i(N())},addDispatch(s){i(P(s))},delDispatch(s){i(A(s))}});var it=S(I,O)(y.memo(q));export{it as default};
