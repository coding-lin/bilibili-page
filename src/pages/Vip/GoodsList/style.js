import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 145vh;
  background-color: rgba(50, 50, 50, 0.06);
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
      margin: 10px auto;
      border-radius: 4px;
      
      background-color: #fff;
      .good-img {
        width: 100%;
        border-radius: 4px;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`