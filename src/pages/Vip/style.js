import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: 100px;
  color: #000;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    span:first-child {
      padding: 6px;
      font-size: 20px;
      font-weight: 500;
    }
    span:nth-child(2) {
      width: 40%;
      padding: 14px;
      padding-left: 0;
      margin-left: -20px;
      font-size: 10px;
      i {
        font-size: 10px;
      }
    }
    span:nth-child(3) {
      display: flex;
      justify-content: space-between;
      width: 36%;
      padding: 8px;
      i {
        font-size: 20px;
      }
    }
  }
  .search-bar {
    display: flex;
    position: relative;
    height: 52px; 
    i {
      color: #000;
      &.icon-sousuo {
        position: absolute;
        font-size: 16px;
        top: 12px;
        left: 20px;
      }
      &.icon-ALL {
        font-size: 30px;
        font-weight: 600;
        font-style: oblique;
        padding-top: 2px;
        padding-left: 8px;
      }
    }
    input {
      margin-top: 10px;
      margin-left: 10px;
      width: 320px;
      height: 30px;
      border-radius: 14px;
      padding-left: 34px;
      border: 0;
      background-color: rgba(50, 50, 50, 0.08);
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(50, 50, 50, 0.06);
`

export const ImgTab = styled.div`
  width: 100%;
  margin-top: 16px;
  height: 68px;
  display: flex;
  justify-content: space-around;
  .img-tab {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      font-size: 10px;
      font-weight: 600;
    }
  }
`