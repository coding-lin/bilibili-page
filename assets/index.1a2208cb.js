import{r as l,N as U,D as Q,j as o,G as C,E as O,R as v,O as q,Q as de,V as ue,d as P,W as V,X as K,Y as fe,Z as pe,s as L,p as s,$ as me,T as ge,b as he}from"./index.2828fb23.js";import{c as ve}from"./request.ac1c9d8e.js";import{a as be}from"./index.6c022133.js";import{_ as xe}from"./index.bef50136.js";var we=function(t){return function(r,n){var c=l.exports.useRef(!1);t(function(){return function(){c.current=!1}},[]),t(function(){if(!c.current)c.current=!0;else return r()},n)}},$e=we(l.exports.useEffect),ye=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ke=ye,Pe=ke?l.exports.useLayoutEffect:l.exports.useEffect,Ie=Pe,W={},Ne=U&&U.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(W,"__esModule",{value:!0});var Y=W.staged=void 0;const Se=Ne(l.exports);function Z(t){return typeof t=="function"?Se.default.createElement(Ee,{stage:t}):t}function Ee(t){const r=t.stage();return Z(r)}function Ce(t){return function(n,c){const u=t(n,c);return Z(u)}}Y=W.staged=Ce;const k="adm-page-indicator",_e={color:"primary",direction:"horizontal"},Me=l.exports.memo(t=>{const r=Q(_e,t),n=[];for(let c=0;c<r.total;c++)n.push(o("div",{className:C(`${k}-dot`,{[`${k}-dot-active`]:r.current===c})},c));return O(r,o("div",{className:C(k,`${k}-${r.direction}`,`${k}-color-${r.color}`),children:n}))});var Re=Me;const J=t=>O(t,v.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children));function Te(t){const[r,n]=l.exports.useState(t),c=l.exports.useRef(r);return l.exports.useEffect(()=>{c.current=r},[r]),[r,n,c]}function ze(t,r){const n=Object.keys(t),c=Object.keys(r),u=new Set([...n,...c]),g={};return u.forEach(b=>{const h=t[b],d=r[b];typeof h=="function"&&typeof d=="function"?g[b]=function(...f){h(...f),d(...f)}:g[b]=h||d}),g}const m="adm-swiper",Ve={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},je={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let E;const Oe=l.exports.forwardRef(Y((t,r)=>{const n=Q(je,t),[c]=l.exports.useState({}),u=n.direction==="vertical",g=n.slideSize/100,b=n.trackOffset/100,{validChildren:h,count:d}=l.exports.useMemo(()=>{let f=0;return{validChildren:v.Children.map(n.children,x=>v.isValidElement(x)?x.type!==J?(q("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(f++,x):null),count:f}},[n.children]);return d===0||!h?(q("Swiper","`Swiper` needs at least one child."),null):()=>{let f=n.loop;g*(d-1)<1&&(f=!1);const _=l.exports.useRef(null);function x(){const e=_.current;return e?(u?e.offsetHeight:e.offsetWidth)*n.slideSize/100:0}const[$,ee]=l.exports.useState(n.defaultIndex);$e(()=>{var e;(e=n.onIndexChange)===null||e===void 0||e.call(n,$)},[$]);const[B,D,M]=Te(!1);function I(e){let i=0,a=d-1;return n.stuckAtBoundary&&(i+=b/g,a-=(1-g-b)/g),V(e,i,a)}const[{position:w},R]=de(()=>({position:I($)*100,config:{tension:200,friction:30},onRest:()=>{if(M.current||!f)return;const e=w.get(),i=100*d,a=j(e,i);a!==e&&R.start({position:a,immediate:!0})}}),[d]),T=l.exports.useRef(null);function te(){var e;(e=T.current)===null||e===void 0||e.call(T),M.current=!1}const ne=ue(e=>{if(T.current=e.cancel,!e.intentional||(e.first&&!E&&(E=c),E!==c))return;E=e.last?void 0:c;const i=x();if(!i)return;const a=u?1:0,p=e.offset[a],N=e.direction[a],S=e.velocity[a];if(D(!0),!e.last)R.start({position:p*100/i,immediate:!0});else{const H=Math.floor(p/i),ce=H+1,le=Math.round((p+S*2e3*N)/i);y(V(le,H,ce)),window.setTimeout(()=>{D(!1)})}},{transform:([e,i])=>[-e,-i],from:()=>{const e=x();return[w.get()/100*e,w.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(f)return{};const e=x(),i=I(0)*e,a=I(d-1)*e;return u?{top:i,bottom:a}:{left:i,right:a}},rubberband:n.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function y(e,i=!1){const a=Math.round(e),p=f?j(a,d):V(a,0,d-1);ee(p),R.start({position:(f?a:I(a))*100,immediate:i})}function A(){y(Math.round(w.get()/100)+1)}function re(){y(Math.round(w.get()/100)-1)}l.exports.useImperativeHandle(r,()=>({swipeTo:y,swipeNext:A,swipePrev:re})),Ie(()=>{const e=h.length-1;$>e&&y(e,!0)});const{autoplay:G,autoplayInterval:z}=n;l.exports.useEffect(()=>{if(!G||B)return;let e;function i(){e=window.setTimeout(i,z),A()}return e=window.setTimeout(i,z),()=>{e&&window.clearTimeout(e)}},[G,z,B,d]);function oe(){return f?o("div",{className:`${m}-track-inner`,children:v.Children.map(h,(e,i)=>v.createElement(K.div,{className:`${m}-slide`,style:{[u?"y":"x"]:w.to(a=>{let p=-a+i*100;const N=d*100,S=N/2;return p=j(p+S,N)-S,`${p}%`}),[u?"top":"left"]:`-${i*100}%`}},e))}):v.createElement(K.div,{className:`${m}-track-inner`,style:{[u?"y":"x"]:w.to(e=>`${-e}%`)}},v.Children.map(h,e=>o("div",{className:`${m}-slide`,children:e})))}const ie={"--slide-size":`${n.slideSize}%`,"--track-offset":`${n.trackOffset}%`},se=Object.assign({},n.allowTouchMove?ne():{}),F={};for(const e of n.stopPropagation){const i=Ve[e];F[i]=function(a){a.stopPropagation()}}const ae=ze(se,F);return O(n,P("div",{className:C(m,`${m}-${n.direction}`),style:ie,children:[o("div",{...Object.assign({ref:_,className:C(`${m}-track`,{[`${m}-track-allow-touch-move`]:n.allowTouchMove}),onClickCapture:e=>{M.current&&e.stopPropagation(),te()}},ae),children:oe()}),n.indicator===void 0?o("div",{className:`${m}-indicator`,children:o(Re,{...Object.assign({},n.indicatorProps,{total:d,current:$,direction:n.direction})})}):n.indicator(d,$)]}))}}));function j(t,r){const n=t%r;return n<0?n+r:n}var X=be(Oe,{Item:J});const Le=t=>({type:fe,data:t}),We=t=>({type:pe,data:t}),Qe=()=>t=>{ve().then(r=>{t(Le(r)),t(We(!1))})},Be=L.div`
  .container {
    width: 100%;
    padding: ${s(5)} ${s(5)} 0 ${s(5)};
    background: rgba(50, 50, 50, 0.06);
    .content {
      height: ${s(196)};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${s(2)};
      user-select: none;
      background-size: cover;
    } 
  }
`;function Ye(){const t=me.map(r=>o(X.Item,{children:o("div",{className:"content",style:{backgroundImage:`url(${r.img})`},onClick:()=>{ge.show(`\u4F60\u70B9\u51FB\u4E86\u7535\u5F71 ${r.id}`)}})},r.id));return o(Be,{children:o("div",{className:"container",children:o(X,{autoplay:!0,loop:!0,children:t})})})}const De=L.div`
  width: 100%;
  background: ${he["background-color"]};
  padding-bottom: ${s(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;var Ae="./assets/bilibili.01065c11.gif";const Ge=L.div`
  .video-box {
    margin: ${s(5)};
    border-radius: ${s(2)};
    .video-img {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: ${s(2)};
      }
      .data {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${s(22)};
        line-height: ${s(22)};
        color: #fff;
        background: rgba(50, 50, 50, 0.5);
        border-radius: ${s(2)};
        display: flex;
        justify-content: space-around;
        i {
          font-size: ${s(17)};
        }
        span {
          font-size: ${s(12)};
        }
      }
    }
    .video-info {
      position: relative;
      height: ${s(76)};
      background: #fff;
      .title {
        padding: ${s(2)};
        font-size: ${s(14)};
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
        font-size: ${s(12)};
        padding: ${s(2)};
        border: ${s(1)} solid pink;
        border-radius: ${s(2)};
        bottom: ${s(4)};
        left: ${s(4)};
      }
    }
  }
`,Fe=({video:t})=>o(Ge,{children:P("div",{className:"video-box",children:[P("div",{className:"video-img",children:[o(xe,{placeholder:o("img",{width:"100%",height:"100%",src:Ae,alt:""}),children:o("img",{src:t.img})}),P("div",{className:"data",children:[o("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),o("span",{children:t.bofang}),o("i",{className:"iconfont icon-pinglun"}),o("span",{children:t.pinglun}),o("span",{children:t.time})]})]}),P("div",{className:"video-info",children:[o("div",{className:"title",children:t.title}),o("div",{className:"up",children:t.up})]})]},t.id)});var He=v.memo(Fe);const Ze=({videoData:t})=>o(De,{children:o("div",{className:"container",children:t&&t.map((r,n)=>o(He,{video:r},n))})});export{Ye as S,Ze as V,Qe as g};
