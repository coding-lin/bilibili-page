import{r as n,s as a,p as i,u as d,d as t,F as c,j as e,L as r,Q as h,T as l}from"./index.cb4d089d.js";import{C as p}from"./CSSTransition.5f79f1eb.js";function u(s){return n.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},s,{style:Object.assign({verticalAlign:"-0.125em"},s.style),className:["antd-mobile-icon",s.className].filter(Boolean).join(" ")}),n.exports.createElement("g",{id:"EditSOutline-EditSOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.exports.createElement("g",{id:"EditSOutline-\u7F16\u7EC4"},n.exports.createElement("rect",{id:"EditSOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),n.exports.createElement("path",{d:"M39.1558113,6.84476948 L39.1547876,6.84478452 C41.6150708,9.30533949 41.6150708,13.2945216 39.1547875,15.7550568 L14.2175882,40.6933641 C14.0205351,40.8899288 13.7535085,41 13.475183,41 L7.10015653,41 C5.94027729,41 5.00000168,40.0596889 5.00000168,38.8997532 L5.00000168,32.525535 C4.9995034,32.2468348 5.1098075,31.9793647 5.30661943,31.7820434 L30.2469685,6.84477025 C32.707296,4.38507671 36.6954838,4.38507671 39.1558113,6.84476948 Z M41.5764707,38 C41.8588237,38 42,38.1333332 42,38.4000001 L42,40.5999999 C42,40.8666668 41.8588237,41 41.5764707,41 L24.4235293,41 C24.1411763,41 24,40.8666668 24,40.5999999 L24,38.4000001 C24,38.1333332 24.1411763,38 24.4235293,38 L41.5764707,38 Z M28.172,13.371 L8.2730898,33.272167 C8.19433904,33.3510089 8.15023081,33.4579141 8.15023081,33.5693515 L8.15023081,37.4317018 C8.15023081,37.663779 8.33819467,37.8517506 8.57026108,37.8517506 L12.4303379,37.8517506 C12.5419214,37.8517506 12.6488431,37.8069757 12.7275092,37.7278363 L32.628,17.827 L28.172,13.371 Z M41.5555549,31 C41.8518518,31 42,31.1333332 42,31.4000001 L42,33.5999999 C42,33.8666668 41.8518518,34 41.5555549,34 L32.4444451,34 C32.1481482,34 32,33.8666668 32,33.5999999 L32,31.4000001 C32,31.1333332 32.1481482,31 32.4444451,31 L41.5555549,31 Z M32.607562,8.94503104 L32.4721022,9.07104573 L30.371,11.172 L34.827,15.628 L36.9275554,13.5288315 C38.1074041,12.3492947 38.1631188,10.4544078 37.0546144,9.20757614 L36.9286053,9.07316031 L36.9286254,9.07104573 C35.7488554,7.89144977 33.8540626,7.83619529 32.607562,8.94503104 Z",id:"EditSOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}const m=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${i(280)};
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
  .edit-icon {
    position: absolute;
    top: ${i(32)};
    right: ${i(148)};
    font-size: ${i(20)};
    color: gray;
  }
`,g=a.div`
  position: relative;
  width: 100%;
  height: ${i(90)};
  margin-top: ${i(30)};
  background: #fff;
  .avatar {
    position: absolute;
    width: ${i(75)};
    height: ${i(75)};
    margin: 0 ${i(10)};
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`,f=a.div`
  margin-left: ${i(100)};
  width: ${i(150)};
  height: ${i(90)};
  .user {
    margin-right: ${i(-28)};
    span {
      font-size: ${i(17)};
    }
    >:nth-child(2) {
      margin-left: ${i(36)};
      background: orange;
      color: #fff;
    }
  }
  .isvip {
    margin-top: ${i(12)};
    margin-right: ${i(70)};
    span {
      padding: 0 ${i(2)};
      border: 0.05rem solid rgb(232, 138, 173);
      font-size: ${i(12)};
      border-radius: ${i(2)};
      color: #000;
    }
  }
  .coin {
    margin-top: ${i(12)};
    span {
      padding-right: ${i(10)};
      color: #000;
    }
  }
  .space {
    position: absolute;
    right: ${i(14)};
    top: ${i(36)};
    span {
      font-size: ${i(12)};
    }
    i {
      font-size: ${i(10)};
    }
  }
`,v=a.div`
  width: 100%;
  margin-top: ${i(20)};
  display: flex;
  justify-content: space-around;
  color: #000;
  span {
    font-size: ${i(18)};
  }
  p {
    font-size: ${i(14)};
  }
`,$=a.div`
  img {
    margin: 0 auto;
    margin-top: ${i(30)};
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: ${i(8)};
  }
`,y=a.div`
  width: 100%;
  margin-top: ${i(290)};
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
`;function w(){const[s,o]=n.exports.useState(!1);return d(),n.exports.useEffect(()=>{o(!0)},[]),t(c,{children:[e(p,{in:s,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:t(m,{children:[e(r,{to:"/mine/space",children:t(g,{children:[e("div",{className:"avatar",children:e("img",{src:h,alt:""})}),t(f,{children:[t("div",{className:"user",children:[e("span",{children:"dafenqi616"}),e("span",{children:"Lv4"})]}),e("div",{className:"isvip",children:e("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),t("div",{className:"coin",children:[e("span",{children:"B\u5E01\uFF1A0.0"}),e("span",{children:"\u786C\u5E01\uFF1A652"})]}),t("div",{className:"space",children:[e("span",{children:"\u7A7A\u95F4 "}),e("i",{className:"iconfont icon-xiangyoujiantou"})]})]})]})}),e(r,{to:"/mine/edit",children:e(u,{className:"edit-icon"})}),t(v,{children:[t("div",{children:[e("span",{children:"4"}),e("p",{children:"\u52A8\u6001"})]}),t("div",{children:[e("span",{children:"34"}),e("p",{children:"\u5173\u6CE8"})]}),t("div",{children:[e("span",{children:"1"}),e("p",{children:"\u7C89\u4E1D"})]})]}),e($,{children:e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/04/05/642d0029c7ca6.png",alt:""})})]})}),t(y,{children:[e("div",{className:"img-tab",onClick:()=>l.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5d8e.png",alt:""})}),e("div",{className:"img-tab",onClick:()=>l.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b648a.png",alt:""})}),e(r,{to:"/mine/collect",children:e("div",{className:"img-tab",children:e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5dd2.png",alt:""})})}),e(r,{to:"/mine/wait",children:e("div",{className:"img-tab",children:e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b621e.png",alt:""})})})]})]})}export{w as default};
