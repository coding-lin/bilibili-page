import{s as e,c as d,R as g,u,r,a as i,j as t}from"./index.d6381697.js";import{S as h}from"./index.99511768.js";import{G as l,a as x}from"./index.ba68ad5a.js";const m=e.div`
  background-color: rgba(55, 30, 60, 0.1);
`,f=e.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  z-index: 999;
  i {
    float: left;
    font-size: 18px;
    margin-left: 10px;
    line-height: 50px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
  }
`,b=e.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
  .info {
    position: relative;
    width: 100%;
    height: 270px;
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
      width: 120px;
      height: 30px;
      margin-top: -60px;
      margin-left: -60px;
      padding: 4px;
      border-radius: 14px;
      font-size: 15px;
      background-color: Silver;
    }
  }
`;e.div`
  
`;var v="./assets/empty.3071a740.png";const L=()=>t(b,{children:i("div",{className:"info",children:[t("img",{src:v}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),D=o=>{const n=u(),{goodsList:a,enterLoading:s}=o,{getGoodListDispatch:p}=o;r.exports.useEffect(()=>{n("/shopping-cart")},[]),r.exports.useEffect(()=>{p()},[]);const c=()=>t(l,{goodsList:a});return i(m,{children:[i(f,{children:[t("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>n("/vip")}),t("h2",{children:"\u8D2D\u7269\u8F66"})]}),L(),s?t(h.Paragraph,{lineCount:25,animated:!0}):c()]})},w=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),y=o=>({getGoodListDispatch(){o(x())}});var G=d(w,y)(g.memo(D));export{G as default};
