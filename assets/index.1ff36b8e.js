import{s as i,c,R as g,u,r,a as e,j as t}from"./index.9e179adf.js";import{S as h}from"./index.6409fb2e.js";import{G as l,a as x}from"./index.366b5ee3.js";const m=i.div`
  background-color: rgba(55, 30, 60, 0.1);
`,f=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: white;
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
  margin-top: 60px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
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
      bottom: -14px;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 15px;
      background-color: Silver;
    }
  }
`;i.div`
  
`;var v="./assets/empty.3071a740.png";const L=()=>t(b,{children:e("div",{className:"info",children:[t("img",{src:v}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),D=o=>{const n=u(),{goodsList:s,enterLoading:a}=o,{getGoodListDispatch:p}=o;r.exports.useEffect(()=>{n("/shopping-cart")},[]),r.exports.useEffect(()=>{p()},[]);const d=()=>t(l,{goodsList:s});return e(m,{children:[e(f,{children:[t("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>n("/vip")}),t("h2",{children:"\u8D2D\u7269\u8F66"})]}),L(),a?t(h.Paragraph,{lineCount:25,animated:!0}):d()]})},w=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),y=o=>({getGoodListDispatch(){o(x())}});var G=c(w,y)(g.memo(D));export{G as default};
