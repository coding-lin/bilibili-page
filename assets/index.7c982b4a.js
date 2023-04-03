import{M as v,N as y,s,p as n,b as G,c as D,R as E,u as S,r as p,d,j as e,e as b}from"./index.e8af86ff.js";import{S as w,L as $}from"./index.be35c38c.js";import{b as C}from"./request.dd1a347b.js";import{b as N}from"./actionCreators.4798ded0.js";import{W as T,G as k}from"./index.3c7f2aed.js";import"./index.4cd04c16.js";import"./bilibili.03841b80.js";const O=t=>({type:y,data:t}),l=t=>({type:v,data:t}),W=t=>i=>{C().then(c=>{let a=c.filter(h=>h.title.indexOf(t)!=-1);i(O(a)),i(l(!1))})},j=s.div`
  width: 100%;
`,R=s.div`
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
`,_=s.div`
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
`,I=s.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${n(62)};
  background: ${G["background-color"]};
`,Q=s.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,q=t=>{const i=S(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:g,addDispatch:u}=t,[o,m]=p.exports.useState(""),f=r=>{m(r)};p.exports.useEffect(()=>{o.trim()&&(h(!0),g(o))},[o]);const L=()=>d(T,{children:[e("h3",{style:{paddingTop:"0.5rem"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:a.map(r=>e(k,{good:r,addDispatch:u},r.id))})]}),x=()=>e(_,{children:d("div",{className:"info",children:[e("img",{src:b,alt:""}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return d(j,{children:[d(R,{children:[e(w,{newQuery:o,handleQuery:f}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(I,{children:o&&(a.filter(r=>r.title.indexOf(o)!=-1).length>0?L():x())}),c&&e(Q,{children:e($,{})})]})},z=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),A=t=>({changeEnterLoadingDispatch(i){t(l(i))},getGoodsListDispatch(i){t(W(i))},addDispatch(i){t(N(i))}});var K=D(z,A)(E.memo(q));export{K as default};
