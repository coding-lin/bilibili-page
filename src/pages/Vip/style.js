import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  color: #fff;
  background-color: pink;
  .title {
    display: flex;
    h2 {
      margin: 2px 10px;
      font-size: 20px;
      font-weight: 500;
    }
    span {
      margin-top: 9px;
      font-size: 12px;
      font-weight: lighter;
    }
    i {
      margin-top: 10px;
      font-size: 12px;
    }
  }
  .search-bar {
    display: flex;
    height: 64px;
    input {
      margin-top: 20px;
      margin-left: 10px;
      width: 320px;
      height: 30px;
      border-radius: 14px;
      padding-left: 14px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`

export const ImgTab = styled.div`
  width: 100%;
  margin-top: 16px;
  height: 68px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(50, 50, 50, 0.08);
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