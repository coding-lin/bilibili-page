import{n as x,o as L,s as r,b as y,c as v,R as E,u as G,r as d,d as s,j as e}from"./index.95fb09a8.js";import{S as D,N as S,L as w}from"./nothing.3f42c665.js";import{c as N}from"./bilibili.de7360e3.js";import{W as T,G as b}from"./index.057a8aca.js";import"./index.5e734063.js";const C=t=>({type:L,data:t}),c=t=>({type:x,data:t}),k=()=>t=>{N().then(n=>{t(C(n)),t(c(!1))})},O=r.div`
  width: 100%;
`,W=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,j=r.div`
  width: 100%;
  background: #fff;
  margin-top: 72px;
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 68%;
      height: 100%;
      margin: 0 auto;
    }
  }
`,I=r.div`
  width: 100;
  margin-top: 62px;
  background: ${y["background-color"]};
`,R=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,_=t=>{const n=G(),{enterLoading:p,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:g}=t,[o,u]=d.exports.useState(""),l=i=>{u(i)};d.exports.useEffect(()=>{o.trim()&&(h(!0),g(o))},[o]);const f=()=>s(T,{children:[e("h3",{style:{paddingTop:"10px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:a.filter(i=>i.title.indexOf(o)!=-1).map(i=>e(b,{good:i},i.id))})]}),m=()=>e(j,{children:s("div",{className:"info",children:[e("img",{src:S}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return s(O,{children:[s(W,{children:[e(D,{newQuery:o,handleQuery:l}),e("span",{onClick:()=>n(-1),children:"\u53D6\u6D88"})]}),e(I,{children:a.filter(i=>i.title.indexOf(o)!=-1).length>0?f():m()}),p&&e(R,{children:e(w,{})})]})},q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),Q=t=>({changeEnterLoadingDispatch(n){t(c(n))},getGoodsListDispatch(n){t(k())}});var V=v(q,Q)(E.memo(_));export{V as default};
