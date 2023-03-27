import{U as g,s as l,p as e,b as d,R as h,d as p,j as a,r as t,e as $}from"./index.60f5fab3.js";const b=g`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`,m=l.div`
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
`;function x(){return p(m,{children:[a("div",{}),a("div",{})]})}var L=h.memo(x);const v=l.div`
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
`,Q=c=>{const o=t.exports.useRef(),{newQuery:s}=c,{handleQuery:u}=c,[r,i]=t.exports.useState("");let f=t.exports.useMemo(()=>$(u,500),[u]);return t.exports.useEffect(()=>{o.current.focus()},[]),t.exports.useEffect(()=>{f(r)},[r]),t.exports.useEffect(()=>{let n=r;s!==r&&(n=s,o.current.value=s),i(n)},[s]),p(v,{children:[a("i",{className:"iconfont icon-sousuo"}),a("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",ref:o,onChange:n=>{let y=n.currentTarget.value;i(y)}}),a("i",{className:"iconfont icon-shanchu",style:r?{display:"block"}:{display:"none"},onClick:()=>{i(""),o.current.value="",o.current.focus()}})]})};var R=h.memo(Q);export{L,R as S};
