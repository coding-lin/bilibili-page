import{n as L,o as y,s,b as v,c as E,R as w,u as G,r,d as a,j as e}from"./index.459591b2.js";import{S,N as D,L as N}from"./nothing.81559893.js";import{c as T}from"./bilibili.b5d98814.js";import{W as b,G as C}from"./index.8ef880a5.js";import"./index.b22be2aa.js";const k=t=>({type:y,data:t}),d=t=>({type:L,data:t}),O=()=>t=>{T().then(i=>{t(k(i)),t(d(!1))})},W=s.div`
  width: 100%;
`,j=s.div`
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
`,I=s.div`
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
`,R=s.div`
  width: 100;
  margin-top: 62px;
  background: ${v["background-color"]};
`,_=s.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,q=t=>{const i=G(),{enterLoading:p,goodsList:c}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:u}=t,[o,g]=r.exports.useState(""),[P,l]=r.exports.useState(!1);r.exports.useEffect(()=>{l(!0)},[]);const f=n=>{g(n)};r.exports.useEffect(()=>{o.trim()&&(h(!0),u(o))},[o]);const m=()=>a(b,{children:[e("h3",{style:{paddingTop:"10px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:c.filter(n=>n.title.indexOf(o)!=-1).map(n=>e(C,{good:n},n.id))})]}),x=()=>e(I,{children:a("div",{className:"info",children:[e("img",{src:D}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return a(W,{children:[a(j,{children:[e(S,{newQuery:o,handleQuery:f}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(R,{show:o,children:c.filter(n=>n.title.indexOf(o)!=-1).length>0?m():x()}),p&&e(_,{children:e(N,{})})]})},Q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),A=t=>({changeEnterLoadingDispatch(i){t(d(i))},getGoodsListDispatch(i){t(O())}});var F=E(Q,A)(w.memo(q));export{F as default};
