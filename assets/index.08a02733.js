import{s,p as t,c as S,R as w,r,u as y,d as n,j as e,P as L,i as d,T as C,F as R}from"./index.60f5fab3.js";import{I as T,S as k,D as z}from"./index.d328e6b5.js";import{S as A}from"./index.15790e54.js";import{G as B,a as G}from"./index.0fec8c3f.js";import"./request.f20c2d41.js";import"./index.4f01f3f3.js";import"./index.cd518140.js";import"./bilibili.03841b80.js";const j=s.div`
  background-color: rgba(120, 120, 120, 0.1);
`,P=s.div`
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
`,M=s.div`
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
`,I=()=>e(M,{children:n("div",{className:"info",children:[e("img",{src:"https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f061dc214.png",alt:""}),e("p",{children:"\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F"}),e("span",{children:"\u4F60\u53EF\u80FD\u8FD8\u559C\u6B22"})]})}),N=i=>{const[a,l]=r.exports.useState(!0),[u,c]=r.exports.useState([]),[h,p]=r.exports.useState(0),g=y(),{goodsList:m,enterLoading:f}=i,{getGoodListDispatch:$}=i;r.exports.useEffect(()=>{$()},[]);async function D(){await d(1e3),c([...new Set(u)]),C.show("\u5237\u65B0\u6210\u529F")}const F={pulling:"\u7528\u529B\u62C9",canRelease:"\u677E\u5F00\u5427",refreshing:"\u73A9\u547D\u52A0\u8F7D\u4E2D...",complete:"\u597D\u5566"};async function x(){return h>=5?[]:(await d(1e3),p(o=>o+1),m)}async function v(){const o=await x();c(E=>[...E,...o]),l(o.length>0)}const b=({hasMore:o})=>e(R,{children:o?n("div",{style:{marginBottom:"2.5rem"},children:[e("span",{children:"\u4E00\u5927\u6CE2\u4FE1\u606F\u5411\u4F60\u98DE\u5954\u8FC7\u6765~"}),e(z,{})]}):e("div",{style:{marginBottom:"2.5rem"},children:e("span",{children:"--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---"})})});return n(j,{children:[n(P,{children:[e("i",{className:"iconfont icon-fanhuijiantou",onClick:()=>g(-1)}),e("h2",{children:"\u8D2D\u7269\u8F66"})]}),I(),f?e(A.Paragraph,{lineCount:30,animated:!0}):n(L,{onRefresh:D,renderText:o=>e("div",{children:F[o]}),children:[e(B,{goodData:u}),e(T,{loadMore:v,hasMore:a,children:e(b,{hasMore:a})})]}),e(k,{})]})},H=i=>({enterLoading:i.vip.enterLoading,goodsList:i.vip.goodsList}),W=i=>({getGoodListDispatch(){i(G())}});var Y=S(H,W)(w.memo(N));export{Y as default};
