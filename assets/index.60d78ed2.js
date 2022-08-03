import{s as e,p as t,c as p,R as g,u as h,r as u,d as n,j as o}from"./index.fcbd6b8e.js";import{S as l}from"./index.4fa26057.js";import{G as m,a as f}from"./index.85c22671.js";import"./bilibili.a84fb117.js";import"./index.0e67cb33.js";import"./index.61134ec5.js";const $=e.div`
  background-color: rgba(120, 120, 120, 0.1);
`,b=e.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${t(60)};
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: ${t(20)};
    top: ${t(20)};
    left: ${t(18)};
  }
  h2 {
    font-size: ${t(18)};
    font-weight: 600;
    line-height: ${t(60)};
  }
`,v=e.div`
  width: 100%;
  height: ${t(264)};
  margin-top: ${t(60)};
  margin-bottom: ${t(26)};
  border-bottom: ${t(1)} solid rgba(100, 100, 100, 0.10);
  .info {
    position: relative;
    width: 100%;
    height: ${t(276)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${t(152)};
      height: ${t(165)};
      margin: 0 auto;
    }
    p {
      font-size: ${t(14)};
      left: -50%;
      right: -50%;
      bottom: ${t(36)};
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: ${t(110)};
      height: ${t(26)};
      line-height: ${t(26)};
      margin-top: ${t(-55)};
      margin-left: ${t(-55)};
      border-radius: ${t(14)};
      font-size: ${t(14)};
      background-color: Silver;
    }
  }
`;e.div`
  
`;var x="./assets/empty.3071a740.png";const L=()=>o(v,{children:n("div",{className:"info",children:[o("img",{src:x}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),D=i=>{const r=h(),{goodsList:s,enterLoading:a}=i,{getGoodListDispatch:d}=i;u.exports.useEffect(()=>{d()},[]);const c=()=>o(m,{goodsList:s});return n($,{children:[n(b,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),L(),a?o(l.Paragraph,{lineCount:25,animated:!0}):c()]})},y=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),F=i=>({getGoodListDispatch(){i(f())}});var S=p(y,F)(g.memo(D));export{S as default};
