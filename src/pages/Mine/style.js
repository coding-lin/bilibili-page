import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  img {
    margin-top: 18px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`

export const Author = styled.div`
  width: 40%;
  height: 40px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  .author-name {
    font-size: 16px;
    span {
      padding-left: 6px;
      &.level {
        /* background-color: orange; */
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: 4px;
    span {
      font-size: 12px;
      font-weight: 300;
      padding: 2px;
      border-radius: 2px;
      border: 2px solid pink;
    }
  }
  .property {
    margin-top: 4px;
    flex-direction: row;
    span {
      padding-left: 6px;
    }
  }
`

export const Icon = styled.div`
  span {
    font-size: 15px;
    line-height: 90px;
  }
  i {
    font-size: 16px;
    line-height: 90px;
  }
`

export const Detail = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 60px;
  /* margin-top: 10px; */
  justify-content: space-around;
  background-color: #fff;
  div:not(:last-child):after {
    content: '';
    display: inline-block;
    position: absolute;
    margin-left: 64px;
    top: 14px;
    width: 2px;
    height: 30px;
    background-color: gray;
  }
  span {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`