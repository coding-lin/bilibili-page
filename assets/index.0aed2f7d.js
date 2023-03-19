import{s as r,p as i,R as c,r as d,j as a,d as e,l as o}from"./index.4ee80991.js";import{_ as m}from"./index.08f98c20.js";import{b as p}from"./bilibili.74d742dd.js";const u=r.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding-bottom: ${i(54)};
  .container {
    column-count: 2;
    column-gap: ${i(10)};
    margin-top: ${i(10)};
    margin-left: ${i(8)};
    margin-right: ${i(8)};
  }
`,h=r.div`
  .good-box {
    width: 100%;
    break-inside: avoid;
    margin-bottom: ${i(10)};
    border-radius: ${i(4)};
    box-shadow: rgba(255, 255, 255, 0.2) ${i(2)} ${i(2)} ${i(2)};
    background-color: #fff;
    .good-img {
      width: 100%;
      img {
        border-radius: ${i(4)};
        width: 100%;
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
        padding: ${i(4)};
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
`,g=({good:n})=>{const[s,t]=d.exports.useState(!1),l=()=>{t(!s)};return a(h,{children:e("div",{className:"good-box",children:[a("div",{className:"good-img",children:a(m,{placeholder:a("img",{width:"100%",height:"100%",src:p}),children:a("img",{src:n.img})})}),e("div",{className:"title",children:[n.info?a("span",{children:n.info}):"",a("span",{children:n.title})]}),e("div",{className:"rank_time",children:[a("div",{className:"rank",children:n.rank?a("span",{children:n.rank}):""}),a("div",{className:"time",children:n.time?a("span",{children:n.time}):""})]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",n.price]}),e("div",{className:"coll_num",children:[a("i",{className:o("iconfont",{"icon-aixin3":!s},{"icon-aixin1":s},{active:s}),onClick:()=>l()}),a("span",{children:s?n.collection+1:n.collection})]})]})]},n.id)})};var k=c.memo(g);export{k as G,u as W};
