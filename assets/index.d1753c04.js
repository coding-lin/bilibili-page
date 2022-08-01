import{S as C,a as N,s as r,b as p,c as T,R as F,u as j,r as o,j as t,d as n,F as d}from"./index.95fb09a8.js";import{S as k,N as W,L as G}from"./nothing.3f42c665.js";import{g as I,b as O}from"./bilibili.de7360e3.js";import{C as R}from"./CSSTransition.3c86a330.js";const _=e=>({type:N,data:e}),u=e=>({type:C,data:e}),q=()=>e=>{I().then(a=>{e(_(a)),e(u(!1))})},z=r.div`
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
`,A=r.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,B=r.div`
  width: 100%;
  .title {
    margin: 6px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin-left: 10px;
    }
    span {
      margin-right: 12px;
    }
  }
  .desc {
    margin: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
`,H=r.div`
  
`,P=r.div`
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
`,Q=r.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${p["border-color"]};
`,$=r.div`
  position: relative;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${p["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .time {
    position: absolute;
    left: 288px;
  }
`,U=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,K=e=>{const a=j(),{enterLoading:g,suggestList:l}=e,{changeEnterLoadingDispatch:h,getSuggestListDispatch:f}=e,[s,m]=o.exports.useState(""),[x,y]=o.exports.useState(!1),[c,S]=o.exports.useState(!0);o.exports.useEffect(()=>{y(!0)},[]);const w=i=>{m(i)},L=()=>{S(!c)};o.exports.useEffect(()=>{s.trim()&&(h(!0),f(s))},[s]);const b=i=>{a(`/suggest/${i}`)},v=()=>n(d,{children:[n("div",{className:"title",children:[t("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),t("span",{onClick:()=>L(),children:c?"\u9690\u85CF":"\u663E\u793A"})]}),n("div",{className:"desc",style:c?{display:""}:{display:"none"},children:[t("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),t("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),t("span",{children:"\u5C0F\u84DD\u84DD"}),t("span",{children:"v5 wbg"})]})]}),D=()=>n(d,{children:[t("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),t(Q,{children:l.filter(i=>i.title.indexOf(s)!=-1).map(i=>n($,{className:"item",onClick:()=>b(i.id),children:[t("img",{src:O}),t("span",{className:"title",children:i.title}),t("span",{className:"time",children:i.time})]},i.id))})]}),E=()=>t(P,{children:n("div",{className:"info",children:[t("img",{src:W}),t("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return t(R,{in:x,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(z,{children:[n(A,{children:[t(k,{newQuery:s,handleQuery:w}),t("span",{onClick:()=>a(-1),children:"\u53D6\u6D88"})]}),t(B,{show:!s,children:v()}),t(H,{show:s,children:l.filter(i=>i.title.indexOf(s)!=-1).length>0?D():E()}),g&&t(U,{children:t(G,{})})]})})},J=e=>({enterLoading:e.search.enterLoading,suggestList:e.search.suggestList}),M=e=>({changeEnterLoadingDispatch(a){e(u(a))},getSuggestListDispatch(a){e(q())}});var tt=T(J,M)(F.memo(K));export{tt as default};
