import{s as n,p as t,c as p,R as l,u as g,r as m,d as i,j as e,P as f,i as $,T as b}from"./index.be744900.js";import{S as D}from"./index.357c5045.js";import{G as v,S as x,a as F}from"./index.9443c5f9.js";import"./request.4600e0a8.js";import"./index.06c47a3a.js";import"./index.220392c6.js";import"./bilibili.03841b80.js";const L=n.div`
  background-color: rgba(120, 120, 120, 0.1);
`,w=n.div`
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
`,T=n.div`
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
`,y=()=>e(T,{children:i("div",{className:"info",children:[e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f061dc214.png",alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),E=o=>{const s=g(),{goodsList:r,enterLoading:a}=o,{getGoodListDispatch:u}=o;m.exports.useEffect(()=>{u()},[]);async function c(){await $(1e3),b.show("\u5237\u65B0\u6210\u529F")}const d={pulling:"\u7528\u529B\u62C9",canRelease:"\u677E\u5F00\u5427",refreshing:"\u73A9\u547D\u52A0\u8F7D\u4E2D...",complete:"\u597D\u5566"};return i(L,{children:[i(w,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>s(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),y(),a?e(D.Paragraph,{lineCount:30,animated:!0}):e(f,{onRefresh:c,renderText:h=>e("div",{children:d[h]}),children:e(v,{goodsList:r})}),e(x,{})]})},R=o=>({enterLoading:o.vip.enterLoading,goodsList:o.vip.goodsList}),S=o=>({getGoodListDispatch(){o(F())}});var B=p(R,S)(l.memo(E));export{B as default};
