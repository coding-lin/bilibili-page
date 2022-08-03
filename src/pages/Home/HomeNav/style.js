import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  .navbar {
    width: 100%;
    height: ${px2rem(35)};
    background-color: #fff;
    border-bottom: ${px2rem(1)} solid #ccc;
    .nav-box {
      height: ${px2rem(35)} !important;
      line-height: ${px2rem(35)} !important;
    }
    .nav-item {
      width: auto !important;
      position: relative;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: ${px2rem(15)};
      color: #000;
      border-bottom: ${px2rem(1)} solid #ebebeb;
      &.active::after {
        content: "";
        background-color: pink;
        width: ${px2rem(32)};
        height: ${px2rem(3)};
        border-radius: ${px2rem(2)};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`