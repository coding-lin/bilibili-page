import{U as y,s as l,p as e,b as d,R as h,d as p,j as r,r as t,e as $}from"./index.a99e6ad6.js";const b=y`
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
`;function x(){return p(m,{children:[r("div",{}),r("div",{})]})}var L=h.memo(x);const v=l.div`
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
`,Q=c=>{const o=t.exports.useRef(),{newQuery:s}=c,{handleQuery:u}=c,[a,i]=t.exports.useState("");let f=t.exports.useMemo(()=>$(u,500),[u]);return t.exports.useEffect(()=>{o.current.focus()},[]),t.exports.useEffect(()=>{f(a)},[a]),t.exports.useEffect(()=>{let n=a;s!==a&&(n=s,o.current.value=s),i(n)},[s]),p(v,{children:[r("i",{className:"iconfont icon-sousuo"}),r("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",ref:o,onChange:n=>{let g=n.currentTarget.value;i(g)}}),r("i",{className:"iconfont icon-shanchu",style:a?{display:"block"}:{display:"none"},onClick:()=>{i(""),o.current.value="",o.current.focus()}})]})};var N=h.memo(Q),R="./assets/nothing.89d9bfa8.png";export{L,R as N,N as S};
