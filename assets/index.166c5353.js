import{n as x,o as y,s as r,p as n,b as v,c as E,R as G,u as D,r as h,d,j as e}from"./index.4f73175a.js";import{S,L as w,N as $}from"./nothing.15b1824d.js";import{c as N}from"./bilibili.491df666.js";import{W as T,G as b}from"./index.0b6bc19c.js";import"./index.cd398bde.js";const C=t=>({type:y,data:t}),g=t=>({type:x,data:t}),k=t=>i=>{N().then(c=>{let a=c.filter(p=>p.title.indexOf(t)!=-1);i(C(a)),i(g(!1))})},O=r.div`
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
  height: ${n(62)};
  span {
    font-size: ${n(14)};
    line-height: ${n(62)};
  }
`,j=r.div`
  width: 100%;
  background: #fff;
  margin-top: ${n(72)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${n(255)};
      height: ${n(120)};
      margin: 0 auto;
    }
  }
`,I=r.div`
  width: 100;
  margin-top: ${n(62)};
  background: ${v["background-color"]};
`,R=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,_=t=>{const i=D(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:p,getGoodsListDispatch:u}=t,[o,l]=h.exports.useState(""),f=s=>{l(s)};h.exports.useEffect(()=>{o.trim()&&(p(!0),u(o))},[o]);const m=()=>d(T,{children:[e("h3",{style:{paddingTop:"10px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:a.map(s=>e(b,{good:s},s.id))})]}),L=()=>e(j,{children:d("div",{className:"info",children:[e("img",{src:$}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return d(O,{children:[d(W,{children:[e(S,{newQuery:o,handleQuery:f}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(I,{children:o&&(a.filter(s=>s.title.indexOf(o)!=-1).length>0?m():L())}),c&&e(R,{children:e(w,{})})]})},Q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),q=t=>({changeEnterLoadingDispatch(i){t(g(i))},getGoodsListDispatch(i){t(k(i))}});var V=E(Q,q)(G.memo(_));export{V as default};
