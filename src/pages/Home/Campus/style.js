import styled from "styled-components";

export const Wrapper = styled.div`
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
`