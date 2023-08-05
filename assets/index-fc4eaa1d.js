import{s as r,p as t,c as y,R as D,r as a,u as T,d as n,j as o,P as k,g as R,m as z,h as l,T as C}from"./index-fed2dc62.js";import{S as j}from"./index-a694b7af.js";import{G as N}from"./index-60c32f4d.js";import{N as P,S as E}from"./index-129154f0.js";import{a as M,b as H,d as W}from"./actionCreators-dab3c36d.js";import"./attach-properties-to-component-a2c66ef2.js";import"./index-017508ec.js";import"./index-9b80751c.js";import"./bilibili-b956cdd9.js";import"./dot-loading-b8487f5c.js";import"./index-54b0b29a.js";import"./index-2394357d.js";import"./request-22dbc0c8.js";const q=r.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`,I=r.div`
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
`,O=r.div`
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
`,A=r.div`
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
`,B=()=>o(O,{children:n("div",{className:"info",children:[o("img",{src:z,alt:""}),o("p",{children:"购物车空空如也"})]})}),F=()=>n(A,{children:[o("span",{children:"你可能还喜欢"}),o("p",{})]}),J=e=>{const[s,h]=a.useState(!0),[g,m]=a.useState([]),[c,u]=a.useState(0),f=T(),{goodsList:p,enterLoading:$,cartGoodsList:d}=e,{getGoodListDispatch:v,addDispatch:b,delDispatch:w}=e;console.log(d,"-----"),a.useEffect(()=>{v()},[]);async function x(){await l(1e3),C.show("刷新成功")}async function L(){return c>=5?[]:(await l(1e3),u(i=>i+1),p.map(i=>c>=1?{...i,id:i.id+=p.length}:{...i}))}async function G(){const i=await L();m(S=>[...S,...i]),h(i.length>0)}return n(q,{children:[n(I,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>f(-1)}),d.length>0?n("span",{children:["购物车(",d.length,")"]}):o("span",{children:"购物车"})]}),B(),F(),$?o(j.Paragraph,{lineCount:20,animated:!0}):n(k,{onRefresh:x,renderText:i=>o("div",{children:R[i]}),children:[o(N,{goodData:g,addDispatch:b,delDispatch:w}),o(P,{loadMore:G,hasMore:s})]}),o(E,{top:3e3})]})},K=e=>({enterLoading:e.vip.enterLoading,goodsList:e.vip.goodsList,cartGoodsList:e.vip.cartGoodsList}),Q=e=>({getGoodListDispatch(){e(M())},addDispatch(s){e(H(s))},delDispatch(s){e(W(s))}}),rt=y(K,Q)(D.memo(J));export{rt as default};
