import{C as r,b as d,d as p,s as o,R as c,r as l,a as e,j as a,e as x}from"./index.75b00479.js";import{g as h,a as g,_ as m,b as f,P as u}from"./index.6947956f.js";const b=i=>({type:r,data:i}),y=i=>({type:d,data:i}),N=i=>({type:p,data:i}),C=()=>i=>{h().then(n=>{i(b(n.data))})},z=()=>i=>{g().then(n=>{i(y(n.data)),i(N(!1))})},k=o.div`
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
`,G=({good:i})=>{const[n,s]=l.exports.useState(!1),t=()=>{s(!n)};return e("div",{className:"good-box",children:[a("div",{className:"good-img",children:a(m,{placeholder:a("img",{width:"100%",height:"100%",src:f}),children:a("img",{src:i.img})})}),e("div",{className:"title",children:[i.info?a("span",{children:i.info}):"",a("span",{children:i.title})]}),e("div",{className:"rank_time",children:[i.rank?a("span",{children:i.rank}):"",i.time?a("span",{children:i.time}):""]}),e("div",{className:"price_coll",children:[e("span",{children:["\xA5",i.price]}),e("span",{children:[a("i",{className:x("iconfont",{"icon-aixin3":!n},{"icon-aixin1":n},{active:n}),onClick:()=>t()}),a("span",{children:n?i.collection+1:i.collection})]})]})]},i.id)};var v=c.memo(G);function L({goodsList:i}){return a(k,{children:a("div",{className:"container",children:i&&i.map(n=>a(v,{good:n},n.id))})})}L.propTypes={goodsList:u.array.isRequired};export{L as G,z as a,C as g};
