import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

export const Wrapper = styled.div`
  .good-box {
    width: 100%;
    break-inside: avoid;
    margin-bottom: ${px2rem(10)};
    border-radius: ${px2rem(4)};
    box-shadow: rgba(255, 255, 255, 0.2) ${px2rem(2)} ${px2rem(2)} ${px2rem(2)};
    background-color: #fff;
    .good-img {
      width: 100%;
      img {
        border-radius: ${px2rem(4)};
        width: 100%;
      }
    }
    .title {
      padding: ${px2rem(2)};
      > span:first-child {
        background: rgba(50, 50, 50, 0.1);
        border-radius: ${px2rem(4)};
        font-size: ${px2rem(12)};
        transform: scale(0.83);
        padding: ${px2rem(2)};
      }
      > span:nth-child(2) {
        font-style: oblique;
        font-size: ${px2rem(14)};
        font-weight: 600;
        padding: ${px2rem(2)};
      }
    }
    .rank_time {
      display: flex;
      justify-content: space-around;
      padding: ${px2rem(2)};
      > span:first-child {
        background-color: orange;
        border-radius: ${px2rem(4)};
        padding: ${px2rem(1)};
        font-size: ${px2rem(12)};
      }
      > span:nth-child(2) {
        font-size: ${px2rem(12)};
        border-radius: ${px2rem(4)};
        padding: ${px2rem(1)};
        background-color: skyblue;
      }
    }
    .price_coll {
      display: flex;
      justify-content: space-between;
      padding: ${px2rem(2)};
      > span:first-child {
        padding: ${px2rem(8)};
        font-size: ${px2rem(18)};
        font-weight: 600;
      }
      > span:nth-child(2) {
        padding: ${px2rem(6)};
        i {
          font-size: ${px2rem(20)};
          padding: ${px2rem(2)};
          &.active {
            color: red;
          }
        }
        span {
          padding: ${px2rem(2)};
        }
      }
    }
  }
`;
