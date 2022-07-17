import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  .navbar {
    width: 100%;
    height: 35px;
    /* background: rgb(80, 182, 240); */
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    .nav-box {
      height: 35px !important;
      line-height: 35px !important;
    }
    .nav-item {
      width: auto !important;
      position: relative;
      -webkit-flex: 1;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: 0.16rem;
      color: #000;
      border-bottom: 1px solid #ebebeb;
      &.active::after {
        content: "";
        background-color: pink;
        width: 0.3rem;
        height: 0.03rem;
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