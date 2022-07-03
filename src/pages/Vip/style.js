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
      margin-top: 10px;
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
      padding-left: 10px;
      border: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  
`