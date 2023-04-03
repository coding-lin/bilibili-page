import{r as l,ag as H,w as G,j as n,y as E,x as _,R as b,ah as K,V as ue,aa as fe,d as v,Y as j,W as X,s as B,p as r,ai as pe,T as Y,b as me}from"./index.84d41d77.js";import{u as ge,M as he,P as ve}from"./index.011739a2.js";import{c as be}from"./index.d06188a2.js";import{a as xe}from"./attach-properties-to-component.6acef87d.js";import{_ as we}from"./index.f73340ce.js";var $e=be(l.exports.useEffect);function ke(t){return l.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),l.exports.createElement("g",{id:"ClockCircleOutline-ClockCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.exports.createElement("g",{id:"ClockCircleOutline-\u7F16\u7EC4"},l.exports.createElement("rect",{id:"ClockCircleOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),l.exports.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M24.6,14 C24.8209139,14 25,14.1790861 25,14.4 L25,23.1715729 C25,23.2776595 25.0337142,23.38027 25.0952092,23.4650801 L25.1464466,23.5251263 L33.2778175,31.6564971 C33.4340272,31.8127068 33.4340272,32.0659728 33.2778175,32.2221825 L31.7221825,33.7778175 C31.5659728,33.9340272 31.3127068,33.9340272 31.1564971,33.7778175 L23.0251263,25.6464466 C22.4192395,25.0405598 22.0584325,24.2354066 22.0065089,23.3850222 L22,23.1715729 L22,14.4 C22,14.1790861 22.1790861,14 22.4,14 L24.6,14 Z",id:"ClockCircleOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}var D={},Ce=H&&H.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(D,"__esModule",{value:!0});var J=D.staged=void 0;const ye=Ce(l.exports);function Q(t){return typeof t=="function"?ye.default.createElement(Pe,{stage:t}):t}function Pe(t){const i=t.stage();return Q(i)}function Ne(t){return function(o,c){const u=t(o,c);return Q(u)}}J=D.staged=Ne;const y="adm-page-indicator",Se={color:"primary",direction:"horizontal"},Ie=l.exports.memo(t=>{const i=G(Se,t),o=[];for(let c=0;c<i.total;c++)o.push(n("div",{className:E(`${y}-dot`,{[`${y}-dot-active`]:i.current===c})},c));return _(i,n("div",{className:E(y,`${y}-${i.direction}`,`${y}-color-${i.color}`),children:o}))});var Ee=Ie;const ee=t=>_(t,b.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children));function Me(t){const[i,o]=l.exports.useState(t),c=l.exports.useRef(i);return l.exports.useEffect(()=>{c.current=i},[i]),[i,o,c]}function Oe(t,i){const o=Object.keys(t),c=Object.keys(i),u=new Set([...o,...c]),p={};return u.forEach(x=>{const h=t[x],d=i[x];typeof h=="function"&&typeof d=="function"?p[x]=function(...f){h(...f),d(...f)}:p[x]=h||d}),p}const g="adm-swiper",ze={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},Fe={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let I;const Re=l.exports.forwardRef(J((t,i)=>{const o=G(Fe,t),[c]=l.exports.useState({}),u=o.direction==="vertical",p=o.slideSize/100,x=o.trackOffset/100,{validChildren:h,count:d}=l.exports.useMemo(()=>{let f=0;return{validChildren:b.Children.map(o.children,w=>b.isValidElement(w)?w.type!==ee?(K("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(f++,w):null),count:f}},[o.children]);return d===0||!h?(K("Swiper","`Swiper` needs at least one child."),null):()=>{let f=o.loop;p*(d-1)<1&&(f=!1);const M=l.exports.useRef(null);function w(){const e=M.current;return e?(u?e.offsetHeight:e.offsetWidth)*o.slideSize/100:0}const[k,te]=l.exports.useState(o.defaultIndex);$e(()=>{var e;(e=o.onIndexChange)===null||e===void 0||e.call(o,k)},[k]);const[V,L,O]=Me(!1);function P(e){let s=0,a=d-1;return o.stuckAtBoundary&&(s+=x/p,a-=(1-p-x)/p),j(e,s,a)}const[{position:$},z]=ue(()=>({position:P(k)*100,config:{tension:200,friction:30},onRest:()=>{if(O.current||!f)return;const e=$.get(),s=100*d,a=T(e,s);a!==e&&z.start({position:a,immediate:!0})}}),[d]),F=l.exports.useRef(null);function oe(){var e;(e=F.current)===null||e===void 0||e.call(F),O.current=!1}const ne=fe(e=>{if(F.current=e.cancel,!e.intentional||(e.first&&!I&&(I=c),I!==c))return;I=e.last?void 0:c;const s=w();if(!s)return;const a=u?1:0,m=e.offset[a],N=e.direction[a],S=e.velocity[a];if(L(!0),!e.last)z.start({position:m*100/s,immediate:!0});else{const Z=Math.floor(m/s),le=Z+1,de=Math.round((m+S*2e3*N)/s);C(j(de,Z,le)),window.setTimeout(()=>{L(!1)})}},{transform:([e,s])=>[-e,-s],from:()=>{const e=w();return[$.get()/100*e,$.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(f)return{};const e=w(),s=P(0)*e,a=P(d-1)*e;return u?{top:s,bottom:a}:{left:s,right:a}},rubberband:o.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function C(e,s=!1){const a=Math.round(e),m=f?T(a,d):j(a,0,d-1);te(m),z.start({position:(f?a:P(a))*100,immediate:s})}function W(){C(Math.round($.get()/100)+1)}function ie(){C(Math.round($.get()/100)-1)}l.exports.useImperativeHandle(i,()=>({swipeTo:C,swipeNext:W,swipePrev:ie})),ge(()=>{const e=h.length-1;k>e&&C(e,!0)});const{autoplay:A,autoplayInterval:R}=o;l.exports.useEffect(()=>{if(!A||V)return;let e;function s(){e=window.setTimeout(s,R),W()}return e=window.setTimeout(s,R),()=>{e&&window.clearTimeout(e)}},[A,R,V,d]);function re(){return f?n("div",{className:`${g}-track-inner`,children:b.Children.map(h,(e,s)=>b.createElement(X.div,{className:`${g}-slide`,style:{[u?"y":"x"]:$.to(a=>{let m=-a+s*100;const N=d*100,S=N/2;return m=T(m+S,N)-S,`${m}%`}),[u?"top":"left"]:`-${s*100}%`}},e))}):b.createElement(X.div,{className:`${g}-track-inner`,style:{[u?"y":"x"]:$.to(e=>`${-e}%`)}},b.Children.map(h,e=>n("div",{className:`${g}-slide`,children:e})))}const se={"--slide-size":`${o.slideSize}%`,"--track-offset":`${o.trackOffset}%`},ae=Object.assign({},o.allowTouchMove?ne():{}),U={};for(const e of o.stopPropagation){const s=ze[e];U[s]=function(a){a.stopPropagation()}}const ce=Oe(ae,U);return _(o,v("div",{className:E(g,`${g}-${o.direction}`),style:se,children:[n("div",{...Object.assign({ref:M,className:E(`${g}-track`,{[`${g}-track-allow-touch-move`]:o.allowTouchMove}),onClickCapture:e=>{O.current&&e.stopPropagation(),oe()}},ce),children:re()}),o.indicator===void 0?n("div",{className:`${g}-indicator`,children:n(Ee,{...Object.assign({},o.indicatorProps,{total:d,current:k,direction:o.direction})})}):o.indicator(d,k)]}))}}));function T(t,i){const o=t%i;return o<0?o+i:o}var q=xe(Re,{Item:ee});const je=B.div`
  .container {
    width: 100%;
    padding: ${r(5)} ${r(5)} 0 ${r(5)};
    background: rgba(50, 50, 50, 0.06);
    .content {
      height: ${r(196)};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${r(2)};
      user-select: none;
      background-size: cover;
    } 
  }
`;function He(){const t=pe.map(i=>n(q.Item,{children:n("div",{className:"content",style:{backgroundImage:`url(${i.img})`},onClick:()=>{Y.show(`\u4F60\u70B9\u51FB\u4E86\u7535\u5F71 ${i.id}`)}})},i.id));return n(je,{children:n("div",{className:"container",children:n(q,{autoplay:!0,loop:!0,children:t})})})}const Te=B.div`
  width: 100%;
  background: ${me["background-color"]};
  padding-bottom: ${r(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;var _e="./assets/bilibili.01065c11.gif";const Be=B.div`
  .video-box {
    margin: ${r(5)};
    border-radius: ${r(2)};
    .video-img {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: ${r(2)};
      }
      .data {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${r(22)};
        line-height: ${r(22)};
        color: #fff;
        background: rgba(50, 50, 50, 0.5);
        border-radius: ${r(2)};
        display: flex;
        justify-content: space-around;
        i {
          font-size: ${r(17)};
        }
        span {
          font-size: ${r(12)};
        }
      }
    }
    .video-info {
      position: relative;
      height: ${r(76)};
      background: #fff;
      .title {
        padding: ${r(2)};
        font-size: ${r(14)};
        /* 实现标题显示两行，溢出的用省略号表示 */
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        -moz-line-clamp: 2;
        -moz-box-orient: vertical;
        overflow-wrap: break-word;
        word-break: break-all;
        white-space: normal;
        overflow: hidden;
      }
      .up {
        position: absolute;
        font-size: ${r(12)};
        padding: ${r(2)};
        border: ${r(1)} solid pink;
        border-radius: ${r(2)};
        bottom: ${r(4)};
        left: ${r(4)};
      }
      .video-pop {
        position: absolute;
        bottom: ${r(8)};
        right: ${r(6)};
        font-size: ${r(18)};
        color: rgb(159, 157, 159);
        transform: rotate(90deg);
      }
    }
  }
`;const De=({video:t,addDispatch:i})=>{const[o,c]=l.exports.useState(!1),u=p=>{i(p),Y.show("\u6DFB\u52A0\u6210\u529F"),c(!1)};return v(Be,{children:[v("div",{className:"video-box",children:[v("div",{className:"video-img",children:[n(we,{placeholder:n("img",{width:"100%",height:"100%",src:_e,alt:""}),children:n("img",{src:t.img})}),v("div",{className:"data",children:[n("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),n("span",{children:t.bofang}),n("i",{className:"iconfont icon-pinglun"}),n("span",{children:t.pinglun}),n("span",{children:t.time})]})]}),v("div",{className:"video-info",children:[n("div",{className:"title",children:t.title}),n("div",{className:"up",children:t.up}),n(he,{className:"video-pop",onClick:()=>{c(!0)}})]})]},t.id),v(ve,{visible:o,onMaskClick:()=>{c(!1)},bodyStyle:{height:"5rem"},children:[v("div",{className:"add-wait",onClick:()=>u(t.id),children:[n(ke,{className:"wait-icon"}),n("span",{children:"\u6DFB\u52A0\u81F3\u7A0D\u540E\u518D\u770B"})]}),n("div",{className:"video-pop-bottom",onClick:()=>c(!1),children:n("span",{children:"\u53D6\u6D88"})})]})]})};var Ve=b.memo(De);const Ke=({videoData:t,addDispatch:i})=>n(Te,{children:n("div",{className:"container",children:t&&t.map(o=>n(Ve,{video:o,addDispatch:i},o.id))})});export{He as S,Ke as V};
