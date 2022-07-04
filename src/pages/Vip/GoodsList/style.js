import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(50, 50, 50, 0.06);
  .container {
    width: 100%;
    .good-box {
      width: 48%;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
  }
`