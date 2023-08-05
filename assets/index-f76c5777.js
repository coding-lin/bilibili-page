import{i as v,k as G,s as r,p as o,b as E,c as D,R as S,u as w,r as l,d,j as i,e as $}from"./index-1f87f03b.js";import{S as b,L as T}from"./index-9b06d54e.js";import{a as k}from"./request-9f981471.js";import{b as N,d as O}from"./actionCreators-85d1cb0f.js";import{W,G as j}from"./index-c5138b0e.js";import"./index-ae2775d6.js";import"./bilibili-b956cdd9.js";const C=t=>({type:G,data:t}),p=t=>({type:v,data:t}),R=t=>e=>{k().then(c=>{let a=c.filter(h=>h.title.indexOf(t)!==-1);e(C(a)),e(p(!1))})},_=r.div`
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
  background: ${E["background-color"]};
`,z=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,P=t=>{const e=w(),{enterLoading:c,goodsList:a}=t,{changeEnterLoadingDispatch:h,getGoodsListDispatch:g,addDispatch:m,delDispatch:f}=t,[n,u]=l.useState(""),L=s=>{u(s)};l.useEffect(()=>{n.trim()&&(h(!0),g(n))},[n]);const x=()=>d(W,{children:[i("h3",{style:{paddingTop:"0.5rem"},children:"商品列表"}),i("div",{className:"container",children:a.map(s=>i(j,{good:s,addDispatch:m,delDispatch:f},s.id))})]}),y=()=>i(Q,{children:d("div",{className:"info",children:[i("img",{src:$,alt:""}),i("span",{children:"没有搜到商品..."})]})});return d(_,{children:[d(I,{children:[i(b,{newQuery:n,handleQuery:L}),i("span",{onClick:()=>e(-1),children:"取消"})]}),i(q,{children:n&&(a.filter(s=>s.title.indexOf(n)!=-1).length>0?x():y())}),c&&i(z,{children:i(T,{})})]})},A=t=>({enterLoading:t.vipsearch.enterLoading,goodsList:t.vipsearch.goodsList}),B=t=>({changeEnterLoadingDispatch(e){t(p(e))},getGoodsListDispatch(e){t(R(e))},addDispatch(e){t(N(e))},delDispatch(e){t(O(e))}}),X=D(A,B)(S.memo(P));export{X as default};
