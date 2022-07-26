import{S as N,a as T,s as r,b as u,c as F,R as j,u as k,r as o,j as t,d as n,F as p}from"./index.14d53133.js";import{S as W,N as B,L as G}from"./nothing.8b6ca985.js";import{g as I,b as O}from"./bilibili.98b3feea.js";import{C as R}from"./CSSTransition.4ecac0f0.js";const _=e=>({type:T,data:e}),g=e=>({type:N,data:e}),q=()=>e=>{I().then(a=>{e(_(a)),e(g(!1))})},z=r.div`
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
`,H=r.div`
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
`,P=r.div`
  
`,Q=r.div`
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
`,$=r.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${u["border-color"]};
`,U=r.div`
  position: relative;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${u["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .time {
    position: absolute;
    left: 288px;
  }
`,K=r.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,J=e=>{const a=k(),{enterLoading:h,suggestList:l}=e,{changeEnterLoadingDispatch:f,getSuggestListDispatch:m}=e,[s,x]=o.exports.useState(""),[y,d]=o.exports.useState(!1),[c,S]=o.exports.useState(!0);o.exports.useEffect(()=>{d(!0)},[]);const w=()=>{d(!1)},L=i=>{x(i)},b=()=>{S(!c)};o.exports.useEffect(()=>{s.trim()&&(f(!0),m(s))},[s]);const v=i=>{a(`/suggest/${i}`)},D=()=>n(p,{children:[n("div",{className:"title",children:[t("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),t("span",{onClick:()=>b(),children:c?"\u9690\u85CF":"\u663E\u793A"})]}),n("div",{className:"desc",style:c?{display:""}:{display:"none"},children:[t("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),t("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),t("span",{children:"\u5C0F\u84DD\u84DD"}),t("span",{children:"v5 wbg"})]})]}),E=()=>n(p,{children:[t("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),t($,{children:l.filter(i=>i.title.indexOf(s)!=-1).map(i=>n(U,{className:"item",onClick:()=>v(i.id),children:[t("img",{src:O}),t("span",{className:"title",children:i.title}),t("span",{className:"time",children:i.time})]},i.id))})]}),C=()=>t(Q,{children:n("div",{className:"info",children:[t("img",{src:B}),t("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return t(R,{in:y,timeout:500,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(z,{children:[n(A,{children:[t(W,{newQuery:s,handleQuery:L}),t("span",{onClick:()=>[a(-1),w()],children:"\u53D6\u6D88"})]}),t(H,{show:!s,children:D()}),t(P,{show:s,children:l.filter(i=>i.title.indexOf(s)!=-1).length>0?E():C()}),h&&t(K,{children:t(G,{})})]})})},M=e=>({enterLoading:e.search.enterLoading,suggestList:e.search.suggestList}),V=e=>({changeEnterLoadingDispatch(a){e(g(a))},getSuggestListDispatch(a){e(q())}});var et=F(M,V)(j.memo(J));export{et as default};
