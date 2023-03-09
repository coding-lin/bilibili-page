import{S as C,a as N,s as o,p as t,b as h,c as T,R as F,u as j,r as c,j as e,d as a,F as g}from"./index.3e008df0.js";import{S as z,L as k}from"./index.df13f102.js";import{g as W,b as G}from"./bilibili.63d36b3a.js";import{C as O}from"./CSSTransition.56be5e97.js";const R=i=>({type:N,data:i}),f=i=>({type:C,data:i}),_=i=>n=>{W().then(d=>{let l=d.filter(u=>u.title.indexOf(i)!=-1);n(R(l)),n(f(!1))})},A=o.div`
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
`,B=o.div`
  display: flex;
  width: 100%;
  height: ${t(62)};
  span {
    font-size: ${t(14)};
    line-height: ${t(62)};
  }
`,H=o.div`
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
`,I=o.div`
  
`,P=o.div`
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
`,Q=o.div`
  width: 100%;
  display: flex;
  margin-top: ${t(30)};
  flex-direction: column;
  overflow: hidden;
  border-top: ${t(1)} solid ${h["border-color"]};
`,q=o.div`
  position: relative;
  height: ${t(82)};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${t(1)} solid ${h["border-color"]};
  img {
    width: ${t(80)};
    height: ${t(80)};
  }
  .time {
    position: absolute;
    left: 78%;
  }
`,U=o.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,K=i=>{const n=j(),{enterLoading:d,suggestList:l}=i,{changeEnterLoadingDispatch:u,getSuggestListDispatch:m}=i,[r,y]=c.exports.useState(""),[x,S]=c.exports.useState(!1),[p,$]=c.exports.useState(!0);c.exports.useEffect(()=>{S(!0)},[]);const w=s=>{y(s)},b=()=>{$(!p)};c.exports.useEffect(()=>{r.trim()&&(u(!0),m(r))},[r]);const L=s=>{n(`/suggest/${s}`)},v=()=>a(g,{children:[a("div",{className:"title",children:[e("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),e("span",{onClick:()=>b(),children:p?"\u9690\u85CF":"\u663E\u793A"})]}),a("div",{className:"desc",style:p?{display:""}:{display:"none"},children:[e("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),e("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),e("span",{children:"\u5C0F\u84DD\u84DD"}),e("span",{children:"v5 wbg"})]})]}),D=()=>a(g,{children:[e("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),e(Q,{children:l.map(s=>a(q,{className:"item",onClick:()=>L(s.id),children:[e("img",{src:G}),e("span",{className:"title",children:s.title}),e("span",{className:"time",children:s.time})]},s.id))})]}),E=()=>e(P,{children:a("div",{className:"info",children:[e("img",{src:"https://s2.xptou.com/2023/03/09/640a01f189bec.png"}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return e(O,{in:x,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:a(A,{children:[a(B,{children:[e(z,{newQuery:r,handleQuery:w}),e("span",{onClick:()=>n(-1),children:"\u53D6\u6D88"})]}),e(H,{show:!r,children:!r&&v()}),e(I,{show:r,children:r&&(l.filter(s=>s.title.indexOf(r)!=-1).length>0?D():E())}),d&&e(U,{children:e(k,{})})]})})},J=i=>({enterLoading:i.search.enterLoading,suggestList:i.search.suggestList}),M=i=>({changeEnterLoadingDispatch(n){i(f(n))},getSuggestListDispatch(n){i(_(n))}});var tt=T(J,M)(F.memo(K));export{tt as default};
