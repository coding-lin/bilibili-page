import{S as C,a as N,s as a,b as g,c as T,R as F,u as j,r as o,j as t,d as r,F as u}from"./index.74f1084c.js";import{S as k,N as W,L as G}from"./nothing.af0134b3.js";import{g as I,b as O}from"./bilibili.8f203974.js";import{C as R}from"./CSSTransition.c8e2fc69.js";const _=e=>({type:N,data:e}),h=e=>({type:C,data:e}),z=e=>s=>{I().then(l=>{let c=l.filter(d=>d.title.indexOf(e)!=-1);s(_(c)),s(h(!1))})},A=a.div`
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
`,B=a.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,H=a.div`
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
`,P=a.div`
  
`,Q=a.div`
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
`,$=a.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${g["border-color"]};
`,q=a.div`
  position: relative;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${g["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .time {
    position: absolute;
    left: 288px;
  }
`,U=a.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,K=e=>{const s=j(),{enterLoading:l,suggestList:c}=e,{changeEnterLoadingDispatch:d,getSuggestListDispatch:f}=e,[n,m]=o.exports.useState(""),[x,y]=o.exports.useState(!1),[p,S]=o.exports.useState(!0);o.exports.useEffect(()=>{y(!0)},[]);const w=i=>{m(i)},L=()=>{S(!p)};o.exports.useEffect(()=>{n.trim()&&(d(!0),f(n))},[n]);const b=i=>{s(`/suggest/${i}`)},v=()=>r(u,{children:[r("div",{className:"title",children:[t("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),t("span",{onClick:()=>L(),children:p?"\u9690\u85CF":"\u663E\u793A"})]}),r("div",{className:"desc",style:p?{display:""}:{display:"none"},children:[t("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),t("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),t("span",{children:"\u5C0F\u84DD\u84DD"}),t("span",{children:"v5 wbg"})]})]}),D=()=>r(u,{children:[t("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),t($,{children:c.map(i=>r(q,{className:"item",onClick:()=>b(i.id),children:[t("img",{src:O}),t("span",{className:"title",children:i.title}),t("span",{className:"time",children:i.time})]},i.id))})]}),E=()=>t(Q,{children:r("div",{className:"info",children:[t("img",{src:W}),t("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return t(R,{in:x,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:r(A,{children:[r(B,{children:[t(k,{newQuery:n,handleQuery:w}),t("span",{onClick:()=>s(-1),children:"\u53D6\u6D88"})]}),t(H,{show:!n,children:!n&&v()}),t(P,{show:n,children:n&&(c.filter(i=>i.title.indexOf(n)!=-1).length>0?D():E())}),l&&t(U,{children:t(G,{})})]})})},J=e=>({enterLoading:e.search.enterLoading,suggestList:e.search.suggestList}),M=e=>({changeEnterLoadingDispatch(s){e(h(s))},getSuggestListDispatch(s){e(z(s))}});var tt=T(J,M)(F.memo(K));export{tt as default};
