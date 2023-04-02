import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  .video-box {
    margin: ${px2rem(5)};
    border-radius: ${px2rem(2)};
    .video-img {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: ${px2rem(2)};
      }
      .data {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: ${px2rem(22)};
        line-height: ${px2rem(22)};
        color: #fff;
        background: rgba(50, 50, 50, 0.5);
        border-radius: ${px2rem(2)};
        display: flex;
        justify-content: space-around;
        i {
          font-size: ${px2rem(17)};
        }
        span {
          font-size: ${px2rem(12)};
        }
      }
    }
    .video-info {
      position: relative;
      height: ${px2rem(76)};
      background: #fff;
      .title {
        padding: ${px2rem(2)};
        font-size: ${px2rem(14)};
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
        position: absolute;
        font-size: ${px2rem(12)};
        padding: ${px2rem(2)};
        border: ${px2rem(1)} solid pink;
        border-radius: ${px2rem(2)};
        bottom: ${px2rem(4)};
        left: ${px2rem(4)};
      }
      .video-pop {
        position: absolute;
        bottom: ${px2rem(8)};
        right: ${px2rem(6)};
        font-size: ${px2rem(18)};
        color: rgb(159, 157, 159);
        transform: rotate(90deg);
      }
    }
  }
`