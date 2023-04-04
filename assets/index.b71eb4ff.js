import{M as y,N as D,s as r,p as o,b as G,c as E,R as S,u as b,r as p,d,j as i,e as w}from"./index.9884a26e.js";import{S as C,L as $}from"./index.075917bc.js";import{b as N}from"./request.8cf404ae.js";import{b as T,d as k}from"./actionCreators.9b6c4f94.js";import{W as O,G as W}from"./index.f8cfb250.js";import"./index.73846c3c.js";import"./bilibili.03841b80.js";const j=t=>({type:D,data:t}),l=t=>({type:y,data:t}),R=t=>e=>{N().then(c=>{let a=c.filter(h=>h.title.indexOf(t)!=-1);e(j(a)),e(l(!1))})},_=r.div`
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
  height: ${o(62)};
  span {
    font-size: ${o(14)};
    line-height: ${o(62)};
  }
`,Q=r.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  margin-top: ${o(72)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${o(255)};
      height: ${o(120)};
      margin: 0 auto;
    }
  }
`,q=r.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${o(62)};
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
`,A=t=>{const e=b(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:g,addDispatch:u,delDispatch:m}=t,[n,f]=p.exports.useState(""),L=s=>{f(s)};p.exports.useEffect(()=>{n.trim()&&(h(!0),g(n))},[n]);const x=()=>d(O,{children:[i("h3",{style:{paddingTop:"0.5rem"},children:"\u5546\u54C1\u5217\u8868"}),i("div",{className:"container",children:a.map(s=>i(W,{good:s,addDispatch:u,delDispatch:m},s.id))})]}),v=()=>i(Q,{children:d("div",{className:"info",children:[i("img",{src:w,alt:""}),i("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return d(_,{children:[d(I,{children:[i(C,{newQuery:n,handleQuery:L}),i("span",{onClick:()=>e(-1),children:"\u53D6\u6D88"})]}),i(q,{children:n&&(a.filter(s=>s.title.indexOf(n)!=-1).length>0?x():v())}),c&&i(z,{children:i($,{})})]})},P=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),B=t=>({changeEnterLoadingDispatch(e){t(l(e))},getGoodsListDispatch(e){t(R(e))},addDispatch(e){t(T(e))},delDispatch(e){t(k(e))}});var X=E(P,B)(S.memo(A));export{X as default};
