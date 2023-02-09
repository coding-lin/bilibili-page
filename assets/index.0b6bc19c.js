import{s as r,p as i,R as c,r as l,j as n,d as e,l as o}from"./index.4f73175a.js";import{_ as p}from"./index.cd398bde.js";import{b as h}from"./bilibili.491df666.js";const u=r.div`
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
`,m=r.div`
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
      >span:first-child {
        background: rgba(50, 50, 50, 0.1);
        border-radius: ${i(4)};
        font-size: ${i(10)};
        padding: ${i(2)};
      }
      >span:nth-child(2) {
        font-style: oblique;
        font-size: ${i(14)};
        font-weight: 600;
        padding: ${i(2)};
      }
    }
    .rank_time {
      display: flex;
      justify-content: space-around;
      padding: ${i(2)};
      >span:first-child {
        background-color: orange;
        border-radius: ${i(4)};
        padding: ${i(1)};
        font-size: ${i(12)};
      }
      >span:nth-child(2) {
        font-size: ${i(12)};
        border-radius: ${i(4)};
        padding: ${i(1)};
        background-color: skyblue;
      }
    }
    .price_coll {
      display: flex;
      justify-content: space-between;
      padding: ${i(2)};
      >span:first-child {
        padding: ${i(8)};
        font-size: ${i(18)};
        font-weight: 600;
      }
      >span:nth-child(2) {
        padding: ${i(6)};
        i {
          font-size: ${i(20)};
          padding: ${i(2)};
          &.active {
            color: red;
          }
        }
        span {
          padding: ${i(2)};
        }
      }
    }
  }
`,$=({good:a})=>{const[s,d]=l.exports.useState(!1),t=()=>{d(!s)};return n(m,{children:e("div",{className:"good-box",children:[n("div",{className:"good-img",children:n(p,{placeholder:n("img",{width:"100%",height:"100%",src:h}),children:n("img",{src:a.img})})}),e("div",{className:"title",children:[a.info?n("span",{children:a.info}):"",n("span",{children:a.title})]}),e("div",{className:"rank_time",children:[a.rank?n("span",{children:a.rank}):"",a.time?n("span",{children:a.time}):""]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",a.price]}),e("span",{children:[n("i",{className:o("iconfont",{"icon-aixin3":!s},{"icon-aixin1":s},{active:s}),onClick:()=>t()}),n("span",{children:s?a.collection+1:a.collection})]})]})]},a.id)})};var x=c.memo($);export{x as G,u as W};
