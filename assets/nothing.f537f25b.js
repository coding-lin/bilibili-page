import{U as x,s as u,b as l,R as d,d as p,j as a,r as e,e as g}from"./index.95fad9cc.js";const y=x`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`,b=u.div`
    >div {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      margin: auto;
      width: 60px;
      height: 60px;
      opacity: 0.6;
      border-radius: 50%;
      background-color: ${l["loading-color"]};
      animation: ${y} 1.4s infinite ease-in;
    }
    >div:nth-child(2) {
      animation-delay: -0.7s;
    }
`;function m(){return p(b,{children:[a("div",{}),a("div",{})]})}var $=d.memo(m);const v=u.div`
  position: relative;
  width: 80%;
  margin: 16px;
  border-radius: 15px;
  background-color: ${l["search_bar-color"]};
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
`,Q=i=>{const t=e.exports.useRef(),{newQuery:r}=i,{handleQuery:c}=i,[o,n]=e.exports.useState("");let h=e.exports.useMemo(()=>g(c,500),[c]);return e.exports.useEffect(()=>{t.current.focus()},[]),e.exports.useEffect(()=>{h(o)},[o]),e.exports.useEffect(()=>{let s=o;r!==o&&(s=r,t.current.value=r),n(s)},[r]),p(v,{children:[a("i",{className:"iconfont icon-sousuo"}),a("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",ref:t,onChange:s=>{let f=s.currentTarget.value;n(f)}}),a("i",{className:"iconfont icon-shanchu",style:o?{display:"block"}:{display:"none"},onClick:()=>{n(""),t.current.value="",t.current.focus()}})]})};var w=d.memo(Q),L="./assets/nothing.89d9bfa8.png";export{$ as L,L as N,w as S};
