import{r as l,H as G,y as Q,j as r,A as C,z as V,R as v,I as U,J as de,K as ue,d as I,M as T,N as K,O as fe,Q as pe,s as L,p as s,T as me,b as ge}from"./index.60f5fab3.js";import{c as he}from"./request.f20c2d41.js";import{a as ve}from"./index.15790e54.js";import{_ as we}from"./index.4f01f3f3.js";var be=function(t){return function(o,n){var a=l.exports.useRef(!1);t(function(){return function(){a.current=!1}},[]),t(function(){if(!a.current)a.current=!0;else return o()},n)}},xe=be(l.exports.useEffect),$e=!!(typeof window!="undefined"&&window.document&&window.document.createElement),ye=$e,ke=ye?l.exports.useLayoutEffect:l.exports.useEffect,Ie=ke,B={},Pe=G&&G.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(B,"__esModule",{value:!0});var X=B.staged=void 0;const Ne=Pe(l.exports);function Y(t){return typeof t=="function"?Ne.default.createElement(Se,{stage:t}):t}function Se(t){const o=t.stage();return Y(o)}function Ee(t){return function(n,a){const u=t(n,a);return Y(u)}}X=B.staged=Ee;const k="adm-page-indicator",Ce={color:"primary",direction:"horizontal"},Me=l.exports.memo(t=>{const o=Q(Ce,t),n=[];for(let a=0;a<o.total;a++)n.push(r("div",{className:C(`${k}-dot`,{[`${k}-dot-active`]:o.current===a})},a));return V(o,r("div",{className:C(k,`${k}-${o.direction}`,`${k}-color-${o.color}`),children:n}))});var _e=Me;const Z=t=>V(t,v.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children));function je(t){const[o,n]=l.exports.useState(t),a=l.exports.useRef(o);return l.exports.useEffect(()=>{a.current=o},[o]),[o,n,a]}function Re(t,o){const n=Object.keys(t),a=Object.keys(o),u=new Set([...n,...a]),g={};return u.forEach(w=>{const h=t[w],d=o[w];typeof h=="function"&&typeof d=="function"?g[w]=function(...f){h(...f),d(...f)}:g[w]=h||d}),g}const m="adm-swiper",ze={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},Te={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let E;const Oe=l.exports.forwardRef(X((t,o)=>{const n=Q(Te,t),[a]=l.exports.useState({}),u=n.direction==="vertical",g=n.slideSize/100,w=n.trackOffset/100,{validChildren:h,count:d}=l.exports.useMemo(()=>{let f=0;return{validChildren:v.Children.map(n.children,b=>v.isValidElement(b)?b.type!==Z?(U("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(f++,b):null),count:f}},[n.children]);return d===0||!h?(U("Swiper","`Swiper` needs at least one child."),null):()=>{let f=n.loop;g*(d-1)<1&&(f=!1);const M=l.exports.useRef(null);function b(){const e=M.current;return e?(u?e.offsetHeight:e.offsetWidth)*n.slideSize/100:0}const[$,ee]=l.exports.useState(n.defaultIndex);xe(()=>{var e;(e=n.onIndexChange)===null||e===void 0||e.call(n,$)},[$]);const[W,A,_]=je(!1);function P(e){let i=0,c=d-1;return n.stuckAtBoundary&&(i+=w/g,c-=(1-g-w)/g),T(e,i,c)}const[{position:x},j]=de(()=>({position:P($)*100,config:{tension:200,friction:30},onRest:()=>{if(_.current||!f)return;const e=x.get(),i=100*d,c=O(e,i);c!==e&&j.start({position:c,immediate:!0})}}),[d]),R=l.exports.useRef(null);function te(){var e;(e=R.current)===null||e===void 0||e.call(R),_.current=!1}const ne=ue(e=>{if(R.current=e.cancel,!e.intentional||(e.first&&!E&&(E=a),E!==a))return;E=e.last?void 0:a;const i=b();if(!i)return;const c=u?1:0,p=e.offset[c],N=e.direction[c],S=e.velocity[c];if(A(!0),!e.last)j.start({position:p*100/i,immediate:!0});else{const F=Math.floor(p/i),ce=F+1,le=Math.round((p+S*2e3*N)/i);y(T(le,F,ce)),window.setTimeout(()=>{A(!1)})}},{transform:([e,i])=>[-e,-i],from:()=>{const e=b();return[x.get()/100*e,x.get()/100*e]},triggerAllEvents:!0,bounds:()=>{if(f)return{};const e=b(),i=P(0)*e,c=P(d-1)*e;return u?{top:i,bottom:c}:{left:i,right:c}},rubberband:n.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function y(e,i=!1){const c=Math.round(e),p=f?O(c,d):T(c,0,d-1);ee(p),j.start({position:(f?c:P(c))*100,immediate:i})}function D(){y(Math.round(x.get()/100)+1)}function oe(){y(Math.round(x.get()/100)-1)}l.exports.useImperativeHandle(o,()=>({swipeTo:y,swipeNext:D,swipePrev:oe})),Ie(()=>{const e=h.length-1;$>e&&y(e,!0)});const{autoplay:q,autoplayInterval:z}=n;l.exports.useEffect(()=>{if(!q||W)return;let e;function i(){e=window.setTimeout(i,z),D()}return e=window.setTimeout(i,z),()=>{e&&window.clearTimeout(e)}},[q,z,W,d]);function re(){return f?r("div",{className:`${m}-track-inner`,children:v.Children.map(h,(e,i)=>v.createElement(K.div,{className:`${m}-slide`,style:{[u?"y":"x"]:x.to(c=>{let p=-c+i*100;const N=d*100,S=N/2;return p=O(p+S,N)-S,`${p}%`}),[u?"top":"left"]:`-${i*100}%`}},e))}):v.createElement(K.div,{className:`${m}-track-inner`,style:{[u?"y":"x"]:x.to(e=>`${-e}%`)}},v.Children.map(h,e=>r("div",{className:`${m}-slide`,children:e})))}const ie={"--slide-size":`${n.slideSize}%`,"--track-offset":`${n.trackOffset}%`},se=Object.assign({},n.allowTouchMove?ne():{}),H={};for(const e of n.stopPropagation){const i=ze[e];H[i]=function(c){c.stopPropagation()}}const ae=Re(se,H);return V(n,I("div",{className:C(m,`${m}-${n.direction}`),style:ie,children:[r("div",{...Object.assign({ref:M,className:C(`${m}-track`,{[`${m}-track-allow-touch-move`]:n.allowTouchMove}),onClickCapture:e=>{_.current&&e.stopPropagation(),te()}},ae),children:re()}),n.indicator===void 0?r("div",{className:`${m}-indicator`,children:r(_e,{...Object.assign({},n.indicatorProps,{total:d,current:$,direction:n.direction})})}):n.indicator(d,$)]}))}}));function O(t,o){const n=t%o;return n<0?n+o:n}var J=ve(Oe,{Item:Z});const Ve=t=>({type:fe,data:t}),Le=t=>({type:pe,data:t}),Je=()=>t=>{he().then(o=>{t(Ve(o)),t(Le(!1))})},Be=L.div`
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
`;function Qe(){const o=["https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/o3/o3wel5.jpg","https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/m9/m953jy.jpg","https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/wq/wqgq7p.jpg","https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/o3/o3edql.jpg"].map((n,a)=>r(J.Item,{children:r("div",{className:"content",style:{backgroundImage:`url(${n})`},onClick:()=>{me.show(`\u4F60\u70B9\u51FB\u4E86\u7535\u5F71 ${a+1}`)}})},a));return r(Be,{children:r("div",{className:"container",children:r(J,{autoplay:!0,loop:!0,children:o})})})}const We=L.div`
  width: 100%;
  background: ${ge["background-color"]};
  padding-bottom: ${s(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;var Ae="./assets/bilibili.01065c11.gif";const De=L.div`
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
`,qe=({video:t})=>r(De,{children:I("div",{className:"video-box",children:[I("div",{className:"video-img",children:[r(we,{placeholder:r("img",{width:"100%",height:"100%",src:Ae,alt:""}),children:r("img",{src:t.img})}),I("div",{className:"data",children:[r("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),r("span",{children:t.bofang}),r("i",{className:"iconfont icon-pinglun"}),r("span",{children:t.pinglun}),r("span",{children:t.time})]})]}),I("div",{className:"video-info",children:[r("div",{className:"title",children:t.title}),r("div",{className:"up",children:t.up})]})]},t.id)});var He=v.memo(qe);const Xe=({videoData:t})=>r(We,{children:r("div",{className:"container",children:t&&t.map((o,n)=>r(He,{video:o},n))})});export{Qe as S,Xe as V,Je as g};
