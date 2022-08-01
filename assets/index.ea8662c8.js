import{n as x,o as L,s as r,b as y,c as v,R as E,u as G,r as p,d as a,j as e}from"./index.74f1084c.js";import{S as D,N as S,L as w}from"./nothing.af0134b3.js";import{c as N}from"./bilibili.8f203974.js";import{W as T,G as b}from"./index.0103db73.js";import"./index.10f5ec2f.js";const C=t=>({type:L,data:t}),h=t=>({type:x,data:t}),k=t=>i=>{N().then(d=>{let s=d.filter(c=>c.title.indexOf(t)!=-1);i(C(s)),i(h(!1))})},O=r.div`
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
`,_=t=>{const i=G(),{enterLoading:d,goodsList:s}=t,{changeEnterLoadingDispatch:c,getGoodsListDispatch:g}=t,[n,u]=p.exports.useState(""),l=o=>{u(o)};p.exports.useEffect(()=>{n.trim()&&(c(!0),g(n))},[n]);const f=()=>a(T,{children:[e("h3",{style:{paddingTop:"10px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:s.map(o=>e(b,{good:o},o.id))})]}),m=()=>e(j,{children:a("div",{className:"info",children:[e("img",{src:S}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return a(O,{children:[a(W,{children:[e(D,{newQuery:n,handleQuery:l}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(I,{children:n&&(s.filter(o=>o.title.indexOf(n)!=-1).length>0?f():m())}),d&&e(R,{children:e(w,{})})]})},Q=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),q=t=>({changeEnterLoadingDispatch(i){t(h(i))},getGoodsListDispatch(i){t(k(i))}});var V=v(Q,q)(E.memo(_));export{V as default};
