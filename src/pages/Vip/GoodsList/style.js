import styled from "styled-components";

export const Wrapper = styled.div`
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
`