import{r as o,q as h,v as L,w as P,x as R,y as x,z as w,j as r,A as C,B as E,D as F,d as g,F as y,f as I}from"./index.5755cf91.js";import{u as M}from"./index.07f956fc.js";function N(t){var e=this,n=o.exports.useRef(!1);return o.exports.useCallback(function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return h(e,void 0,void 0,function(){var d,u;return L(this,function(a){switch(a.label){case 0:if(n.current)return[2];n.current=!0,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.apply(void 0,P([],R(s),!1))];case 2:return d=a.sent(),n.current=!1,[2,d];case 3:throw u=a.sent(),n.current=!1,u;case 4:return[2]}})})},[t])}const $="adm-dot-loading",j={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},B={color:"default"},D=o.exports.memo(t=>{var e;const n=x(B,t);return w(n,r("div",{style:{color:(e=j[n.color])!==null&&e!==void 0?e:n.color},className:C("adm-loading",$),children:r("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"},children:r("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:r("g",{transform:"translate(-100.000000, -71.000000)",children:r("g",{transform:"translate(95.000000, 71.000000)",children:r("g",{transform:"translate(5.000000, 0.000000)",children:[0,1,2].map(s=>r("rect",{fill:"currentColor",x:20+s*26,y:"16",width:"8",height:"8",rx:"2",children:r("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:`${s*.2}s`,repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"})},s))})})})})})}))});var _=D;function A(t){return t===window}const S="adm-infinite-scroll",W={threshold:250,children:(t,e,n)=>r(z,{hasMore:t,failed:e,retry:n})},q=t=>{const e=x(W,t),[n,s]=o.exports.useState(!1),i=N(c=>h(void 0,void 0,void 0,function*(){try{yield e.loadMore(c)}catch(l){throw s(!0),l}})),d=o.exports.useRef(null),[u,a]=o.exports.useState({}),m=o.exports.useRef(u),[f,T]=o.exports.useState(),{run:v}=M(()=>h(void 0,void 0,void 0,function*(){if(m.current!==u||!e.hasMore)return;const c=d.current;if(!c||!c.offsetParent)return;const l=E(c);if(T(l),!l)return;const k=c.getBoundingClientRect().top;if((A(l)?window.innerHeight:l.getBoundingClientRect().bottom)>=k-e.threshold){const p={};m.current=p,yield i(!1),a(p)}}),{wait:100,leading:!0,trailing:!0});o.exports.useEffect(()=>{v()}),o.exports.useEffect(()=>{if(!d.current||!f)return;function l(){v()}return f.addEventListener("scroll",l),()=>{f.removeEventListener("scroll",l)}},[f]);function b(){return h(this,void 0,void 0,function*(){s(!1),yield i(!0),a(m.current)})}return w(e,r("div",{className:S,ref:d,children:typeof e.children=="function"?e.children(e.hasMore,n,b):e.children}))},z=t=>{const{locale:e}=F();return t.hasMore?t.failed?g("span",{children:[r("span",{className:`${S}-failed-text`,children:e.InfiniteScroll.failedToLoad}),r("a",{onClick:()=>{t.retry()},children:e.InfiniteScroll.retry})]}):g(y,{children:[r("span",{children:e.common.loading}),r(_,{})]}):r("span",{children:e.InfiniteScroll.noMore})};var G=q;const J=()=>{const[t,e]=o.exports.useState(!1),n=I(()=>{(window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0)>2e3?e(!0):e(!1)},100);return o.exports.useEffect(()=>(document.addEventListener("scroll",n,!0),()=>document.removeEventListener("scroll",n)),[t]),r(y,{children:t&&r("div",{className:"to-top",onClick:()=>window.scrollTo(0,0),children:r("i",{className:"iconfont icon-fanhuijiantou"})})})};export{_ as D,G as I,J as S};
