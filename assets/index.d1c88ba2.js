import{s as e,p as t,c as p,R as h,u,r as g,d as n,j as o}from"./index.3e008df0.js";import{S as l}from"./index.e4f9f999.js";import{a as m,G as f}from"./index.bf5b1232.js";import"./bilibili.63d36b3a.js";import"./index.d890454f.js";import"./index.d029c0ec.js";const $=e.div`
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
  
`;const x=()=>o(v,{children:n("div",{className:"info",children:[o("img",{src:"https://s2.xptou.com/2023/03/10/640a02953a7de.png"}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),L=i=>{const r=u(),{goodsList:s,enterLoading:a}=i,{getGoodListDispatch:d}=i;g.exports.useEffect(()=>{d()},[]);const c=()=>o(f,{goodsList:s});return n($,{children:[n(b,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),x(),a?o(l.Paragraph,{lineCount:30,animated:!0}):c()]})},D=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),F=i=>({getGoodListDispatch(){i(m())}});var E=p(D,F)(h.memo(L));export{E as default};
