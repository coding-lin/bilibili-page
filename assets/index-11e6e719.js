import{s as a,p as i,b as n,u as o,d as e,j as t}from"./index-1f87f03b.js";const r=a.div`
  width: 100%;
`,d=a.div`
  position: fixed;
  width: 100%;
  height: ${i(60)};
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: ${i(1)} solid #eee;
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
`,l=a.div`
  width: 100%;
  margin-top: ${i(61)};
  height: ${i(75)};
  display: flex;
  justify-content: space-around;
  border-bottom: ${i(1)} solid #eee;
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
  background: ${n["background-color"]};
`,h=a.div`
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
`,p=()=>{const s=o();return e(r,{children:[e(d,{children:[t("i",{className:"iconfont icon-xiangzuojiantou",onClick:()=>s(-1)}),t("span",{children:"消息"})]}),e(l,{children:[e("div",{className:"img-tab",children:[t("img",{src:"https://img01.anheyu.com/useruploads/113/2023/03/19/6416f1422340c.png",alt:""}),t("span",{children:"回复我的"})]}),e("div",{className:"img-tab",children:[t("img",{src:"https://img01.anheyu.com/useruploads/113/2023/03/19/6416f142233f4.png",alt:""}),t("span",{children:"@我"})]}),e("div",{className:"img-tab",children:[t("img",{src:"https://img01.anheyu.com/useruploads/113/2023/03/19/6416f142244f1.png",alt:""}),t("span",{children:"收到的赞"})]}),e("div",{className:"img-tab",children:[t("img",{src:"https://img01.anheyu.com/useruploads/113/2023/03/19/6416f14224347.png",alt:""}),t("span",{children:"系统通知"})]})]}),t(c,{}),t(h,{children:t("span",{children:"聊天列表"})})]})};export{p as default};