import{s as o,c as u,R as m,u as f,r as n,d as e,j as t}from"./index.99c4a17e.js";import{S as h}from"./index.15d9af0e.js";import{G as g,a as x}from"./index.370815c4.js";import{C as y}from"./CSSTransition.2550a176.js";import"./bilibili.a58637c1.js";import"./index.f4072547.js";import"./index.db266edb.js";const v=o.div`
  background-color: rgba(120, 120, 120, 0.1);
`,b=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: 20px;
    top: 14px;
    left: 14px;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
  }
  /* CSSTransition 过度类型给children  */
  &.fly-enter,&.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-apply-active {
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0,0,0)
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
`,S=o.div`
  width: 100%;
  height: 264px;
  margin-top: 60px;
  margin-bottom: 26px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.06);
  .info {
    position: relative;
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 40%;
      height: 60%;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      left: -50%;
      right: -50%;
      bottom: 36px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 14px;
      background-color: Silver;
    }
  }
`;o.div`
  
`;var L="./assets/empty.3071a740.png";const D=()=>t(S,{children:e("div",{className:"info",children:[t("img",{src:L}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),w=i=>{const r=f(),{goodsList:a,enterLoading:s}=i,{getGoodListDispatch:p}=i,[d,c]=n.exports.useState(!1);n.exports.useEffect(()=>{c(!0),p()},[]);const l=()=>t(g,{goodsList:a});return e(v,{children:[t(y,{in:d,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:e(b,{children:[t("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r("/vip")}),t("h2",{children:"\u8D2D\u7269\u8F66"})]})}),D(),s?t(h.Paragraph,{lineCount:25,animated:!0}):l()]})},C=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),F=i=>({getGoodListDispatch(){i(x())}});var P=u(C,F)(m.memo(w));export{P as default};
