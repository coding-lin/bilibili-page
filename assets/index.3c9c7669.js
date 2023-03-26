import{s as n,p as t,c as p,R as h,u,r as g,d as e,j as o}from"./index.7b28213b.js";import{S as l}from"./index.d0388abf.js";import{S as m,a as f,G as $}from"./index.e08d2cb9.js";import"./request.aa1e19be.js";import"./index.39eabe01.js";import"./index.f5d7bb3c.js";import"./bilibili.03841b80.js";const b=n.div`
  background-color: rgba(120, 120, 120, 0.1);
`,v=n.div`
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
`,x=n.div`
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
`,L=()=>o(x,{children:e("div",{className:"info",children:[o("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f061dc214.png",alt:""}),o("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),o("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),D=i=>{const r=u(),{goodsList:s,enterLoading:a}=i,{getGoodListDispatch:d}=i;g.exports.useEffect(()=>{d()},[]);const c=()=>o($,{goodsList:s});return e(b,{children:[e(v,{children:[o("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r(-1)}),o("h2",{children:"\u8D2D\u7269\u8F66"})]}),L(),a?o(l.Paragraph,{lineCount:30,animated:!0}):c(),o(m,{})]})},F=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),S=i=>({getGoodListDispatch(){i(f())}});var A=p(F,S)(h.memo(D));export{A as default};
