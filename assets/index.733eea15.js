import{S as E,a as C,U as N,s as a,b as h,R as f,j as s,c as e,r,d as k,e as F,u as Q,F as T}from"./index.6450a8b9.js";import{g as $,b as B}from"./bilibili.fb5bc7b0.js";import{C as j}from"./CSSTransition.3ff548eb.js";const R=t=>({type:C,data:t}),b=t=>({type:E,data:t}),W=()=>t=>{$().then(i=>{t(R(i)),t(b(!1))})},q=N`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`,I=a.div`
    >div {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      margin: auto;
      width: 60px;
      height: 60px;
      opacity: 0.6;
      border-radius: 50%;
      background-color: ${h["loading-color"]};
      animation: ${q} 1.4s infinite ease-in;
    }
    >div:nth-child(2) {
      animation-delay: -0.7s;
    }
`;function _(){return s(I,{children:[e("div",{}),e("div",{})]})}var G=f.memo(_);const O=a.div`
  position: relative;
  width: 80%;
  margin: 16px;
  border-radius: 15px;
  background-color: ${h["search_bar-color"]};
  display: flex;
  >i:first-child {
    position: absolute;
    top: 2px;
    left: 8px;
  }
  >i:last-child {
    position: absolute;
    top: 2px;
    right: 10px;
  }
  input {
    width: 120px;
    flex: 8;
    padding-left: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 14px;
    border: 0;
  }
`,U=t=>{const i=r.exports.useRef(),{newQuery:d}=t,{handleQuery:u}=t,[l,p]=r.exports.useState("");let o=r.exports.useMemo(()=>k(u,500),[u]);return r.exports.useEffect(()=>{i.current.focus()},[]),r.exports.useEffect(()=>{o(l)},[l]),r.exports.useEffect(()=>{let c=l;d!==l&&(c=d,i.current.value=d),p(c)},[d]),s(O,{children:[e("i",{className:"iconfont icon-sousuo"}),e("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",ref:i,onChange:c=>{let g=c.currentTarget.value;p(g)}}),e("i",{className:"iconfont icon-shanchu",style:l?{display:"block"}:{display:"none"},onClick:()=>{p(""),i.current.value="",i.current.focus()}})]})};var z=f.memo(U),A="./assets/nothing.89d9bfa8.png";const P=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  background: #fff;
  transform-origin: right bottom;
  /* CSSTranstion 过度类型给children  */
  &.fly-enter,
  &.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-apply-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`,H=a.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`,M=a.div`
  width: 100%;
  .title {
    margin: 6px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin-left: 10px;
    }
    span {
      margin-right: 12px;
    }
  }
  .desc {
    margin: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
`,J=a.div`
  
`,K=a.div`
  width: 100%;
  margin-top: 20px;
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 68%;
      height: 100%;
      margin: 0 auto;
    }
  }
`,V=a.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${h["border-color"]};
`,X=a.div`
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${h["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .title {
    margin: 10px;
  }
`,Y=a.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`,Z=t=>{const i=Q(),{enterLoading:d,suggestList:u}=t,{changeEnterLoadingDispatch:l,getSuggestListDispatch:p}=t,[o,x]=r.exports.useState(""),[m,y]=r.exports.useState(!1),[c,g]=r.exports.useState(!0);r.exports.useEffect(()=>{y(!0)},[]);const v=n=>{x(n)},S=()=>{g(!c)};r.exports.useEffect(()=>{o.trim()&&(l(!0),p(o))},[o]);const w=n=>{i(`/suggest/${n}`)},L=()=>s(T,{children:[e("h3",{style:{float:"left",margin:"10px"},children:"\u89C6\u9891\u5217\u8868"}),e(V,{children:u.filter(n=>n.title.indexOf(o)!=-1).map(n=>s(X,{className:"item",onClick:()=>w(n.id),children:[e("img",{src:B}),e("span",{children:n.title})]},n.id))})]}),D=()=>e(K,{children:s("div",{className:"info",children:[e("img",{src:A}),e("span",{children:"\u6CA1\u6709\u641C\u5230\u7ED3\u679C..."})]})});return e(j,{in:m,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,children:s(P,{children:[s(H,{children:[e(z,{newQuery:o,handleQuery:v}),e("span",{onClick:()=>i(-1),children:"\u53D6\u6D88"})]}),s(M,{children:[s("div",{className:"title",children:[e("h2",{children:"\u641C\u7D22\u53D1\u73B0"}),e("span",{onClick:()=>S(),children:c?"\u9690\u85CF":"\u663E\u793A"})]}),s("div",{className:"desc",style:c?{display:""}:{display:"none"},children:[e("span",{children:"\u767D\u77F3\u8309\u8389\u5948"}),e("span",{children:"\u5468\u6770\u4F26\u65B0\u4E13\u8F91"}),e("span",{children:"\u5C0F\u84DD\u84DD"}),e("span",{children:"v5 wbg"})]})]}),e(J,{show:o,children:u.filter(n=>n.title.indexOf(o)!=-1).length>0?L():D()}),d&&e(Y,{children:e(G,{})})]})})},ee=t=>({enterLoading:t.search.enterLoading,suggestList:t.search.suggestList}),te=t=>({changeEnterLoadingDispatch(i){t(b(i))},getSuggestListDispatch(i){t(W())}});var se=F(ee,te)(f.memo(Z));export{se as default};
