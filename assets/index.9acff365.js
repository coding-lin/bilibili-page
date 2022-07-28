import{s as i,c as d,R as c,u as g,r as u,d as e,j as t}from"./index.2db3913f.js";import{S as h}from"./index.979794c1.js";import{G as l,a as m}from"./index.0d7c6dfc.js";import"./bilibili.c4361804.js";import"./index.6764733a.js";import"./index.84359e53.js";const x=i.div`
  background-color: rgba(120, 120, 120, 0.1);
`,f=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: 20px;
    top: 14px;
    left: 14px;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
  }
`,b=i.div`
  width: 100%;
  height: 264px;
  margin-top: 60px;
  margin-bottom: 26px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.06);
  .info {
    position: relative;
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 40%;
      height: 60%;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      left: -50%;
      right: -50%;
      bottom: 36px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 14px;
      background-color: Silver;
    }
  }
`;i.div`
  
`;var v="./assets/empty.3071a740.png";const L=()=>t(b,{children:e("div",{className:"info",children:[t("img",{src:v}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),D=o=>{const n=g(),{goodsList:r,enterLoading:s}=o,{getGoodListDispatch:a}=o;u.exports.useEffect(()=>{a()},[]);const p=()=>t(l,{goodsList:r});return e(x,{children:[e(f,{children:[t("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>n(-1)}),t("h2",{children:"\u8D2D\u7269\u8F66"})]}),L(),s?t(h.Paragraph,{lineCount:25,animated:!0}):p()]})},y=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),F=o=>({getGoodListDispatch(){o(m())}});var S=d(y,F)(c.memo(D));export{S as default};
