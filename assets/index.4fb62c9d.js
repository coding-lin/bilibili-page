import{C as h,B as f,D as u,E as b,G as $,s as r,p as i,r as k,j as e,d as s,A as c,T as C}from"./index.d6c1f6e9.js";import{a as L,b as _}from"./request.0ea96a1b.js";import{_ as N}from"./index.1deaab32.js";import{b as G}from"./bilibili.03841b80.js";const v=n=>({type:h,data:n}),x=n=>({type:f,data:n}),y=n=>({type:u,data:n}),w=n=>({type:b,id:n}),D=n=>({type:$,id:n}),T=()=>n=>{L().then(a=>{n(v(a))})},j=()=>n=>{_().then(a=>{n(x(a)),n(y(!1))})},B=n=>a=>{a(w(n))},I=n=>a=>{a(D(n))},q=r.div`
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
`,O=r.div`
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
`,H=n=>{const{good:a,addDispatch:l,delDispatch:g}=n,[t,d]=k.exports.useState(!1),p=async o=>{d(!0),await l(o),C.show({content:"\u6536\u85CF\u6210\u529F",position:"bottom"})},m=o=>{d(!1),g(o)};return e(O,{children:s("div",{className:"good-box",children:[e("div",{className:"good-img",children:e(N,{placeholder:e("img",{width:"100%",height:"100%",src:G,alt:""}),children:e("img",{src:a.img,alt:""})})}),s("div",{className:"title",children:[a.info?e("span",{children:a.info}):"",e("span",{children:a.title})]}),s("div",{className:"rank_time",children:[e("div",{className:"rank",children:a.rank?e("span",{children:a.rank}):""}),e("div",{className:"time",children:a.time?e("span",{children:a.time}):""})]}),s("div",{className:"price_coll",children:[s("span",{children:["\xA5",a.price]}),s("div",{className:"coll_num",children:[t?e("i",{className:c("iconfont","icon-aixin1","active"),onClick:()=>m(a.id)}):e("i",{className:c("iconfont","icon-aixin3"),onClick:()=>p(a.id)}),e("span",{children:t?a.collection+1:a.collection})]})]})]})})};export{H as G,q as W,j as a,B as b,I as d,T as g};
