import{S as C,a as N,s as o,p as e,b as h,c as T,R as F,u as z,r as c,j as t,d as a,F as p}from"./index.54cbfc40.js";import{S as j,L as k}from"./index.5b8a10f0.js";import{g as W,b as G}from"./bilibili.e0643e53.js";import{C as O}from"./CSSTransition.0bb04fa0.js";const R=i=>({type:N,data:i}),f=i=>({type:C,data:i}),_=i=>n=>{W().then(d=>{let l=d.filter(u=>u.title.indexOf(i)!=-1);n(R(l)),n(f(!1))})},A=o.div`
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
  height: ${e(62)};
  span {
    font-size: ${e(14)};
    line-height: ${e(62)};
  }
`,H=o.div`
  width: 100%;
  .title {
    margin: ${e(6)};
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: ${e(15)};
      font-weight: 600;
      margin-left: ${e(10)};
    }
    span {
      font-size: ${e(14)};
      margin-right: ${e(12)};
    }
  }
  .desc {
    margin: ${e(14)};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      font-size: ${e(14)};
      padding: ${e(4)} ${e(8)};
      border-radius: ${e(4)};
    }
  }
`,I=o.div`
  
`,P=o.div`
  width: 100%;
  margin-top: ${e(20)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${e(255)};
      height: ${e(120)};
      margin: 0 auto;
    }
  }
`,Q=o.div`
  width: 100%;
  display: flex;
  margin-top: ${e(30)};
  flex-direction: column;
  overflow: hidden;
  border-top: ${e(1)} solid ${h["border-color"]};
`,q=o.div`
  position: relative;
  height: ${e(82)};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${e(1)} solid ${h["border-color"]};
  img {
    width: ${e(80)};
    height: ${e(80)};
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
`,K=i=>{const n=z(),{enterLoading:d,suggestList:l}=i,{changeEnterLoadingDispatch:u,getSuggestListDispatch:m}=i,[r,y]=c.exports.useState(""),[x,S]=c.exports.useState(!1),[g,$]=c.exports.useState(!0);c.exports.useEffect(()=>{S(!0)},[]);const w=s=>{y(s)},L=()=>{$(!g)};c.exports.useEffect(()=>{r.trim()&&(u(!0),m(r))},[r]);const b=s=>{n(`/suggest/${s}`)},v=()=>a(p,{children:[a("div",{className:"title",children:[t("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),t("span",{onClick:()=>L(),children:g?"\u9690\u85CF":"\u663E\u793A"})]}),a("div",{className:"desc",style:g?{display:""}:{display:"none"},children:[t("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),t("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),t("span",{children:"\u5C0F\u84DD\u84DD"}),t("span",{children:"v5 wbg"})]})]}),D=()=>a(p,{children:[t("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),t(Q,{children:l.map(s=>a(q,{className:"item",onClick:()=>b(s.id),children:[t("img",{src:G}),t("span",{className:"title",children:s.title}),t("span",{className:"time",children:s.time})]},s.id))})]}),E=()=>t(P,{children:a("div",{className:"info",children:[t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f016ae5c9.png"}),t("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return t(O,{in:x,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:a(A,{children:[a(B,{children:[t(j,{newQuery:r,handleQuery:w}),t("span",{onClick:()=>n(-1),children:"\u53D6\u6D88"})]}),t(H,{show:!r,children:!r&&v()}),t(I,{show:r,children:r&&(l.filter(s=>s.title.indexOf(r)!=-1).length>0?D():E())}),d&&t(U,{children:t(k,{})})]})})},J=i=>({enterLoading:i.search.enterLoading,suggestList:i.search.suggestList}),M=i=>({changeEnterLoadingDispatch(n){i(f(n))},getSuggestListDispatch(n){i(_(n))}});var ee=T(J,M)(F.memo(K));export{ee as default};
