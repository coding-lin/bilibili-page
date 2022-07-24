import{C as r,i as p,k as d,s as c,R as o,r as l,j as e,c as n,l as x}from"./index.787f4d82.js";import{a as h,c as g,_ as m,b as f,p as u}from"./bilibili.7c4cea6d.js";const b=i=>({type:r,data:i}),k=i=>({type:p,data:i}),y=i=>({type:d,data:i}),C=()=>i=>{h().then(a=>{i(b(a))})},z=()=>i=>{g().then(a=>{i(k(a)),i(y(!1))})},N=c.div`
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
`,G=({good:i})=>{const[a,s]=l.exports.useState(!1),t=()=>{s(!a)};return e("div",{className:"good-box",children:[n("div",{className:"good-img",children:n(m,{placeholder:n("img",{width:"100%",height:"100%",src:f}),children:n("img",{src:i.img})})}),e("div",{className:"title",children:[i.info?n("span",{children:i.info}):"",n("span",{children:i.title})]}),e("div",{className:"rank_time",children:[i.rank?n("span",{children:i.rank}):"",i.time?n("span",{children:i.time}):""]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",i.price]}),e("span",{children:[n("i",{className:x("iconfont",{"icon-aixin3":!a},{"icon-aixin1":a},{active:a}),onClick:()=>t()}),n("span",{children:a?i.collection+1:i.collection})]})]})]},i.id)};var v=o.memo(G);function L({goodsList:i}){return n(N,{children:n("div",{className:"container",children:i&&i.map(a=>n(v,{good:a},a.id))})})}L.propTypes={goodsList:u.array.isRequired};export{L as G,z as a,C as g};
