import{J as x,K as y,s,p as n,b as v,c as E,R as G,u as D,r as p,d,j as e,e as S}from"./index.85311aa9.js";import{S as w,L as $}from"./index.5e88174a.js";import{b}from"./request.2516a5e0.js";import{W as T,G as C}from"./index.b8009f2c.js";import"./index.6178f709.js";import"./bilibili.03841b80.js";const k=t=>({type:y,data:t}),g=t=>({type:x,data:t}),N=t=>i=>{b().then(c=>{let a=c.filter(h=>h.title.indexOf(t)!=-1);i(k(a)),i(g(!1))})},O=s.div`
  width: 100%;
`,W=s.div`
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
`,j=s.div`
  width: 100%;
  min-height: 100vh;
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
`,R=s.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${n(62)};
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
`,I=t=>{const i=D(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:l}=t,[o,u]=p.exports.useState(""),m=r=>{u(r)};p.exports.useEffect(()=>{o.trim()&&(h(!0),l(o))},[o]);const f=()=>d(T,{children:[e("h3",{style:{paddingTop:"0.5rem"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:a.map(r=>e(C,{good:r},r.id))})]}),L=()=>e(j,{children:d("div",{className:"info",children:[e("img",{src:S,alt:""}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return d(O,{children:[d(W,{children:[e(w,{newQuery:o,handleQuery:m}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(R,{children:o&&(a.filter(r=>r.title.indexOf(o)!=-1).length>0?f():L())}),c&&e(_,{children:e($,{})})]})},Q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),q=t=>({changeEnterLoadingDispatch(i){t(g(i))},getGoodsListDispatch(i){t(N(i))}});var K=E(Q,q)(G.memo(I));export{K as default};
