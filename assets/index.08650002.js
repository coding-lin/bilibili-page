import{n as x,o as y,s as r,p as i,b as v,c as E,R as G,u as D,r as h,d as c,j as e}from"./index.c9a2013c.js";import{S,L as w}from"./index.3193cfd0.js";import{c as $}from"./bilibili.a31400e1.js";import{W as T,G as b}from"./index.67d0d93e.js";import"./index.93e5b33d.js";const C=t=>({type:y,data:t}),g=t=>({type:x,data:t}),k=t=>n=>{$().then(d=>{let a=d.filter(p=>p.title.indexOf(t)!=-1);n(C(a)),n(g(!1))})},N=r.div`
  width: 100%;
`,O=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  width: 100%;
  height: ${i(62)};
  span {
    font-size: ${i(14)};
    line-height: ${i(62)};
  }
`,W=r.div`
  width: 100%;
  background: #fff;
  margin-top: ${i(72)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${i(255)};
      height: ${i(120)};
      margin: 0 auto;
    }
  }
`,j=r.div`
  width: 100;
  margin-top: ${i(62)};
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
`,_=t=>{const n=D(),{enterLoading:d,goodsList:a}=t,{changeEnterLoadingDispatch:p,getGoodsListDispatch:u}=t,[o,l]=h.exports.useState(""),f=s=>{l(s)};h.exports.useEffect(()=>{o.trim()&&(p(!0),u(o))},[o]);const m=()=>c(T,{children:[e("h3",{style:{paddingTop:"10px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:a.map(s=>e(b,{good:s},s.id))})]}),L=()=>e(W,{children:c("div",{className:"info",children:[e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f016ae5c9.png"}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return c(N,{children:[c(O,{children:[e(S,{newQuery:o,handleQuery:f}),e("span",{onClick:()=>n(-1),children:"\u53D6\u6D88"})]}),e(j,{children:o&&(a.filter(s=>s.title.indexOf(o)!=-1).length>0?m():L())}),d&&e(R,{children:e(w,{})})]})},z=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),I=t=>({changeEnterLoadingDispatch(n){t(g(n))},getGoodsListDispatch(n){t(k(n))}});var H=E(z,I)(G.memo(_));export{H as default};
