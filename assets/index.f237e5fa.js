import{s as e,p as i,r as s,j as t,d as n,L as r,O as d,T as a}from"./index.d3c0f3ad.js";import{C as c}from"./CSSTransition.eef24a31.js";const h=e.div`
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
`,p=e.div`
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
`,u=e.div`
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
`,f=e.div`
  span {
    padding: ${i(2)};
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
  i {
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
`,g=e.div`
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
`,m=e.div`
  width: 100%;
  img {
    width: 100%;
  }
`,$=e.div`
  width: 100%;
  margin-top: ${i(10)};
  display: flex;
  justify-content: space-around;
  .img-tab {
    width: ${i(58)};
    height: ${i(58)};
    img {
      width: 100%;
      height: 100%;
    }
  }
`;function b(){const[l,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{o(!0)},[]),t(c,{in:l,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(h,{children:[t(r,{to:"/space",children:n(p,{children:[t("img",{src:d,alt:""}),n(u,{children:[n("div",{className:"author-name",children:[t("span",{children:"dafenqi616"}),t("span",{className:"level",children:"Lv4"})]}),t("div",{className:"is-vip",children:t("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),n("div",{className:"property",children:[t("span",{children:"B\u5E01: 0.0"}),t("span",{children:"\u786C\u5E01: 470"})]})]}),n(f,{children:[t("span",{children:"\u7A7A\u95F4"}),t("i",{className:"iconfont icon-xiangyoujiantou"})]})]})}),n(g,{children:[n("div",{children:[t("span",{children:"4"}),t("p",{children:"\u52A8\u6001"})]}),n("div",{children:[t("span",{children:"34"}),t("p",{children:"\u5173\u6CE8"})]}),n("div",{children:[t("span",{children:"1"}),t("p",{children:"\u7C89\u4E1D"})]})]}),t(m,{children:t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416efc82bb64.png",alt:""})}),n($,{children:[t("div",{className:"img-tab",onClick:()=>a.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5d8e.png",alt:""})}),t("div",{className:"img-tab",onClick:()=>a.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b648a.png",alt:""})}),t(r,{to:"/collect",children:t("div",{className:"img-tab",children:t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5dd2.png",alt:""})})}),t("div",{className:"img-tab",onClick:()=>a.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b621e.png",alt:""})})]})]})})}export{b as default};
