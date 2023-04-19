import{s as r,p as i,r as h,j as a,d as o,L as f,A as t,T as $}from"./index.2af84c25.js";import{_ as b}from"./index.2f3a3956.js";import{b as u}from"./bilibili.03841b80.js";const N=r.div`
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
`,k=r.div`
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
`,y=c=>{const{good:n,addDispatch:l,delDispatch:p}=c,[s,d]=h.exports.useState(!1),g=async e=>{d(!0),await l(e),$.show({content:"\u6536\u85CF\u6210\u529F",position:"bottom"})},m=e=>{d(!1),p(e)};return a(k,{children:o("div",{className:"good-box",children:[a(f,{to:`/vip/good/${n.id}`,children:a("div",{className:"good-img",children:a(b,{placeholder:a("img",{width:"100%",height:"100%",src:u,alt:""}),children:a("img",{src:n.img,alt:""})})})}),o("div",{className:"title",children:[n.info?a("span",{children:n.info}):"",a("span",{children:n.title})]}),o("div",{className:"rank_time",children:[a("div",{className:"rank",children:n.rank?a("span",{children:n.rank}):""}),a("div",{className:"time",children:n.time?a("span",{children:n.time}):""})]}),o("div",{className:"price_coll",children:[o("span",{children:["\xA5",n.price]}),o("div",{className:"coll_num",children:[s?a("i",{className:t("iconfont","icon-aixin1","active"),onClick:()=>m(n.id)}):a("i",{className:t("iconfont","icon-aixin3"),onClick:()=>g(n.id)}),a("span",{children:s?n.collection+1:n.collection})]})]})]})})};export{y as G,N as W};
