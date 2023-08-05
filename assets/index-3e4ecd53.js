import{r as c,W as H,j as o,o as M,w as V,R as v,K as se,V as ae,d as b,M as T,N as K,s as F,p as i,aj as ce,T as X,b as le}from"./index-1f87f03b.js";import{s as de}from"./actionCreators-192af3e3.js";import{u as ue,P as fe}from"./popup-0a9f3ee4.js";import{c as pe,M as me}from"./MoreOutline-379060ab.js";import{a as he}from"./attach-properties-to-component-a2c66ef2.js";import{_ as ge}from"./index-ae2775d6.js";const be=pe(c.useEffect);function ve(n){return c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n,{style:Object.assign({verticalAlign:"-0.125em"},n.style),className:["antd-mobile-icon",n.className].filter(Boolean).join(" ")}),c.createElement("g",{id:"ClockCircleOutline-ClockCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"ClockCircleOutline-编组"},c.createElement("rect",{id:"ClockCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),c.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M24.6,14 C24.8209139,14 25,14.1790861 25,14.4 L25,23.1715729 C25,23.2776595 25.0337142,23.38027 25.0952092,23.4650801 L25.1464466,23.5251263 L33.2778175,31.6564971 C33.4340272,31.8127068 33.4340272,32.0659728 33.2778175,32.2221825 L31.7221825,33.7778175 C31.5659728,33.9340272 31.3127068,33.9340272 31.1564971,33.7778175 L23.0251263,25.6464466 C22.4192395,25.0405598 22.0584325,24.2354066 22.0065089,23.3850222 L22,23.1715729 L22,14.4 C22,14.1790861 22.1790861,14 22.4,14 L24.6,14 Z",id:"ClockCircleOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}const y="adm-page-indicator",we={color:"primary",direction:"horizontal"},$e=c.memo(n=>{const r=H(we,n),t=[];for(let l=0;l<r.total;l++)t.push(o("div",{className:M(`${y}-dot`,{[`${y}-dot-active`]:r.current===l})},l));return V(r,o("div",{className:M(y,`${y}-${r.direction}`,`${y}-color-${r.color}`),children:t}))});const q=n=>V(n,v.createElement("div",{className:"adm-swiper-item",onClick:n.onClick},n.children));function xe(n){const[r,t]=c.useState(n),l=c.useRef(r);return c.useEffect(()=>{l.current=r},[r]),[r,t,l]}function Ce(n,r){const t=Object.keys(n),l=Object.keys(r),u=new Set([...t,...l]),p={};return u.forEach(w=>{const g=n[w],d=r[w];typeof g=="function"&&typeof d=="function"?p[w]=function(...f){g(...f),d(...f)}:p[w]=g||d}),p}const h="adm-swiper",ke={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},ye={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let E;const Ne=c.forwardRef(de((n,r)=>{const t=H(ye,n),[l]=c.useState({}),u=t.direction==="vertical",p=t.slideSize/100,w=t.trackOffset/100,{validChildren:g,count:d}=c.useMemo(()=>{let f=0;return{validChildren:v.Children.map(t.children,$=>!v.isValidElement($)||$.type!==q?null:(f++,$)),count:f}},[t.children]);return d===0||!g?null:()=>{let f=t.loop;p*(d-1)<1&&(f=!1);const S=c.useRef(null);function $(){const e=S.current;return e?(u?e.offsetHeight:e.offsetWidth)*t.slideSize/100:0}const[C,G]=c.useState(t.defaultIndex);be(()=>{var e;(e=t.onIndexChange)===null||e===void 0||e.call(t,C)},[C]);const[W,B,z]=xe(!1);function N(e){let s=0,a=d-1;return t.stuckAtBoundary&&(s+=w/p,a-=(1-p-w)/p),T(e,s,a)}const[{position:x},O]=se(()=>({position:N(C)*100,config:{tension:200,friction:30},onRest:()=>{if(z.current||!f)return;const e=x.get(),s=100*d,a=L(e,s);a!==e&&O.start({position:a,immediate:!0})}}),[d]),R=c.useRef(null);function J(){var e;(e=R.current)===null||e===void 0||e.call(R),z.current=!1}const Q=ae(e=>{if(R.current=e.cancel,!e.intentional||(e.first&&!E&&(E=l),E!==l))return;E=e.last?void 0:l;const s=$();if(!s)return;const a=u?1:0,m=e.offset[a],P=e.direction[a],I=e.velocity[a];if(B(!0),!e.last)O.start({position:m*100/s,immediate:!0});else{const D=Math.floor(m/s),ie=D+1,re=Math.round((m+I*2e3*P)/s);k(T(re,D,ie)),window.setTimeout(()=>{B(!1)})}},{transform:([e,s])=>[-e,-s],from:()=>{const e=$();return[x.get()/100*e,x.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(f)return{};const e=$(),s=N(0)*e,a=N(d-1)*e;return u?{top:s,bottom:a}:{left:s,right:a}},rubberband:t.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function k(e,s=!1){const a=Math.round(e),m=f?L(a,d):T(a,0,d-1);G(m),O.start({position:(f?a:N(a))*100,immediate:s})}function U(){k(Math.round(x.get()/100)+1)}function Y(){k(Math.round(x.get()/100)-1)}c.useImperativeHandle(r,()=>({swipeTo:k,swipeNext:U,swipePrev:Y})),ue(()=>{const e=g.length-1;C>e&&k(e,!0)});const{autoplay:_,autoplayInterval:j}=t;c.useEffect(()=>{if(!_||W)return;let e;function s(){e=window.setTimeout(s,j),U()}return e=window.setTimeout(s,j),()=>{e&&window.clearTimeout(e)}},[_,j,W,d]);function ee(){return f?o("div",{className:`${h}-track-inner`,children:v.Children.map(g,(e,s)=>v.createElement(K.div,{className:`${h}-slide`,style:{[u?"y":"x"]:x.to(a=>{let m=-a+s*100;const P=d*100,I=P/2;return m=L(m+I,P)-I,`${m}%`}),[u?"top":"left"]:`-${s*100}%`}},e))}):v.createElement(K.div,{className:`${h}-track-inner`,style:{[u?"y":"x"]:x.to(e=>`${-e}%`)}},v.Children.map(g,e=>o("div",{className:`${h}-slide`,children:e})))}const te={"--slide-size":`${t.slideSize}%`,"--track-offset":`${t.trackOffset}%`},ne=Object.assign({},t.allowTouchMove?Q():{}),A={};for(const e of t.stopPropagation){const s=ke[e];A[s]=function(a){a.stopPropagation()}}const oe=Ce(ne,A);return V(t,b("div",{className:M(h,`${h}-${t.direction}`),style:te,children:[o("div",{...Object.assign({ref:S,className:M(`${h}-track`,{[`${h}-track-allow-touch-move`]:t.allowTouchMove}),onClickCapture:e=>{z.current&&e.stopPropagation(),J()}},oe),children:ee()}),t.indicator===void 0?o("div",{className:`${h}-indicator`,children:o($e,{...Object.assign({},t.indicatorProps,{total:d,current:C,direction:t.direction})})}):t.indicator(d,C)]}))}}));function L(n,r){const t=n%r;return t<0?t+r:t}const Z=he(Ne,{Item:q}),Pe=F.div`
  .container {
    width: 100%;
    padding: ${i(5)} ${i(5)} 0 ${i(5)};
    .content {
      height: ${i(196)};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${i(2)};
      user-select: none;
      background-size: cover;
    } 
  }
`;function Fe(){const n=ce.map(r=>o(Z.Item,{children:o("div",{className:"content",style:{backgroundImage:`url(${r.img})`},onClick:()=>{X.show(`你点击了电影 ${r.id}`)}})},r.id));return o(Pe,{children:o("div",{className:"container",children:o(Z,{autoplay:!0,loop:!0,children:n})})})}const Ie=F.div`
  width: 100%;
  padding-bottom: ${i(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,Ee=""+new URL("bilibili-01065c11.gif",import.meta.url).href,Me=F.div`
  .video-box {
    margin: ${i(5)};
    border-radius: ${i(2)};
    border: ${i(1)} solid ${le["border-color"]};
    .video-img {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: ${i(2)};
      }
      .data {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${i(22)};
        line-height: ${i(22)};
        color: #fff;
        background: rgba(50, 50, 50, 0.5);
        border-radius: ${i(2)};
        display: flex;
        justify-content: space-around;
        i {
          font-size: ${i(17)};
        }
        span {
          font-size: ${i(12)};
        }
      }
    }
    .video-info {
      position: relative;
      height: ${i(76)};
      background: #fff;
      .title {
        padding: ${i(2)};
        font-size: ${i(14)};
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
        font-size: ${i(12)};
        padding: ${i(2)};
        border: ${i(1)} solid pink;
        border-radius: ${i(2)};
        bottom: ${i(4)};
        left: ${i(4)};
      }
      .video-pop {
        position: absolute;
        bottom: ${i(8)};
        right: ${i(6)};
        font-size: ${i(18)};
        color: rgb(159, 157, 159);
        transform: rotate(90deg);
      }
    }
  }
`;const Se=({video:n,addDispatch:r})=>{const[t,l]=c.useState(!1),u=async p=>{await r(p),X.show({content:"添加成功",position:"bottom"}),l(!1)};return b(Me,{children:[b("div",{className:"video-box",children:[b("div",{className:"video-img",children:[o(ge,{placeholder:o("img",{width:"100%",height:"100%",src:Ee,alt:""}),children:o("img",{src:n.img})}),b("div",{className:"data",children:[o("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),o("span",{children:n.bofang}),o("i",{className:"iconfont icon-pinglun"}),o("span",{children:n.pinglun}),o("span",{children:n.time})]})]}),b("div",{className:"video-info",children:[o("div",{className:"title",children:n.title}),o("div",{className:"up",children:n.up}),o(me,{className:"video-pop",onClick:()=>{l(!0)}})]})]},n.id),b(fe,{visible:t,onMaskClick:()=>{l(!1)},bodyStyle:{height:"5rem"},children:[b("div",{className:"add-wait",onClick:()=>u(n.id),children:[o(ve,{className:"wait-icon"}),o("span",{children:"添加至稍后再看"})]}),o("div",{className:"video-pop-bottom",onClick:()=>l(!1),children:o("span",{children:"取消"})})]})]})},ze=v.memo(Se),We=({videoData:n,addDispatch:r})=>o(Ie,{children:o("div",{className:"container",children:n&&n.map(t=>o(ze,{video:t,addDispatch:r},t.id))})});export{Fe as S,We as V};
