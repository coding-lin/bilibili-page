import{s as l,r as o,a,F as d,j as i,L as p}from"./index.60d67183.js";import{g as c,S as x,W as f}from"./request.34fa031d.js";const g=l.div`
  width: 98%;
  margin: 4px auto;
  padding-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  .videos-flex {
    width: 50%;
    display: flex;
    .videos-box {
      height: 176px;
      border-radius: 2px;
      margin-left: 4px;
      margin-right: 5px;
      margin-bottom: 10px;
      background-color: rgba(60, 60, 60, 0.1);
      position: relative;
      .videos-img {
        img {
          border-radius: 2px;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
        .info {
          display: flex;
          justify-content: space-around;
          position: absolute;
          height: 22px;
          bottom: 60px;
          font-size: 10px;
          line-height: 20px;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 2px;
          border-radius: 2px;
          background: rgba(30, 30, 30, 0.36);
          color: #fff;
        }
      }
      .title {
        text-align: left;
        padding-left: 8px;
        font-size: 12px;
        font-weight: 400;
        /* 实现标题显示两行，溢出的用省略号表示 */
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        -moz-line-clamp: 2;
        -moz-box-orient: vertical;
        overflow-wrap: break-word;
        word-break: break-all;
        white-space: normal;
        overflow: hidden;
      }
      .up {
        border: 1px solid pink;
        border-radius: 2px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        font-size: 10px;
        color: #000;
        font-weight: 500;
      }
    }
  }
`,{Toast:m}=f;function u(){const[s,n]=o.exports.useState(!0),[t,r]=o.exports.useState([]);return o.exports.useEffect(()=>{(async()=>{let{data:e}=await c();r([...e]),n(!1)})()},[]),a(d,{children:[i(x,{}),a(g,{children:[i(m,{show:s,icon:"loading",children:"\u52A0\u8F7D\u4E2D..."}),t&&t.map(e=>i("div",{className:"videos-flex",children:i(p,{to:`/hot/video${e.id}`,children:a("div",{className:"videos-box",children:[a("div",{className:"videos-img",children:[i("img",{src:e.img,alt:""}),a("div",{className:"info",children:[i("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),i("span",{children:e.bofang}),i("i",{className:"iconfont icon-jianyi"}),i("span",{children:e.pinglun}),i("span",{children:e.time})]})]}),i("div",{className:"title",children:i("span",{children:e.title})}),i("div",{className:"up",children:i("span",{children:e.up})})]})},e.id)},e.id))]})]})}export{u as default};
