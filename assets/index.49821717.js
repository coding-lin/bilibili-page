import{s as e,a as n,F as a,j as i,L as p,P as t}from"./index.2f4b6a6d.js";const d=e.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  img {
    margin-top: 18px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`,r=e.div`
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
    font-size: 16px;
    line-height: 80px;
  }
  i {
    font-size: 20px;
  }
`,o=e.div`
  width: 100%;
  display: flex;
  height: 60px;
  padding-top: 10px;
  justify-content: space-around;
  background-color: #fff;
  div:not(:last-child):after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 100px;
    margin-left: 64px;
    width: 2px;
    height: 28px;
    background: gray;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;function c(){return n(a,{children:[n(d,{children:[i(p,{to:"/mine",children:i("img",{src:t})}),n(r,{children:[n("div",{className:"author-name",children:[i("span",{children:"dafenqi616"}),i("span",{className:"level",children:"Lv4"})]}),i("div",{className:"is-vip",children:i("span",{children:"\u6B63\u5F0F\u4F1A\u5458"})}),n("div",{className:"property",children:[i("span",{children:"B\u5E01: 0.0"}),i("span",{children:"\u786C\u5E01: 470"})]})]}),n(s,{children:[i("span",{children:"\u7A7A\u95F4"}),i("i",{className:"iconfont icon-dongtai"})]})]}),n(o,{children:[n("div",{children:[i("span",{className:"data",children:"1"}),i("p",{children:"\u52A8\u6001"})]}),n("div",{children:[i("span",{children:"29"}),i("p",{children:"\u5173\u6CE8"})]}),n("div",{children:[i("span",{children:"0"}),i("p",{children:"\u7C89\u4E1D"})]})]})]})}export{c as default};
