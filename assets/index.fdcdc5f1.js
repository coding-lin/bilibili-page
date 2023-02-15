import{s as e,p as t,c as g,R as p,u as h,r as u,d as n,j as i}from"./index.e1a356e7.js";import{S as l}from"./index.33942f2f.js";import{a as m,G as f}from"./index.a37d5db0.js";import"./bilibili.43391c33.js";import"./index.fde44deb.js";import"./index.da93a101.js";const $=e.div`
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
  
`;const x=()=>i(v,{children:n("div",{className:"info",children:[i("img",{src:"https://img-blog.csdnimg.cn/0ce10301028a4da282eb8a9eee3bbd8b.png"}),i("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),i("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),L=o=>{const r=h(),{goodsList:s,enterLoading:a}=o,{getGoodListDispatch:d}=o;u.exports.useEffect(()=>{d()},[]);const c=()=>i(f,{goodsList:s});return n($,{children:[n(b,{children:[i("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>r(-1)}),i("h2",{children:"\u8D2D\u7269\u8F66"})]}),x(),a?i(l.Paragraph,{lineCount:30,animated:!0}):c()]})},D=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),F=o=>({getGoodListDispatch(){o(m())}});var E=g(D,F)(p.memo(L));export{E as default};
