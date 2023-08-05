import{S as D,a as T,s as o,p as t,b as f,c as j,R as z,u as C,r as l,j as e,d as a,F as p,e as k}from"./index-fed2dc62.js";import{S as W,L as G}from"./index-3c14a4ae.js";import{b as O}from"./bilibili-b956cdd9.js";import{g as R}from"./request-22dbc0c8.js";import{C as _}from"./CSSTransition-710d46f3.js";const F=i=>({type:T,data:i}),m=i=>({type:D,data:i}),H=i=>n=>{R().then(d=>{let c=d.filter(g=>g.title.indexOf(i)!==-1);n(F(c)),n(m(!1))})},I=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  background: #fff;
  transform-origin: right bottom;
  /* CSSTranstion 过度类型给children  */
  &.fly-enter,
  &.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-apply-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`,P=o.div`
  display: flex;
  width: 100%;
  height: ${t(62)};
  span {
    font-size: ${t(14)};
    line-height: ${t(62)};
  }
`,Q=o.div`
  width: 100%;
  .title {
    margin: ${t(6)};
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: ${t(15)};
      font-weight: 600;
      margin-left: ${t(10)};
    }
    span {
      font-size: ${t(14)};
      margin-right: ${t(12)};
    }
  }
  .desc {
    margin: ${t(14)};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      font-size: ${t(14)};
      padding: ${t(4)} ${t(8)};
      border-radius: ${t(4)};
    }
  }
`,q=o.div`
  
`,U=o.div`
  width: 100%;
  margin-top: ${t(20)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${t(255)};
      height: ${t(120)};
      margin: 0 auto;
    }
  }
`,A=o.div`
  width: 100%;
  display: flex;
  margin-top: ${t(30)};
  flex-direction: column;
  overflow: hidden;
  border-top: ${t(1)} solid ${f["border-color"]};
`,B=o.div`
  position: relative;
  height: ${t(82)};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${t(1)} solid ${f["border-color"]};
  img {
    width: ${t(80)};
    height: ${t(80)};
  }
  .time {
    position: absolute;
    left: 78%;
  }
`,K=o.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,J=i=>{const n=C(),{enterLoading:d,suggestList:c}=i,{changeEnterLoadingDispatch:g,getSuggestListDispatch:u}=i,[r,y]=l.useState(""),[x,S]=l.useState(!1),[h,$]=l.useState(!0);l.useEffect(()=>{S(!0)},[]);const w=s=>{y(s)},L=()=>{$(!h)};l.useEffect(()=>{r.trim()&&(g(!0),u(r))},[r]);const b=s=>{n(`/suggest/${s}`)},v=()=>a(p,{children:[a("div",{className:"title",children:[e("h2",{children:"搜索发现"}),e("span",{onClick:()=>L(),children:h?"隐藏":"显示"})]}),a("div",{className:"desc",style:h?{display:""}:{display:"none"},children:[e("span",{children:"白石茉莉奈"}),e("span",{children:"周杰伦新专辑"}),e("span",{children:"小蓝蓝"}),e("span",{children:"v5 wbg"})]})]}),E=()=>a(p,{children:[e("h3",{style:{float:"left",margin:"10px"},children:"视频列表"}),e(A,{children:c.map(s=>a(B,{className:"item",onClick:()=>b(s.id),children:[e("img",{src:O,alt:""}),e("span",{className:"title",children:s.title}),e("span",{className:"time",children:s.time})]},s.id))})]}),N=()=>e(U,{children:a("div",{className:"info",children:[e("img",{src:k,alt:""}),e("span",{children:"没有搜到结果..."})]})});return e(_,{in:x,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:a(I,{children:[a(P,{children:[e(W,{newQuery:r,handleQuery:w}),e("span",{onClick:()=>n(-1),children:"取消"})]}),e(Q,{show:!r,children:!r&&v()}),e(q,{show:r,children:r&&(c.filter(s=>s.title.indexOf(r)!=-1).length>0?E():N())}),d&&e(K,{children:e(G,{})})]})})},M=i=>({enterLoading:i.search.enterLoading,suggestList:i.search.suggestList}),V=i=>({changeEnterLoadingDispatch(n){i(m(n))},getSuggestListDispatch(n){i(H(n))}}),it=j(M,V)(z.memo(J));export{it as default};
