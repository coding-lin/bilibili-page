import{o as L,p as y,s,b as v,c as E,R as w,u as G,r,d as a,j as e}from"./index.df2e16cd.js";import{S,N as D,L as N}from"./nothing.1237f8f0.js";import{c as b}from"./bilibili.295f743d.js";import{W as C,G as T}from"./index.b88100af.js";import"./index.ab4d2cbd.js";const k=t=>({type:y,data:t}),d=t=>({type:L,data:t}),O=()=>t=>{b().then(o=>{t(k(o)),t(d(!1))})},W=s.div`
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
`,q=t=>{const o=G(),{enterLoading:p,goodsList:c}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:u}=t,[n,g]=r.exports.useState(""),[P,l]=r.exports.useState(!1);r.exports.useEffect(()=>{l(!0)},[]);const f=i=>{g(i)};r.exports.useEffect(()=>{n.trim()&&(h(!0),u(n))},[n]);const m=()=>a(C,{children:[e("h3",{style:{margin:"5px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:c.filter(i=>i.title.indexOf(n)!=-1).map(i=>e(T,{good:i},i.id))})]}),x=()=>e(I,{children:a("div",{className:"info",children:[e("img",{src:D}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return a(W,{children:[a(j,{children:[e(S,{newQuery:n,handleQuery:f}),e("span",{onClick:()=>o(-1),children:"\u53D6\u6D88"})]}),e(R,{show:n,children:c.filter(i=>i.title.indexOf(n)!=-1).length>0?m():x()}),p&&e(_,{children:e(N,{})})]})},Q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),A=t=>({changeEnterLoadingDispatch(o){t(d(o))},getGoodsListDispatch(o){t(O())}});var F=E(Q,A)(w.memo(q));export{F as default};
