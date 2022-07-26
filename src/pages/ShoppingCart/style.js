import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(120, 120, 120, 0.1);
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: 20px;
    top: 14px;
    left: 14px;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
  }
`

export const Empty = styled.div`
  width: 100%;
  height: 264px;
  margin-top: 60px;
  margin-bottom: 26px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.06);
  .info {
    position: relative;
    width: 100%;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 40%;
      height: 60%;
      margin: 0 auto;
    }
    p {
      font-size: 14px;
      left: -50%;
      right: -50%;
      bottom: 36px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: 110px;
      height: 26px;
      margin-top: -55px;
      margin-left: -55px;
      padding: 2px;
      border-radius: 14px;
      font-size: 14px;
      background-color: Silver;
    }
  }
`

export const List = styled.div`
  
`