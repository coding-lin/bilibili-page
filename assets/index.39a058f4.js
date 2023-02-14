import{s as t,p as i,r as a,j as e,d as n,L as o}from"./index.e8dfbffc.js";import{C as d}from"./CSSTransition.3470438a.js";const l=t.div`
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
`,c=t.div`
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
`,p=t.div`
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
`,h=t.div`
  span {
    padding: ${i(2)};
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
  i {
    font-size: ${i(15)};
    line-height: ${i(90)};
  }
`,f=t.div`
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
`,u=t.div`
  width: 100%;
  img {
    width: 100%;
  }
`;function $(){const[r,s]=a.exports.useState(!1);return a.exports.useEffect(()=>{s(!0)},[]),e(d,{in:r,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:n(l,{children:[n(c,{children:[e(o,{to:"/mine",children:e("img",{src:"https://img-blog.csdnimg.cn/9ae699d84c764d2593ee5bed74976b77.jpeg"})}),n(p,{children:[n("div",{className:"author-name",children:[e("span",{children:"dafenqi616"}),e("span",{className:"level",children:"Lv4"})]}),e("div",{className:"is-vip",children:e("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),n("div",{className:"property",children:[e("span",{children:"B\u5E01: 0.0"}),e("span",{children:"\u786C\u5E01: 470"})]})]}),n(h,{children:[e("span",{children:"\u7A7A\u95F4"}),e("i",{className:"iconfont icon-xiangyoujiantou"})]})]}),n(f,{children:[n("div",{children:[e("span",{className:"data",children:"1"}),e("p",{children:"\u52A8\u6001"})]}),n("div",{children:[e("span",{children:"30"}),e("p",{children:"\u5173\u6CE8"})]}),n("div",{children:[e("span",{children:"0"}),e("p",{children:"\u7C89\u4E1D"})]})]}),e(u,{children:e("img",{src:"https://img-blog.csdnimg.cn/13d2d42411f7407cb0cbfc95176d9500.png"})})]})})}export{$ as default};
