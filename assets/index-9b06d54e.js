import{U as g,s as u,p as e,b as d,R as h,d as f,j as n,r as t,l as $}from"./index-1f87f03b.js";const b=g`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`,m=u.div`
    >div {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      margin: auto;
      width: ${e(60)};
      height: ${e(60)};
      opacity: 0.6;
      border-radius: 50%;
      background-color: ${d["loading-color"]};
      animation: ${b} 1.4s infinite ease-in;
    }
    >div:nth-child(2) {
      animation-delay: -0.7s;
    }
`;function v(){return f(m,{children:[n("div",{}),n("div",{})]})}const L=h.memo(v),x=u.div`
  position: relative;
  width: 80%;
  height: ${e(30)};
  margin: ${e(16)};
  border-radius: ${e(15)};
  background-color: ${d["search_bar-color"]};
  display: flex;
  >i:first-child {
    position: absolute;
    font-size: ${e(17)};
    top: ${e(6)};
    left: ${e(10)};
  }
  >i:last-child {
    position: absolute;
    font-size: ${e(17)};
    top: ${e(6)};
    right: ${e(12)};
  }
  input {
    flex: 8;
    font-size: ${e(14)};
    padding-left: ${e(32)};
    height: ${e(30)};
    background: rgba(255, 255, 255, 0.01);
    border-radius: ${e(14)};
    border: 0;
  }
`,Q=c=>{const o=t.useRef(),{newQuery:r}=c,{handleQuery:l}=c,[a,i]=t.useState("");let p=t.useMemo(()=>$(l,500),[l]);return t.useEffect(()=>{o.current.focus()},[]),t.useEffect(()=>{p(a)},[a]),t.useEffect(()=>{let s=a;r!==a&&(s=r,o.current.value=r),i(s)},[r]),f(x,{children:[n("i",{className:"iconfont icon-sousuo"}),n("input",{type:"text",placeholder:"请输入搜索内容",ref:o,onChange:s=>{let y=s.currentTarget.value;i(y)}}),n("i",{className:"iconfont icon-shanchu",style:a?{display:"block"}:{display:"none"},onClick:()=>{i(""),o.current.value="",o.current.focus()}})]})},R=h.memo(Q);export{L,R as S};
