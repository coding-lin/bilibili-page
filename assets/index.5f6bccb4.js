import{s as l,r as a,a as o,F as d,j as i,L as p}from"./index.ce72a0ca.js";import{g as c,S as x,W as m}from"./request.49914821.js";const f=l.div`
  width: 98%;
  margin: 4px auto;
  padding-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  .videos-flex {
    width: 50%;
    display: flex;
    .videos-box {
      height: 200px;
      border-radius: 2px;
      margin-left: 4px;
      margin-right: 5px;
      margin-bottom: 10px;
      background-color: rgba(60, 60, 60, 0.1);
      position: relative;
      .videos-img {
        img {
          border-radius: 2px;
          max-width: 100%;
          height: 140px;
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
          background: rgba(20, 20, 20, 0.4);
          color: #fff;
        }
      }
      .title {
        font-size: 10px;
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
        left: 2px;
        bottom: 2px;
        font-size: 8px;
        color: #000;
      }
    }
  }
`,{Toast:g}=m;function u(){const[t,r]=a.exports.useState(!0),[s,n]=a.exports.useState([]);return a.exports.useEffect(()=>{(async()=>{let{data:e}=await c();n([...e]),r(!1)})()},[]),o(d,{children:[i(x,{}),o(f,{children:[i(g,{show:t,icon:"loading",children:"\u52A0\u8F7D\u4E2D..."}),s&&s.map(e=>i("div",{className:"videos-flex",children:i(p,{to:`/movies/video${e.id}`,children:o("div",{className:"videos-box",children:[o("div",{className:"videos-img",children:[i("img",{src:e.img,alt:""}),o("div",{className:"info",children:[i("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),i("span",{children:e.bofang}),i("i",{className:"iconfont icon-jianyi"}),i("span",{children:e.pinglun}),i("span",{children:e.time})]})]}),i("div",{className:"title",children:i("span",{children:e.title})}),i("div",{className:"up",children:i("span",{children:e.up})})]})},e.id)}))]})]})}export{u as default};
