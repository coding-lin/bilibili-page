import{s as i,R as r,u as a,r as p,c as e,j as t}from"./index.9b906ccd.js";const s=i.div`
  
`,c=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: white;
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
`,d=i.div`
  width: 100%;
  margin-top: 50px;
  background-color: rgba(55, 30, 60, 0.06);
  border-bottom: 1px solid rgba(50, 50, 50, 0.12);
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
`,l=i.div`
  
`;var h="./assets/empty.3071a740.png";const u=()=>t(d,{children:e("div",{className:"info",children:[t("img",{src:h}),t("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),t("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),g=()=>t(l,{}),x=({goods:o})=>{const n=a();return p.exports.useEffect(()=>{n("/shopping-cart")},[]),e(s,{children:[e(c,{children:[t("i",{className:"iconfont icon-xiangyoujiantou",onClick:()=>n("/vip")}),t("h2",{children:"\u8D2D\u7269\u8F66"})]}),o?g():u()]})};var m=r.memo(x);export{m as default};
