import{s as e,c as n,F as a,j as i,L as t,P as p}from"./index.e1297595.js";const r=e.div`
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
`,o=e.div`
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
`,s=e.div`
  span {
    font-size: 15px;
    line-height: 90px;
  }
  i {
    font-size: 16px;
    line-height: 90px;
  }
`,d=e.div`
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
`;function c(){return n(a,{children:[n(r,{children:[i(t,{to:"/mine",children:i("img",{src:p})}),n(o,{children:[n("div",{className:"author-name",children:[i("span",{children:"dafenqi616"}),i("span",{className:"level",children:"Lv4"})]}),i("div",{className:"is-vip",children:i("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),n("div",{className:"property",children:[i("span",{children:"B\u5E01: 0.0"}),i("span",{children:"\u786C\u5E01: 470"})]})]}),n(s,{children:[i("span",{children:"\u7A7A\u95F4"}),i("i",{className:"iconfont icon-xiangyoujiantou"})]})]}),n(d,{children:[n("div",{children:[i("span",{className:"data",children:"1"}),i("p",{children:"\u52A8\u6001"})]}),n("div",{children:[i("span",{children:"29"}),i("p",{children:"\u5173\u6CE8"})]}),n("div",{children:[i("span",{children:"0"}),i("p",{children:"\u7C89\u4E1D"})]})]})]})}export{c as default};
