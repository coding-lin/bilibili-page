import{s as d,R as p,r as t,d as n,j as a,m as c}from"./index.bb0e3ab2.js";import{_ as o}from"./index.8ac5dedc.js";import{b as l}from"./bilibili.06cbb90c.js";const f=d.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding-bottom: 54px;
  .container {
    column-count: 2;
    column-gap: 10px;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    .good-box { 
      width: 100%;
      break-inside: avoid;
      /* margin: 10px auto; */
      margin-bottom: 10px;
      border-radius: 4px;
      box-shadow: rgba(255, 255, 255, 0.2) 2px 2px 2px;
      background-color: #fff;
      .good-img {
        width: 100%;
        img {
          border-radius: 4px;
          width: 100%;
        }
      }
      .title {
        padding: 2px;
        >span:first-child {
          background: rgba(50, 50, 50, 0.1);
          border-radius: 4px;
          font-size: 10px;
          padding: 2px;
        }
        >span:nth-child(2) {
          font-style: oblique;
          font-size: 14px;
          font-weight: 600;
          padding: 2px;
        }
      }
      .rank_time {
        display: flex;
        justify-content: space-around;
        padding: 2px;
        >span:first-child {
          background-color: orange;
          border-radius: 4px;
          padding: 1px;
          font-size: 12px;
        }
        >span:nth-child(2) {
          font-size: 12px;
          border-radius: 4px;
          padding: 1px;
          background-color: skyblue;
        }
      }
      .price_coll {
        display: flex;
        justify-content: space-between;
        padding: 2px;
        >span:first-child {
          padding: 8px;
          font-size: 18px;
          font-weight: 600;
        }
        >span:nth-child(2) {
          padding: 6px;
          i {
            font-size: 20px;
            padding: 2px;
            &.active {
              color: red;
            }
          }
          span {
            padding: 2px;
          }
        }
      }
    }
  }
`,x=({good:i})=>{const[e,s]=t.exports.useState(!1),r=()=>{s(!e)};return n("div",{className:"good-box",children:[a("div",{className:"good-img",children:a(o,{placeholder:a("img",{width:"100%",height:"100%",src:l}),children:a("img",{src:i.img})})}),n("div",{className:"title",children:[i.info?a("span",{children:i.info}):"",a("span",{children:i.title})]}),n("div",{className:"rank_time",children:[i.rank?a("span",{children:i.rank}):"",i.time?a("span",{children:i.time}):""]}),n("div",{className:"price_coll",children:[n("span",{children:["\xA5",i.price]}),n("span",{children:[a("i",{className:c("iconfont",{"icon-aixin3":!e},{"icon-aixin1":e},{active:e}),onClick:()=>r()}),a("span",{children:e?i.collection+1:i.collection})]})]})]},i.id)};var b=p.memo(x);export{b as G,f as W};
