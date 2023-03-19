import{s as o,p as i,b as s,u as r,d as a,j as t,L as e}from"./index.e03f2702.js";const d=o.div`
  width: 100%;
`,c=o.div`
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
`,h=o.div`
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
`,l=o.div`
  width: 100%;
  height: ${i(12)};
  background: ${s["background-color"]};
`,g=o.div`
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
`,p=()=>{const n=r();return a(d,{children:[a(c,{children:[t("i",{className:"iconfont icon-xiangzuojiantou",onClick:()=>n(-1)}),t("span",{children:"\u6D88\u606F"})]}),a(h,{children:[t(e,{to:"huifu",children:a("div",{className:"img-tab",children:[t("img",{src:"https://s2.xptou.com/2023/03/10/640aa6442e4cf.png"}),t("span",{children:"\u56DE\u590D\u6211\u7684"})]})}),t(e,{to:"@me",children:a("div",{className:"img-tab",children:[t("img",{src:"https://s2.xptou.com/2023/03/10/640aa66763828.png"}),t("span",{children:"@\u6211"})]})}),t(e,{to:"getzan",children:a("div",{className:"img-tab",children:[t("img",{src:"https://s2.xptou.com/2023/03/10/640aa68784544.png"}),t("span",{children:"\u6536\u5230\u7684\u8D5E"})]})}),t(e,{to:"xitongtongzhi",children:a("div",{className:"img-tab",children:[t("img",{src:"https://s2.xptou.com/2023/03/10/640aa6a478853.png"}),t("span",{children:"\u7CFB\u7EDF\u901A\u77E5"})]})})]}),t(l,{}),t(g,{children:t("span",{children:"\u804A\u5929\u5217\u8868"})})]})};export{p as default};
