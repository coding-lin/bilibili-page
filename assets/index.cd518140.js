import{s,p as i,R as c,r as d,j as a,d as e,A as o}from"./index.60f5fab3.js";import{_ as m}from"./index.4f01f3f3.js";import{b as p}from"./bilibili.03841b80.js";const u=s.div`
  width: 100%;
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
    margin-bottom: 2.5rem;
  }
`,h=s.div`
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
`,g=({good:n})=>{const[r,t]=d.exports.useState(!1),l=()=>{t(!r)};return a(h,{children:e("div",{className:"good-box",children:[a("div",{className:"good-img",children:a(m,{placeholder:a("img",{width:"100%",height:"100%",src:p,alt:""}),children:a("img",{src:n.img})})}),e("div",{className:"title",children:[n.info?a("span",{children:n.info}):"",a("span",{children:n.title})]}),e("div",{className:"rank_time",children:[a("div",{className:"rank",children:n.rank?a("span",{children:n.rank}):""}),a("div",{className:"time",children:n.time?a("span",{children:n.time}):""})]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",n.price]}),e("div",{className:"coll_num",children:[a("i",{className:o("iconfont",{"icon-aixin3":!r},{"icon-aixin1":r},{active:r}),onClick:()=>l()}),a("span",{children:r?n.collection+1:n.collection})]})]})]},n.id)})};var k=c.memo(g);export{k as G,u as W};
