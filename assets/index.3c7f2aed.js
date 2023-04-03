import{s,p as i,r as g,j as a,d as e,y as p,T as m}from"./index.e8af86ff.js";import{_ as h}from"./index.4cd04c16.js";import{b as f}from"./bilibili.03841b80.js";const v=s.div`
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
`,$=s.div`
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
`,x=d=>{const{good:n,addDispatch:r}=d,[o,t]=g.exports.useState(!1),c=l=>{t(!o),r(l),m.show("\u6536\u85CF\u6210\u529F")};return a($,{children:e("div",{className:"good-box",children:[a("div",{className:"good-img",children:a(h,{placeholder:a("img",{width:"100%",height:"100%",src:f,alt:""}),children:a("img",{src:n.img,alt:""})})}),e("div",{className:"title",children:[n.info?a("span",{children:n.info}):"",a("span",{children:n.title})]}),e("div",{className:"rank_time",children:[a("div",{className:"rank",children:n.rank?a("span",{children:n.rank}):""}),a("div",{className:"time",children:n.time?a("span",{children:n.time}):""})]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",n.price]}),e("div",{className:"coll_num",children:[a("i",{className:p("iconfont",{"icon-aixin1":o},{"icon-aixin3":!o},{active:o}),onClick:()=>c(n.id)}),a("span",{children:o?n.collection+1:n.collection})]})]})]})})};export{x as G,v as W};
