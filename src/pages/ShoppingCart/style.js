import styled from "styled-components";

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  i {
    float: left;
    font-size: 18px;
    margin-left: 10px;
    line-height: 50px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
  }
`

export const Empty = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: rgba(55, 30, 60, 0.06);
  border-bottom: 1px solid rgba(50, 50, 50, 0.12);
  .info {
    position: relative;
    width: 100%;
    height: 270px;
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
      bottom: -14px;
      left: 50%;
      right: 50%;
      width: 120px;
      height: 30px;
      margin-top: -60px;
      margin-left: -60px;
      padding: 4px;
      border-radius: 14px;
      font-size: 15px;
      background-color: Silver;
    }
  }
`

export const List = styled.div`
  
`