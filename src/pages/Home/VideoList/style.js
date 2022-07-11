import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  margin: 4px auto;
  padding-bottom: 46px;
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
        font-style: oblique;
        color: #000;
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
`