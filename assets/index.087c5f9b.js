import{C as h,B as f,D as u,E as $,G as b,s as r,p as i,r as k,j as e,d as o,L,A as c,T as C}from"./index.2ef2ee1b.js";import{a as _,b as N}from"./request.8ab5977e.js";import{_ as G}from"./index.26971bf5.js";import{b as v}from"./bilibili.03841b80.js";const x=n=>({type:h,data:n}),y=n=>({type:f,data:n}),w=n=>({type:u,data:n}),D=n=>({type:$,id:n}),O=n=>({type:b,id:n}),j=()=>n=>{_().then(a=>{n(x(a))})},B=()=>n=>{N().then(a=>{n(y(a)),n(w(!1))})},I=n=>a=>{a(D(n))},q=n=>a=>{a(O(n))},H=r.div`
  width: 100%;
  padding-bottom: ${i(20)};
  background: rgba(255, 255, 255, 0.1);
  .container {
    column-count: 2;
    column-gap: ${i(10)};
    margin-top: ${i(10)};
    margin-left: ${i(8)};
    margin-right: ${i(8)};
  }
  .adm-infinite-scroll {
    height: 0;
    background: rgba(255, 255, 255, 0.1);
  }
`,A=r.div`
  .good-box {
    width: 100%;
    break-inside: avoid;
    margin-bottom: ${i(10)};
    border-radius: ${i(4)};
    box-shadow: rgba(255, 255, 255, 0.2) ${i(2)} ${i(2)} ${i(2)};
    background-color: #fff;
    .good-img{
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: ${i(4)};
      }
    }
    .title {
      padding: ${i(2)};
      > span:first-child {
        background: rgba(50, 50, 50, 0.1);
        border-radius: ${i(4)};
        font-size: ${i(12)};
        transform: scale(0.83);
        padding: ${i(2)};
      }
      > span:nth-child(2) {
        font-style: oblique;
        font-size: ${i(14)};
        font-weight: 600;
        padding: ${i(2)};
      }
    }
    .rank_time {
      display: flex;
      justify-content: space-around;
      .rank {
        background-color: orange;
      }
      .time {
        background-color: skyblue;
      }
      span {
        padding: ${i(2)};
        font-size: ${i(12)};
      }
    }
    .price_coll {
      display: flex;
      justify-content: space-between;
      padding: ${i(2)};
      > span:first-child {
        padding: ${i(8)};
        font-size: ${i(18)};
        font-weight: bold;
      }
      .coll_num {
        padding-right: ${i(5)};
        padding-top: ${i(8)};
        i {
          font-size: ${i(18)};
          margin-top: ${i(2)};
          &.active {
            color: red;
          }
        }
        span {
          font-size: ${i(16)};
          padding-left: ${i(2)};
        }
      }
    }
  }
`,R=n=>{const{good:a,addDispatch:l,delDispatch:g}=n,[t,d]=k.exports.useState(!1),p=async s=>{d(!0),await l(s),C.show({content:"\u6536\u85CF\u6210\u529F",position:"bottom"})},m=s=>{d(!1),g(s)};return e(A,{children:o("div",{className:"good-box",children:[e(L,{to:`/vip/good/${a.id}`,children:e("div",{className:"good-img",children:e(G,{placeholder:e("img",{width:"100%",height:"100%",src:v,alt:""}),children:e("img",{src:a.img,alt:""})})})}),o("div",{className:"title",children:[a.info?e("span",{children:a.info}):"",e("span",{children:a.title})]}),o("div",{className:"rank_time",children:[e("div",{className:"rank",children:a.rank?e("span",{children:a.rank}):""}),e("div",{className:"time",children:a.time?e("span",{children:a.time}):""})]}),o("div",{className:"price_coll",children:[o("span",{children:["\xA5",a.price]}),o("div",{className:"coll_num",children:[t?e("i",{className:c("iconfont","icon-aixin1","active"),onClick:()=>m(a.id)}):e("i",{className:c("iconfont","icon-aixin3"),onClick:()=>p(a.id)}),e("span",{children:t?a.collection+1:a.collection})]})]})]})})};export{R as G,H as W,B as a,I as b,q as d,j as g};
