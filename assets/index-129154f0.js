import{r as o,a3 as h,aa as C,ab as E,G as F,W as I,w as L,j as t,ac as P,ad as R,d as v,F as p,l as M}from"./index-fed2dc62.js";import{D as w}from"./dot-loading-b8487f5c.js";import{u as N}from"./index-54b0b29a.js";function k(n){var e=this,r=o.useRef(!1);return o.useCallback(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return h(e,void 0,void 0,function(){var u,d;return C(this,function(c){switch(c.label){case 0:if(r.current)return[2];r.current=!0,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,n.apply(void 0,E([],F(s),!1))];case 2:return u=c.sent(),r.current=!1,[2,u];case 3:throw d=c.sent(),r.current=!1,d;case 4:return[2]}})})},[n])}function j(n){return n===window}const y="adm-infinite-scroll",B={threshold:250,children:(n,e,r)=>t(z,{hasMore:n,failed:e,retry:r})},_=n=>{const e=I(B,n),[r,s]=o.useState(!1),l=k(a=>h(void 0,void 0,void 0,function*(){try{yield e.loadMore(a)}catch(i){throw s(!0),i}})),u=o.useRef(null),[d,c]=o.useState({}),m=o.useRef(d),[f,T]=o.useState(),{run:g}=N(()=>h(void 0,void 0,void 0,function*(){if(m.current!==d||!e.hasMore)return;const a=u.current;if(!a||!a.offsetParent)return;const i=P(a);if(T(i),!i)return;const x=a.getBoundingClientRect().top;if((j(i)?window.innerHeight:i.getBoundingClientRect().bottom)>=x-e.threshold){const S={};m.current=S,yield l(!1),c(S)}}),{wait:100,leading:!0,trailing:!0});o.useEffect(()=>{g()}),o.useEffect(()=>{if(!u.current||!f)return;function i(){g()}return f.addEventListener("scroll",i),()=>{f.removeEventListener("scroll",i)}},[f]);function b(){return h(this,void 0,void 0,function*(){s(!1),yield l(!0),c(m.current)})}return L(e,t("div",{className:y,ref:u,children:typeof e.children=="function"?e.children(e.hasMore,r,b):e.children}))},z=n=>{const{locale:e}=R();return n.hasMore?n.failed?v("span",{children:[t("span",{className:`${y}-failed-text`,children:e.InfiniteScroll.failedToLoad}),t("a",{onClick:()=>{n.retry()},children:e.InfiniteScroll.retry})]}):v(p,{children:[t("span",{children:e.common.loading}),t(w,{})]}):t("span",{children:e.InfiniteScroll.noMore})},O=({loadMore:n,hasMore:e})=>t(_,{loadMore:n,hasMore:e,children:t(({hasMore:s})=>t(p,{children:s?v("div",{style:{marginBottom:"2.5rem"},children:[t("span",{style:{fontSize:"0.7rem"},children:"一大波信息向你飞奔过来~"}),t(w,{})]}):t("div",{style:{marginBottom:"2.5rem"},children:t("span",{style:{fontSize:"0.7rem"},children:"--- 我是有底线的 ---"})})}),{hasMore:e})});const V=({top:n})=>{const[e,r]=o.useState(!1),s=M(()=>{(window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0)>n?r(!0):r(!1)},100);return o.useEffect(()=>(document.addEventListener("scroll",s,!0),()=>document.removeEventListener("scroll",s)),[e]),t(p,{children:e&&t("div",{className:"to-top",onClick:()=>window.scrollTo(0,0),children:t("i",{className:"iconfont icon-fanhuijiantou"})})})};export{O as N,V as S};
