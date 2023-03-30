import{s as a,p as i,b as o,u as r,d as n,j as t,L as e}from"./index.2828fb23.js";const d=a.div`
  width: 100%;
`,l=a.div`
  position: fixed;
  width: 100%;
  height: ${i(60)};
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: ${i(1)} solid rgba(50, 50, 50, 0.25);
  i {
    font-size: ${i(20)};
    position: absolute;
    top: ${i(20)};
    left: ${i(14)};
  }
  span {
    float: left;
    font-size: ${i(18)};
    font-weight: 600;
    margin-left: ${i(50)};
    line-height: ${i(60)};
  }
`,h=a.div`
  width: 100%;
  margin-top: ${i(62)};
  height: ${i(75)};
  display: flex;
  justify-content: space-around;
  border-bottom: ${i(1)} solid rgba(50, 50, 50, 0.08);
  .img-tab {
    width: ${i(50)};
    height: ${i(50)};
    img {
      width: 100%;
      height: 100%;
    }
    span {
      width: ${i(50)};
      font-size: ${i(12)};
      color: #000;
    }
  }
`,c=a.div`
  width: 100%;
  height: ${i(12)};
  background: ${o["background-color"]};
`,g=a.div`
  width: 100%;
  background: #fff;
  height: ${i(40)};
  border-top: ${i(1)} solid rgba(50, 50, 50, 0.08);
  border-bottom: ${i(1)} solid rgba(50, 50, 50, 0.08);
  span {
    font-size: ${i(16)};
    color: #000;
    line-height: ${i(40)};
    float: left;
    margin-left: ${i(10)};
  }
`,p=()=>{const s=r();return n(d,{children:[n(l,{children:[t("i",{className:"iconfont icon-xiangzuojiantou",onClick:()=>s(-1)}),t("span",{children:"\u6D88\u606F"})]}),n(h,{children:[t(e,{to:"huifu",children:n("div",{className:"img-tab",children:[t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f1422340c.png",alt:""}),t("span",{children:"\u56DE\u590D\u6211\u7684"})]})}),t(e,{to:"@me",children:n("div",{className:"img-tab",children:[t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f142233f4.png",alt:""}),t("span",{children:"@\u6211"})]})}),t(e,{to:"getzan",children:n("div",{className:"img-tab",children:[t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f142244f1.png",alt:""}),t("span",{children:"\u6536\u5230\u7684\u8D5E"})]})}),t(e,{to:"xitongtongzhi",children:n("div",{className:"img-tab",children:[t("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f14224347.png",alt:""}),t("span",{children:"\u7CFB\u7EDF\u901A\u77E5"})]})})]}),t(c,{}),t(g,{children:t("span",{children:"\u804A\u5929\u5217\u8868"})})]})};export{p as default};
