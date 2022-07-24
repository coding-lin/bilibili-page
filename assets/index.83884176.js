import{o as L,p as y,s as o,c as v,R as E,u as G,r,d as a,j as e}from"./index.99c4a17e.js";import{S,N as w,L as D}from"./nothing.4e67f1f0.js";import{c as N}from"./bilibili.a58637c1.js";import{W as C,G as T}from"./index.db266edb.js";import"./index.f4072547.js";const O=t=>({type:y,data:t}),d=t=>({type:L,data:t}),W=()=>t=>{N().then(i=>{t(O(i)),t(d(!1))})},j=o.div`
  width: 100%;
  background: #fff;
`,I=o.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,R=o.div`
  width: 100%;
  margin-top: 20px;
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
`,_=o.div`

`,q=o.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,Q=t=>{const i=G(),{enterLoading:h,goodsList:c}=t,{changeEnterLoadingDispatch:p,getGoodsListDispatch:u}=t,[n,g]=r.exports.useState(""),[A,l]=r.exports.useState(!1);r.exports.useEffect(()=>{l(!0)},[]);const m=s=>{g(s)};r.exports.useEffect(()=>{n.trim()&&(p(!0),u(n))},[n]);const f=()=>a(C,{children:[e("h3",{style:{margin:"5px"},children:"\u5546\u54C1\u5217\u8868"}),e("div",{className:"container",children:c.filter(s=>s.title.indexOf(n)!=-1).map(s=>e(T,{good:s},s.id))})]}),x=()=>e(R,{children:a("div",{className:"info",children:[e("img",{src:w}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u5546\u54C1..."})]})});return a(j,{children:[a(I,{children:[e(S,{newQuery:n,handleQuery:m}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),e(_,{show:n,children:c.filter(s=>s.title.indexOf(n)!=-1).length>0?f():x()}),h&&e(q,{children:e(D,{})})]})},b=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),k=t=>({changeEnterLoadingDispatch(i){t(d(i))},getGoodsListDispatch(i){t(W())}});var F=v(b,k)(E.memo(Q));export{F as default};
