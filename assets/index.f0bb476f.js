import{s as e,e as u,R as f,u as g,r as i,j as n,b as t}from"./index.ba32717f.js";import{S as h}from"./bilibili.8e18c158.js";import{G as m,a as x}from"./index.88df8cc5.js";import{C as y}from"./CSSTransition.69768efd.js";const v=e.div`
  background-color: rgba(55, 30, 60, 0.1);
`,b=e.div`
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
`,S=e.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
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
      bottom: -14px;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 15px;
      background-color: Silver;
    }
  }
`;e.div`
  
`;var L="./assets/empty.3071a740.png";const D=()=>t(S,{children:n("div",{className:"info",children:[t("img",{src:L}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),w=o=>{const r=g(),{goodsList:a,enterLoading:s}=o,{getGoodListDispatch:p}=o,[c,d]=i.exports.useState(!1);i.exports.useEffect(()=>{r("/shopping-cart")},[]),i.exports.useEffect(()=>{d(!0),p()},[]);const l=()=>t(m,{goodsList:a});return n(v,{children:[t(y,{in:c,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(b,{children:[t("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r("/vip")}),t("h2",{children:"\u8D2D\u7269\u8F66"})]})}),D(),s?t(h.Paragraph,{lineCount:25,animated:!0}):l()]})},C=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),E=o=>({getGoodListDispatch(){o(x())}});var z=u(C,E)(f.memo(w));export{z as default};
