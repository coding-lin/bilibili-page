import{r as c,w as K,j as i,A as E,y as B,R as b,ap as Z,$ as ae,ad as ce,d as v,a7 as T,a2 as q,s as D,p as r,aq as le,T as X,b as de}from"./index.c9f20990.js";import{s as ue}from"./actionCreators.22629704.js";import{u as pe,P as fe}from"./index.7916746a.js";import{c as me,M as he}from"./MoreOutline.b49d218a.js";import{a as ge}from"./attach-properties-to-component.6acef87d.js";import{_ as ve}from"./index.bd37c9c2.js";var be=me(c.exports.useEffect);function xe(o){return c.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o,{style:Object.assign({verticalAlign:"-0.125em"},o.style),className:["antd-mobile-icon",o.className].filter(Boolean).join(" ")}),c.exports.createElement("g",{id:"ClockCircleOutline-ClockCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.exports.createElement("g",{id:"ClockCircleOutline-\u7F16\u7EC4"},c.exports.createElement("rect",{id:"ClockCircleOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),c.exports.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M24.6,14 C24.8209139,14 25,14.1790861 25,14.4 L25,23.1715729 C25,23.2776595 25.0337142,23.38027 25.0952092,23.4650801 L25.1464466,23.5251263 L33.2778175,31.6564971 C33.4340272,31.8127068 33.4340272,32.0659728 33.2778175,32.2221825 L31.7221825,33.7778175 C31.5659728,33.9340272 31.3127068,33.9340272 31.1564971,33.7778175 L23.0251263,25.6464466 C22.4192395,25.0405598 22.0584325,24.2354066 22.0065089,23.3850222 L22,23.1715729 L22,14.4 C22,14.1790861 22.1790861,14 22.4,14 L24.6,14 Z",id:"ClockCircleOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}const y="adm-page-indicator",we={color:"primary",direction:"horizontal"},$e=c.exports.memo(o=>{const n=K(we,o),t=[];for(let l=0;l<n.total;l++)t.push(i("div",{className:E(`${y}-dot`,{[`${y}-dot-active`]:n.current===l})},l));return B(n,i("div",{className:E(y,`${y}-${n.direction}`,`${y}-color-${n.color}`),children:t}))});var ke=$e;const G=o=>B(o,b.createElement("div",{className:"adm-swiper-item",onClick:o.onClick},o.children));function Ce(o){const[n,t]=c.exports.useState(o),l=c.exports.useRef(n);return c.exports.useEffect(()=>{l.current=n},[n]),[n,t,l]}function ye(o,n){const t=Object.keys(o),l=Object.keys(n),u=new Set([...t,...l]),f={};return u.forEach(x=>{const g=o[x],d=n[x];typeof g=="function"&&typeof d=="function"?f[x]=function(...p){g(...p),d(...p)}:f[x]=g||d}),f}const h="adm-swiper",Pe={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},Ne={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let S;const Ie=c.exports.forwardRef(ue((o,n)=>{const t=K(Ne,o),[l]=c.exports.useState({}),u=t.direction==="vertical",f=t.slideSize/100,x=t.trackOffset/100,{validChildren:g,count:d}=c.exports.useMemo(()=>{let p=0;return{validChildren:b.Children.map(t.children,w=>b.isValidElement(w)?w.type!==G?(Z("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(p++,w):null),count:p}},[t.children]);return d===0||!g?(Z("Swiper","`Swiper` needs at least one child."),null):()=>{let p=t.loop;f*(d-1)<1&&(p=!1);const M=c.exports.useRef(null);function w(){const e=M.current;return e?(u?e.offsetHeight:e.offsetWidth)*t.slideSize/100:0}const[k,J]=c.exports.useState(t.defaultIndex);be(()=>{var e;(e=t.onIndexChange)===null||e===void 0||e.call(t,k)},[k]);const[L,V,z]=Ce(!1);function P(e){let s=0,a=d-1;return t.stuckAtBoundary&&(s+=x/f,a-=(1-f-x)/f),T(e,s,a)}const[{position:$},F]=ae(()=>({position:P(k)*100,config:{tension:200,friction:30},onRest:()=>{if(z.current||!p)return;const e=$.get(),s=100*d,a=j(e,s);a!==e&&F.start({position:a,immediate:!0})}}),[d]),O=c.exports.useRef(null);function Q(){var e;(e=O.current)===null||e===void 0||e.call(O),z.current=!1}const Y=ce(e=>{if(O.current=e.cancel,!e.intentional||(e.first&&!S&&(S=l),S!==l))return;S=e.last?void 0:l;const s=w();if(!s)return;const a=u?1:0,m=e.offset[a],N=e.direction[a],I=e.velocity[a];if(V(!0),!e.last)F.start({position:m*100/s,immediate:!0});else{const U=Math.floor(m/s),re=U+1,se=Math.round((m+I*2e3*N)/s);C(T(se,U,re)),window.setTimeout(()=>{V(!1)})}},{transform:([e,s])=>[-e,-s],from:()=>{const e=w();return[$.get()/100*e,$.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(p)return{};const e=w(),s=P(0)*e,a=P(d-1)*e;return u?{top:s,bottom:a}:{left:s,right:a}},rubberband:t.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function C(e,s=!1){const a=Math.round(e),m=p?j(a,d):T(a,0,d-1);J(m),F.start({position:(p?a:P(a))*100,immediate:s})}function W(){C(Math.round($.get()/100)+1)}function ee(){C(Math.round($.get()/100)-1)}c.exports.useImperativeHandle(n,()=>({swipeTo:C,swipeNext:W,swipePrev:ee})),pe(()=>{const e=g.length-1;k>e&&C(e,!0)});const{autoplay:A,autoplayInterval:R}=t;c.exports.useEffect(()=>{if(!A||L)return;let e;function s(){e=window.setTimeout(s,R),W()}return e=window.setTimeout(s,R),()=>{e&&window.clearTimeout(e)}},[A,R,L,d]);function te(){return p?i("div",{className:`${h}-track-inner`,children:b.Children.map(g,(e,s)=>b.createElement(q.div,{className:`${h}-slide`,style:{[u?"y":"x"]:$.to(a=>{let m=-a+s*100;const N=d*100,I=N/2;return m=j(m+I,N)-I,`${m}%`}),[u?"top":"left"]:`-${s*100}%`}},e))}):b.createElement(q.div,{className:`${h}-track-inner`,style:{[u?"y":"x"]:$.to(e=>`${-e}%`)}},b.Children.map(g,e=>i("div",{className:`${h}-slide`,children:e})))}const oe={"--slide-size":`${t.slideSize}%`,"--track-offset":`${t.trackOffset}%`},ie=Object.assign({},t.allowTouchMove?Y():{}),_={};for(const e of t.stopPropagation){const s=Pe[e];_[s]=function(a){a.stopPropagation()}}const ne=ye(ie,_);return B(t,v("div",{className:E(h,`${h}-${t.direction}`),style:oe,children:[i("div",{...Object.assign({ref:M,className:E(`${h}-track`,{[`${h}-track-allow-touch-move`]:t.allowTouchMove}),onClickCapture:e=>{z.current&&e.stopPropagation(),Q()}},ne),children:te()}),t.indicator===void 0?i("div",{className:`${h}-indicator`,children:i(ke,{...Object.assign({},t.indicatorProps,{total:d,current:k,direction:t.direction})})}):t.indicator(d,k)]}))}}));function j(o,n){const t=o%n;return t<0?t+n:t}var H=ge(Ie,{Item:G});const Se=D.div`
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
`;function Ve(){const o=le.map(n=>i(H.Item,{children:i("div",{className:"content",style:{backgroundImage:`url(${n.img})`},onClick:()=>{X.show(`\u4F60\u70B9\u51FB\u4E86\u7535\u5F71 ${n.id}`)}})},n.id));return i(Se,{children:i("div",{className:"container",children:i(H,{autoplay:!0,loop:!0,children:o})})})}const Ee=D.div`
  width: 100%;
  background: ${de["background-color"]};
  padding-bottom: ${r(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;var Me="./assets/bilibili.01065c11.gif";const ze=D.div`
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
`;const Fe=({video:o,addDispatch:n})=>{const[t,l]=c.exports.useState(!1),u=async f=>{await n(f),X.show({content:"\u6DFB\u52A0\u6210\u529F",position:"bottom"}),l(!1)};return v(ze,{children:[v("div",{className:"video-box",children:[v("div",{className:"video-img",children:[i(ve,{placeholder:i("img",{width:"100%",height:"100%",src:Me,alt:""}),children:i("img",{src:o.img})}),v("div",{className:"data",children:[i("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),i("span",{children:o.bofang}),i("i",{className:"iconfont icon-pinglun"}),i("span",{children:o.pinglun}),i("span",{children:o.time})]})]}),v("div",{className:"video-info",children:[i("div",{className:"title",children:o.title}),i("div",{className:"up",children:o.up}),i(he,{className:"video-pop",onClick:()=>{l(!0)}})]})]},o.id),v(fe,{visible:t,onMaskClick:()=>{l(!1)},bodyStyle:{height:"5rem"},children:[v("div",{className:"add-wait",onClick:()=>u(o.id),children:[i(xe,{className:"wait-icon"}),i("span",{children:"\u6DFB\u52A0\u81F3\u7A0D\u540E\u518D\u770B"})]}),i("div",{className:"video-pop-bottom",onClick:()=>l(!1),children:i("span",{children:"\u53D6\u6D88"})})]})]})};var Oe=b.memo(Fe);const We=({videoData:o,addDispatch:n})=>i(Ee,{children:i("div",{className:"container",children:o&&o.map(t=>i(Oe,{video:t,addDispatch:n},t.id))})});export{Ve as S,We as V};
