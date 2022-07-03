import{s as l,r as o,a,F as d,j as i,L as p}from"./index.3533e4a9.js";import{S as c}from"./index.3dde4fbd.js";import{a as m,W as f}from"./index.cc3c6573.js";const x=l.div`
  width: 98%;
  margin: 4px auto;
  padding-bottom: 44px;
  display: flex;
  flex-wrap: wrap;
  .videos-flex {
    width: 50%;
    display: flex;
    .videos-box {
      height: 194px;
      border-radius: 2px;
      margin-left: 4px;
      margin-right: 5px;
      margin-bottom: 10px;
      background-color: rgba(60, 60, 60, 0.1);
      position: relative;
      .videos-img {
        position: relative;
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
          bottom: 0;
          font-size: 12px;
          line-height: 22px;
          left: 0;
          right: 0;
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
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: 600;
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
`,{Toast:g}=f;function w(){const[s,r]=o.exports.useState(!0),[t,n]=o.exports.useState([]);return o.exports.useEffect(()=>{(async()=>{let{data:e}=await m();n([...e]),r(!1)})()},[]),a(d,{children:[i(c,{}),a(x,{children:[i(g,{show:s,icon:"loading",children:"\u52A0\u8F7D\u4E2D..."}),t&&t.map(e=>i("div",{className:"videos-flex",children:i(p,{to:`/campus/video${e.id}`,children:a("div",{className:"videos-box",children:[a("div",{className:"videos-img",children:[i("img",{src:e.img,alt:""}),a("div",{className:"info",children:[i("i",{className:"iconfont icon-bofangqi-bofangxiaodianshi"}),i("span",{children:e.bofang}),i("i",{className:"iconfont icon-jianyi"}),i("span",{children:e.pinglun}),i("span",{children:e.time})]})]}),i("div",{className:"title",children:i("span",{children:e.title})}),i("div",{className:"up",children:i("span",{children:e.up})})]})},e.id)},e.id))]})]})}export{w as default};
