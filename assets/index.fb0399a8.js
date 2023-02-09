import{s as t,p as i,r as a,j as e,d as n,L as o,P as l}from"./index.97c6d8ba.js";import{C as d}from"./CSSTransition.15a4d9ae.js";const c=t.div`
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
`,p=t.div`
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
`,h=t.div`
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
`,f=t.div`
  span {
    padding: ${i(2)};
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
  i {
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
`,u=t.div`
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
`,g=t.div`
  width: 100%;
  img {
    width: 100%;
  }
`;var m="./assets/bigvip.8f696188.png";function v(){const[r,s]=a.exports.useState(!1);return a.exports.useEffect(()=>{s(!0)},[]),e(d,{in:r,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(c,{children:[n(p,{children:[e(o,{to:"/mine",children:e("img",{src:l})}),n(h,{children:[n("div",{className:"author-name",children:[e("span",{children:"dafenqi616"}),e("span",{className:"level",children:"Lv4"})]}),e("div",{className:"is-vip",children:e("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),n("div",{className:"property",children:[e("span",{children:"B\u5E01: 0.0"}),e("span",{children:"\u786C\u5E01: 470"})]})]}),n(f,{children:[e("span",{children:"\u7A7A\u95F4"}),e("i",{className:"iconfont icon-xiangyoujiantou"})]})]}),n(u,{children:[n("div",{children:[e("span",{className:"data",children:"1"}),e("p",{children:"\u52A8\u6001"})]}),n("div",{children:[e("span",{children:"30"}),e("p",{children:"\u5173\u6CE8"})]}),n("div",{children:[e("span",{children:"0"}),e("p",{children:"\u7C89\u4E1D"})]})]}),e(g,{children:e("img",{src:m})})]})})}export{v as default};
