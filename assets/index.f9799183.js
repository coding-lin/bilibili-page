import{r as n,s as a,p as e,u as c,j as i,d as t,L as l,Q as p,T as r}from"./index.1455cb33.js";import{C as u}from"./CSSTransition.f8cee60b.js";function h(s){return n.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},s,{style:Object.assign({verticalAlign:"-0.125em"},s.style),className:["antd-mobile-icon",s.className].filter(Boolean).join(" ")}),n.exports.createElement("g",{id:"EditSOutline-EditSOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.exports.createElement("g",{id:"EditSOutline-\u7F16\u7EC4"},n.exports.createElement("rect",{id:"EditSOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),n.exports.createElement("path",{d:"M39.1558113,6.84476948 L39.1547876,6.84478452 C41.6150708,9.30533949 41.6150708,13.2945216 39.1547875,15.7550568 L14.2175882,40.6933641 C14.0205351,40.8899288 13.7535085,41 13.475183,41 L7.10015653,41 C5.94027729,41 5.00000168,40.0596889 5.00000168,38.8997532 L5.00000168,32.525535 C4.9995034,32.2468348 5.1098075,31.9793647 5.30661943,31.7820434 L30.2469685,6.84477025 C32.707296,4.38507671 36.6954838,4.38507671 39.1558113,6.84476948 Z M41.5764707,38 C41.8588237,38 42,38.1333332 42,38.4000001 L42,40.5999999 C42,40.8666668 41.8588237,41 41.5764707,41 L24.4235293,41 C24.1411763,41 24,40.8666668 24,40.5999999 L24,38.4000001 C24,38.1333332 24.1411763,38 24.4235293,38 L41.5764707,38 Z M28.172,13.371 L8.2730898,33.272167 C8.19433904,33.3510089 8.15023081,33.4579141 8.15023081,33.5693515 L8.15023081,37.4317018 C8.15023081,37.663779 8.33819467,37.8517506 8.57026108,37.8517506 L12.4303379,37.8517506 C12.5419214,37.8517506 12.6488431,37.8069757 12.7275092,37.7278363 L32.628,17.827 L28.172,13.371 Z M41.5555549,31 C41.8518518,31 42,31.1333332 42,31.4000001 L42,33.5999999 C42,33.8666668 41.8518518,34 41.5555549,34 L32.4444451,34 C32.1481482,34 32,33.8666668 32,33.5999999 L32,31.4000001 C32,31.1333332 32.1481482,31 32.4444451,31 L41.5555549,31 Z M32.607562,8.94503104 L32.4721022,9.07104573 L30.371,11.172 L34.827,15.628 L36.9275554,13.5288315 C38.1074041,12.3492947 38.1631188,10.4544078 37.0546144,9.20757614 L36.9286053,9.07316031 L36.9286254,9.07104573 C35.7488554,7.89144977 33.8540626,7.83619529 32.607562,8.94503104 Z",id:"EditSOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}const f=a.div`
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
  .edit-icon {
    position: absolute;
    top: ${e(50)};
    left: ${e(230)};
    font-size: ${e(20)};
    color: #fff;
  }
  .bg-wrapper {
    height: ${e(240)};
    background: url('https://img01.anzhiy.cn/useruploads/113/2023/04/04/642c42e76670b.png') no-repeat;
    background-size: cover;
  }
`,m=a.div`
  width: 100%;
  position: absolute;
  top: ${e(40)};
  display: flex;
  justify-content: space-around;
  color: #fff;
  img {
    width: ${e(90)};
    border-radius: 50%;
  }
`,g=a.div`
  width: 40%;
  height: ${e(40)};
  margin-top: ${e(10)};
  margin-left: ${e(-35)};
  display: flex;
  flex-direction: column;
  color: #fff;
  .author-name {
    margin-left: ${e(18)};
    font-size: ${e(17)};
    span {
      &.level {
        margin-left: ${e(30)};
        font-size: ${e(17)};
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: ${e(8)};
    margin-left: ${e(-58)};
    span {
      font-size: ${e(12)};
      border-radius: ${e(2)};
      border: ${e(2)} solid #fff;
      padding: 0 ${e(2)};
    }
  }
  .property {
    margin-top: ${e(8)};
    margin-left: ${e(-20)};
    flex-direction: row;
    span {
      font-size: ${e(12)};
      padding-left: ${e(25)}
    }
  }
`,v=a.div`
  span {
    padding: ${e(2)};
    font-size: ${e(15)};
    line-height: ${e(90)};
  }
  i {
    font-size: ${e(15)};
    line-height: ${e(90)};
  }
`,$=a.div`
  width: 100%;
  position: absolute;
  top: ${e(160)};
  display: flex;
  justify-content: space-around;
  color: #fff;
  span {
    font-size: ${e(18)};
  }
  p {
    font-size: ${e(14)};
  }
`,y=a.div`
  img {
    width: 100%;
    height: 100%;
  }
`,C=a.div`
  width: 100%;
  margin-top: ${e(10)};
  display: flex;
  justify-content: space-around;
  .img-tab {
    width: ${e(58)};
    height: ${e(58)};
    img {
      width: 100%;
      height: 100%;
    }
  }
`;function L(){const[s,o]=n.exports.useState(!1),d=c();return n.exports.useEffect(()=>{o(!0)},[]),i(u,{in:s,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:t(f,{children:[t("div",{className:"bg-wrapper",children:[i(l,{to:"/mine/space",children:t(m,{children:[i("img",{src:p,alt:""}),t(g,{children:[t("div",{className:"author-name",children:[i("span",{children:"dafenqi616"}),i("span",{className:"level",children:"Lv4"})]}),i("div",{className:"is-vip",children:i("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),t("div",{className:"property",children:[i("span",{children:"B\u5E01: 0.0"}),i("span",{children:"\u786C\u5E01: 650"})]})]}),t(v,{children:[i("span",{children:"\u7A7A\u95F4"}),i("i",{className:"iconfont icon-xiangyoujiantou"})]})]})}),i(h,{className:"edit-icon",onClick:()=>d("/mine/edit")}),t($,{children:[t("div",{children:[i("span",{children:"4"}),i("p",{children:"\u52A8\u6001"})]}),t("div",{children:[i("span",{children:"34"}),i("p",{children:"\u5173\u6CE8"})]}),t("div",{children:[i("span",{children:"1"}),i("p",{children:"\u7C89\u4E1D"})]})]})]}),i(y,{children:i("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/04/04/642c40e49fd33.png",alt:""})}),t(C,{children:[i("div",{className:"img-tab",onClick:()=>r.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:i("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5d8e.png",alt:""})}),i("div",{className:"img-tab",onClick:()=>r.show("\u529F\u80FD\u5F85\u5B9E\u73B0"),children:i("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b648a.png",alt:""})}),i(l,{to:"/mine/collect",children:i("div",{className:"img-tab",children:i("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5dd2.png",alt:""})})}),i(l,{to:"/mine/wait",children:i("div",{className:"img-tab",children:i("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b621e.png",alt:""})})})]})]})})}export{L as default};
