import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: ${px2rem(94)};
  color: #000;
  background-color: #fff;
  .title {
    height: ${px2rem(44)};
    display: flex;
    justify-content: space-between;
    > span:first-child {
      padding: ${px2rem(10)};
      font-size: ${px2rem(16)};
      font-weight: bold;
    }
    > span:last-child {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 36%;
      padding: ${px2rem(8)};
      i {
        font-size: ${px2rem(18)};
        color: #000;
      }
    }
  }
  .search-bar {
    display: flex;
    position: relative;
    height: ${px2rem(50)};
    i {
      color: #000;
      &.icon-sousuo {
        position: absolute;
        font-size: ${px2rem(18)};
        top: ${px2rem(16)};
        left: ${px2rem(18)};
      }
      &.icon-ALL {
        font-size: ${px2rem(30)};
        font-weight: 600;
        line-height: ${px2rem(50)};
        padding-left: ${px2rem(8)};
      }
    }
    input {
      margin: ${px2rem(10)};
      width: 80%;
      height: ${px2rem(30)};
      border-radius: ${px2rem(14)};
      border: 0;
      background-color: ${style["search_bar-color"]};
    }
    .search-text {
      position: absolute;
      left: ${px2rem(48)};
      top: ${px2rem(10)};
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${style["background-color"]};
  .img {
    width: 100%;
    height: ${px2rem(228)};
    margin-top: ${px2rem(94)};
  }
`;

export const ImgTab = styled.div`
  width: 100%;
  height: ${px2rem(68)};
  display: flex;
  justify-content: space-around;
  .img-tab {
    width: ${px2rem(50)};
    height: ${px2rem(50)};
    img {
      width: 100%;
      height: 100%;
    }
    span {
      font-size: ${px2rem(12)};
      color: #000;
    }
  }
`;
