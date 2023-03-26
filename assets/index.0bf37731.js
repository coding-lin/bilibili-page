import{s,p as t,c as b,R as E,r,u as S,d as n,j as e,P as w,i as d,T as y,F as L}from"./index.8404c549.js";import{I as C,S as R,D as T}from"./index.885e9c45.js";import{S as k}from"./index.b0b59a5f.js";import{G as z,a as A}from"./index.fd92f465.js";import"./request.1786c4c4.js";import"./index.5ae111be.js";import"./index.57e5812b.js";import"./bilibili.03841b80.js";const B=s.div`
  background-color: rgba(120, 120, 120, 0.1);
`,G=s.div`
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
`,j=s.div`
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
`,P=()=>e(j,{children:n("div",{className:"info",children:[e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f061dc214.png",alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),M=i=>{const[a,l]=r.exports.useState(!0),[u,c]=r.exports.useState([]),h=S(),{goodsList:p,enterLoading:g}=i,{getGoodListDispatch:m}=i;r.exports.useEffect(()=>{m()},[]);async function f(){await d(1e3),c([...new Set(u)]),y.show("\u5237\u65B0\u6210\u529F")}const $={pulling:"\u7528\u529B\u62C9",canRelease:"\u677E\u5F00\u5427",refreshing:"\u73A9\u547D\u52A0\u8F7D\u4E2D...",complete:"\u597D\u5566"};async function D(){let o=0;return o>=5?[]:(await d(1e3),o++,p)}async function F(){const o=await D();c(x=>[...x,...o]),l(o.length>0)}const v=({hasMore:o})=>e(L,{children:o?n("div",{style:{marginBottom:"2.5rem"},children:[e("span",{children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),e(T,{})]}):e("div",{style:{marginBottom:"2.5rem"},children:e("span",{children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return n(B,{children:[n(G,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>h(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),P(),g?e(k.Paragraph,{lineCount:30,animated:!0}):n(w,{onRefresh:f,renderText:o=>e("div",{children:$[o]}),children:[e(z,{goodData:u}),e(C,{loadMore:F,hasMore:a,children:e(v,{hasMore:a})})]}),e(R,{})]})},I=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),N=i=>({getGoodListDispatch(){i(A())}});var V=b(I,N)(E.memo(M));export{V as default};
