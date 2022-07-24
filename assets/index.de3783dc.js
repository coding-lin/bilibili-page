import{s as n,r as t,c as i,j as e,L as s,P as o}from"./index.6450a8b9.js";import{C as p}from"./CSSTransition.3ff548eb.js";const l=n.div`
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
`,d=n.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  img {
    margin-top: 18px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`,c=n.div`
  width: 40%;
  height: 40px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  .author-name {
    font-size: 16px;
    span {
      padding-left: 6px;
      &.level {
        /* background-color: orange; */
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: 4px;
    span {
      font-size: 12px;
      font-weight: 300;
      padding: 2px;
      border-radius: 2px;
      border: 2px solid pink;
    }
  }
  .property {
    margin-top: 4px;
    flex-direction: row;
    span {
      padding-left: 6px;
    }
  }
`,h=n.div`
  span {
    font-size: 15px;
    line-height: 90px;
  }
  i {
    font-size: 16px;
    line-height: 90px;
  }
`,f=n.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 60px;
  /* margin-top: 10px; */
  justify-content: space-around;
  background-color: #fff;
  div:not(:last-child):after {
    content: '';
    display: inline-block;
    position: absolute;
    margin-left: 64px;
    top: 14px;
    width: 2px;
    height: 30px;
    background-color: gray;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`,x=n.div`
  width: 100%;
  img {
    width: 100%;
  }
`;var u="./assets/bigvip.8f696188.png";function v(){const[a,r]=t.exports.useState(!1);return t.exports.useEffect(()=>{r(!0)},[]),i(p,{in:a,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:e(l,{children:[e(d,{children:[i(s,{to:"/mine",children:i("img",{src:o})}),e(c,{children:[e("div",{className:"author-name",children:[i("span",{children:"dafenqi616"}),i("span",{className:"level",children:"Lv4"})]}),i("div",{className:"is-vip",children:i("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),e("div",{className:"property",children:[i("span",{children:"B\u5E01: 0.0"}),i("span",{children:"\u786C\u5E01: 470"})]})]}),e(h,{children:[i("span",{children:"\u7A7A\u95F4"}),i("i",{className:"iconfont icon-xiangyoujiantou"})]})]}),e(f,{children:[e("div",{children:[i("span",{className:"data",children:"1"}),i("p",{children:"\u52A8\u6001"})]}),e("div",{children:[i("span",{children:"30"}),i("p",{children:"\u5173\u6CE8"})]}),e("div",{children:[i("span",{children:"0"}),i("p",{children:"\u7C89\u4E1D"})]})]}),i(x,{children:i("img",{src:u})})]})})}export{v as default};
