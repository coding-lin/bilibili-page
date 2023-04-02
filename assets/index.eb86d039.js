import{r as d,ac as U,w as J,j as r,y as C,x as O,R as v,ad as q,X as de,aa as ue,d as P,a3 as j,$ as K,ae as fe,af as pe,s as L,p as s,ag as me,T as ge,b as he}from"./index.5bf6a9d8.js";import{c as ve}from"./request.5d8a1104.js";import{c as be,u as xe}from"./index.a9635a26.js";import{a as $e}from"./attach-properties-to-component.6acef87d.js";import{_ as we}from"./index.521e6cef.js";var ye=be(d.exports.useEffect),W={},ke=U&&U.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(W,"__esModule",{value:!0});var Q=W.staged=void 0;const Pe=ke(d.exports);function Y(t){return typeof t=="function"?Pe.default.createElement(Ie,{stage:t}):t}function Ie(t){const o=t.stage();return Y(o)}function Ne(t){return function(n,l){const u=t(n,l);return Y(u)}}Q=W.staged=Ne;const k="adm-page-indicator",Se={color:"primary",direction:"horizontal"},Ee=d.exports.memo(t=>{const o=J(Se,t),n=[];for(let l=0;l<o.total;l++)n.push(r("div",{className:C(`${k}-dot`,{[`${k}-dot-active`]:o.current===l})},l));return O(o,r("div",{className:C(k,`${k}-${o.direction}`,`${k}-color-${o.color}`),children:n}))});var Ce=Ee;const Z=t=>O(t,v.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children));function _e(t){const[o,n]=d.exports.useState(t),l=d.exports.useRef(o);return d.exports.useEffect(()=>{l.current=o},[o]),[o,n,l]}function Me(t,o){const n=Object.keys(t),l=Object.keys(o),u=new Set([...n,...l]),g={};return u.forEach(b=>{const h=t[b],c=o[b];typeof h=="function"&&typeof c=="function"?g[b]=function(...f){h(...f),c(...f)}:g[b]=h||c}),g}const m="adm-swiper",Re={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},Te={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let E;const ze=d.exports.forwardRef(Q((t,o)=>{const n=J(Te,t),[l]=d.exports.useState({}),u=n.direction==="vertical",g=n.slideSize/100,b=n.trackOffset/100,{validChildren:h,count:c}=d.exports.useMemo(()=>{let f=0;return{validChildren:v.Children.map(n.children,x=>v.isValidElement(x)?x.type!==Z?(q("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(f++,x):null),count:f}},[n.children]);return c===0||!h?(q("Swiper","`Swiper` needs at least one child."),null):()=>{let f=n.loop;g*(c-1)<1&&(f=!1);const _=d.exports.useRef(null);function x(){const e=_.current;return e?(u?e.offsetHeight:e.offsetWidth)*n.slideSize/100:0}const[w,ee]=d.exports.useState(n.defaultIndex);ye(()=>{var e;(e=n.onIndexChange)===null||e===void 0||e.call(n,w)},[w]);const[D,A,M]=_e(!1);function I(e){let i=0,a=c-1;return n.stuckAtBoundary&&(i+=b/g,a-=(1-g-b)/g),j(e,i,a)}const[{position:$},R]=de(()=>({position:I(w)*100,config:{tension:200,friction:30},onRest:()=>{if(M.current||!f)return;const e=$.get(),i=100*c,a=V(e,i);a!==e&&R.start({position:a,immediate:!0})}}),[c]),T=d.exports.useRef(null);function te(){var e;(e=T.current)===null||e===void 0||e.call(T),M.current=!1}const ne=ue(e=>{if(T.current=e.cancel,!e.intentional||(e.first&&!E&&(E=l),E!==l))return;E=e.last?void 0:l;const i=x();if(!i)return;const a=u?1:0,p=e.offset[a],N=e.direction[a],S=e.velocity[a];if(A(!0),!e.last)R.start({position:p*100/i,immediate:!0});else{const H=Math.floor(p/i),ce=H+1,le=Math.round((p+S*2e3*N)/i);y(j(le,H,ce)),window.setTimeout(()=>{A(!1)})}},{transform:([e,i])=>[-e,-i],from:()=>{const e=x();return[$.get()/100*e,$.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(f)return{};const e=x(),i=I(0)*e,a=I(c-1)*e;return u?{top:i,bottom:a}:{left:i,right:a}},rubberband:n.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function y(e,i=!1){const a=Math.round(e),p=f?V(a,c):j(a,0,c-1);ee(p),R.start({position:(f?a:I(a))*100,immediate:i})}function B(){y(Math.round($.get()/100)+1)}function oe(){y(Math.round($.get()/100)-1)}d.exports.useImperativeHandle(o,()=>({swipeTo:y,swipeNext:B,swipePrev:oe})),xe(()=>{const e=h.length-1;w>e&&y(e,!0)});const{autoplay:F,autoplayInterval:z}=n;d.exports.useEffect(()=>{if(!F||D)return;let e;function i(){e=window.setTimeout(i,z),B()}return e=window.setTimeout(i,z),()=>{e&&window.clearTimeout(e)}},[F,z,D,c]);function re(){return f?r("div",{className:`${m}-track-inner`,children:v.Children.map(h,(e,i)=>v.createElement(K.div,{className:`${m}-slide`,style:{[u?"y":"x"]:$.to(a=>{let p=-a+i*100;const N=c*100,S=N/2;return p=V(p+S,N)-S,`${p}%`}),[u?"top":"left"]:`-${i*100}%`}},e))}):v.createElement(K.div,{className:`${m}-track-inner`,style:{[u?"y":"x"]:$.to(e=>`${-e}%`)}},v.Children.map(h,e=>r("div",{className:`${m}-slide`,children:e})))}const ie={"--slide-size":`${n.slideSize}%`,"--track-offset":`${n.trackOffset}%`},se=Object.assign({},n.allowTouchMove?ne():{}),G={};for(const e of n.stopPropagation){const i=Re[e];G[i]=function(a){a.stopPropagation()}}const ae=Me(se,G);return O(n,P("div",{className:C(m,`${m}-${n.direction}`),style:ie,children:[r("div",{...Object.assign({ref:_,className:C(`${m}-track`,{[`${m}-track-allow-touch-move`]:n.allowTouchMove}),onClickCapture:e=>{M.current&&e.stopPropagation(),te()}},ae),children:re()}),n.indicator===void 0?r("div",{className:`${m}-indicator`,children:r(Ce,{...Object.assign({},n.indicatorProps,{total:c,current:w,direction:n.direction})})}):n.indicator(c,w)]}))}}));function V(t,o){const n=t%o;return n<0?n+o:n}var X=$e(ze,{Item:Z});const je=t=>({type:fe,data:t}),Ve=t=>({type:pe,data:t}),Ke=()=>t=>{ve().then(o=>{t(je(o)),t(Ve(!1))})},Oe=L.div`
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
`;function Xe(){const t=me.map(o=>r(X.Item,{children:r("div",{className:"content",style:{backgroundImage:`url(${o.img})`},onClick:()=>{ge.show(`\u4F60\u70B9\u51FB\u4E86\u7535\u5F71 ${o.id}`)}})},o.id));return r(Oe,{children:r("div",{className:"container",children:r(X,{autoplay:!0,loop:!0,children:t})})})}const Le=L.div`
  width: 100%;
  background: ${he["background-color"]};
  padding-bottom: ${s(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;var We="./assets/bilibili.01065c11.gif";const De=L.div`
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
`,Ae=({video:t})=>r(De,{children:P("div",{className:"video-box",children:[P("div",{className:"video-img",children:[r(we,{placeholder:r("img",{width:"100%",height:"100%",src:We,alt:""}),children:r("img",{src:t.img})}),P("div",{className:"data",children:[r("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),r("span",{children:t.bofang}),r("i",{className:"iconfont icon-pinglun"}),r("span",{children:t.pinglun}),r("span",{children:t.time})]})]}),P("div",{className:"video-info",children:[r("div",{className:"title",children:t.title}),r("div",{className:"up",children:t.up})]})]},t.id)});var Be=v.memo(Ae);const Je=({videoData:t})=>r(Le,{children:r("div",{className:"container",children:t&&t.map((o,n)=>r(Be,{video:o},n))})});export{Xe as S,Je as V,Ke as g};
