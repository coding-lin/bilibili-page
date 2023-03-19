import{s as n,p as i,r as a,j as t,d as e,L as o}from"./index.e03f2702.js";import{C as l}from"./CSSTransition.c710c6fd.js";const d=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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
`,c=n.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: ${i(90)};
  img {
    margin-top: ${i(18)};
    width: ${i(54)};
    height: ${i(54)};
    border-radius: 50%;
  }
`,p=n.div`
  width: 40%;
  height: ${i(40)};
  margin-top: ${i(8)};
  display: flex;
  flex-direction: column;
  .author-name {
    font-size: ${i(16)};
    span {
      padding-left: ${i(6)};
      &.level {
        font-size: ${i(18)};
        font-family: sans-serif;
        font-weight: 600;
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: ${i(4)};
    span {
      font-size: ${i(12)};
      font-weight: 300;
      padding: ${i(2)};
      border-radius: ${i(2)};
      border: ${i(2)} solid pink;
    }
  }
  .property {
    margin-top: ${i(4)};
    flex-direction: row;
    span {
      font-size: ${i(13)};
      padding-left: ${i(6)};
    }
  }
`,h=n.div`
  span {
    padding: ${i(2)};
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
  i {
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
`,f=n.div`
  width: 100%;
  position: relative;
  display: flex;
  height: ${i(60)};
  justify-content: space-around;
  background-color: #fff;
  div:first-child:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 33%;
    top: ${i(14)};
    width: ${i(1)};
    height: ${i(30)};
    background-color: gray;
  }
  div:nth-child(2):after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 66%;
    top: ${i(14)};
    width: ${i(1)};
    height: ${i(30)};
    background-color: gray;
  }
  span {
    font-size: ${i(18)};
  }
  p {
    font-size: ${i(14)};
  }
`,u=n.div`
  width: 100%;
  img {
    width: 100%;
  }
`;function $(){const[r,s]=a.exports.useState(!1);return a.exports.useEffect(()=>{s(!0)},[]),t(l,{in:r,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:e(d,{children:[e(c,{children:[t(o,{to:"/mine",children:t("img",{src:"https://s2.xptou.com/2023/03/09/640a00d322ee3.jpeg"})}),e(p,{children:[e("div",{className:"author-name",children:[t("span",{children:"dafenqi616"}),t("span",{className:"level",children:"Lv4"})]}),t("div",{className:"is-vip",children:t("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),e("div",{className:"property",children:[t("span",{children:"B\u5E01: 0.0"}),t("span",{children:"\u786C\u5E01: 470"})]})]}),e(h,{children:[t("span",{children:"\u7A7A\u95F4"}),t("i",{className:"iconfont icon-xiangyoujiantou"})]})]}),e(f,{children:[e("div",{children:[t("span",{className:"data",children:"1"}),t("p",{children:"\u52A8\u6001"})]}),e("div",{children:[t("span",{children:"30"}),t("p",{children:"\u5173\u6CE8"})]}),e("div",{children:[t("span",{children:"0"}),t("p",{children:"\u7C89\u4E1D"})]})]}),t(u,{children:t("img",{src:"https://s2.xptou.com/2023/03/09/640a015112c5a.png"})})]})})}export{$ as default};
