import{M as y,N as D,s as r,p as n,b as G,c as E,R as S,u as b,r as l,d,j as i,e as w}from"./index.2ef2ee1b.js";import{S as C,L as $}from"./index.c88d251f.js";import{b as N}from"./request.8ab5977e.js";import{b as T,d as k,W as O,G as W}from"./index.087c5f9b.js";import"./index.26971bf5.js";import"./bilibili.03841b80.js";const j=t=>({type:D,data:t}),p=t=>({type:y,data:t}),R=t=>e=>{N().then(c=>{let a=c.filter(h=>h.title.indexOf(t)!=-1);e(j(a)),e(p(!1))})},_=r.div`
  width: 100%;
`,I=r.div`
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
`,Q=r.div`
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
`,q=r.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${n(62)};
  background: ${G["background-color"]};
`,z=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,A=t=>{const e=b(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:g,addDispatch:u,delDispatch:m}=t,[o,f]=l.exports.useState(""),L=s=>{f(s)};l.exports.useEffect(()=>{o.trim()&&(h(!0),g(o))},[o]);const x=()=>d(O,{children:[i("h3",{style:{paddingTop:"0.5rem"},children:"\u5546\u54C1\u5217\u8868"}),i("div",{className:"container",children:a.map(s=>i(W,{good:s,addDispatch:u,delDispatch:m},s.id))})]}),v=()=>i(Q,{children:d("div",{className:"info",children:[i("img",{src:w,alt:""}),i("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return d(_,{children:[d(I,{children:[i(C,{newQuery:o,handleQuery:L}),i("span",{onClick:()=>e(-1),children:"\u53D6\u6D88"})]}),i(q,{children:o&&(a.filter(s=>s.title.indexOf(o)!=-1).length>0?x():v())}),c&&i(z,{children:i($,{})})]})},P=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),B=t=>({changeEnterLoadingDispatch(e){t(p(e))},getGoodsListDispatch(e){t(R(e))},addDispatch(e){t(T(e))},delDispatch(e){t(k(e))}});var U=E(P,B)(S.memo(A));export{U as default};
