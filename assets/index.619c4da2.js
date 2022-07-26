import{S as D,a as E,s as n,b as d,c as C,R as N,u as T,r as o,j as t,d as s,F}from"./index.b2ac7bc4.js";import{S as j,N as k,L as W}from"./nothing.4fd0d78b.js";import{g as G,b as I}from"./bilibili.a154ca96.js";import{C as O}from"./CSSTransition.56d55aaa.js";const R=e=>({type:E,data:e}),p=e=>({type:D,data:e}),_=()=>e=>{G().then(r=>{e(R(r)),e(p(!1))})},q=n.div`
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
`,z=n.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,A=n.div`
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
`,B=n.div`
  
`,P=n.div`
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
`,Q=n.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${d["border-color"]};
`,$=n.div`
  position: relative;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${d["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .time {
    position: absolute;
    left: 288px;
  }
`,H=n.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,U=e=>{const r=T(),{enterLoading:u,suggestList:l}=e,{changeEnterLoadingDispatch:g,getSuggestListDispatch:h}=e,[a,f]=o.exports.useState(""),[m,x]=o.exports.useState(!1),[c,y]=o.exports.useState(!0);o.exports.useEffect(()=>{x(!0)},[]);const S=i=>{f(i)},w=()=>{y(!c)};o.exports.useEffect(()=>{a.trim()&&(g(!0),h(a))},[a]);const L=i=>{r(`/suggest/${i}`)},b=()=>s(F,{children:[t("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),t(Q,{children:l.filter(i=>i.title.indexOf(a)!=-1).map(i=>s($,{className:"item",onClick:()=>L(i.id),children:[t("img",{src:I}),t("span",{className:"title",children:i.title}),t("span",{className:"time",children:i.time})]},i.id))})]}),v=()=>t(P,{children:s("div",{className:"info",children:[t("img",{src:k}),t("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return t(O,{in:m,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:s(q,{children:[s(z,{children:[t(j,{newQuery:a,handleQuery:S}),t("span",{onClick:()=>r(-1),children:"\u53D6\u6D88"})]}),s(A,{children:[s("div",{className:"title",children:[t("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),t("span",{onClick:()=>w(),children:c?"\u9690\u85CF":"\u663E\u793A"})]}),s("div",{className:"desc",style:c?{display:""}:{display:"none"},children:[t("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),t("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),t("span",{children:"\u5C0F\u84DD\u84DD"}),t("span",{children:"v5 wbg"})]})]}),t(B,{show:a,children:l.filter(i=>i.title.indexOf(a)!=-1).length>0?b():v()}),u&&t(H,{children:t(W,{})})]})})},J=e=>({enterLoading:e.search.enterLoading,suggestList:e.search.suggestList}),K=e=>({changeEnterLoadingDispatch(r){e(p(r))},getSuggestListDispatch(r){e(_())}});var Z=C(J,K)(N.memo(U));export{Z as default};
