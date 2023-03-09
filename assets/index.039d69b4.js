import{s as n,p as i,b as s,u as d,d as e,j as t,L as a}from"./index.3e008df0.js";const c=n.div`
  width: 100%;
`,r=n.div`
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
`,g=n.div`
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
`,l=n.div`
  width: 100%;
  height: ${i(12)};
  background: ${s["background-color"]};
`,h=n.div`
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
`,m=()=>{const o=d();return e(c,{children:[e(r,{children:[t("i",{className:"iconfont icon-xiangzuojiantou",onClick:()=>o(-1)}),t("span",{children:"\u6D88\u606F"})]}),e(g,{children:[t(a,{to:"huifu",children:e("div",{className:"img-tab",children:[t("img",{src:"https://img-blog.csdnimg.cn/e115f843f24e4346a76a2fcd4a29f2fb.png"}),t("span",{children:"\u56DE\u590D\u6211\u7684"})]})}),t(a,{to:"@me",children:e("div",{className:"img-tab",children:[t("img",{src:"https://img-blog.csdnimg.cn/1a300e4637b044d09b5ed4141daf441d.png"}),t("span",{children:"@\u6211"})]})}),t(a,{to:"getzan",children:e("div",{className:"img-tab",children:[t("img",{src:"https://img-blog.csdnimg.cn/33b47241529541c883c51e7dcbd0128a.png"}),t("span",{children:"\u6536\u5230\u7684\u8D5E"})]})}),t(a,{to:"xitongtongzhi",children:e("div",{className:"img-tab",children:[t("img",{src:"https://img-blog.csdnimg.cn/f7506e190723451482def5ef209f05aa.png"}),t("span",{children:"\u7CFB\u7EDF\u901A\u77E5"})]})})]}),t(l,{}),t(h,{children:t("span",{children:"\u804A\u5929\u5217\u8868"})})]})};export{m as default};
