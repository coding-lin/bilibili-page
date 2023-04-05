import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${px2rem(280)};
  /* CSSTransition 过度类型给children  */
  &.fly-enter,&.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-apply-active {
    opacity: 1;
    transition: all .3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0,0,0)
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all .3s;
    transform: translate3d(100%, 0, 0);
  }
  .edit-icon {
    position: absolute;
    top: ${px2rem(50)};
    right: ${px2rem(148)};
    font-size: ${px2rem(20)};
    color: gray;
  }
  .model-icon {
    position: absolute;
    top: ${px2rem(10)};
    right: ${px2rem(10)};
    width: ${px2rem(20)};
    img {
      width: 100%;
    }
  }
`

export const Space = styled.div`
  position: relative;
  width: 100%;
  height: ${px2rem(90)};
  margin-top: ${px2rem(50)};
  background: #fff;
  .avatar {
    position: absolute;
    width: ${px2rem(75)};
    height: ${px2rem(75)};
    margin: 0 ${px2rem(10)};
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`

export const User = styled.div`
  margin-left: ${px2rem(100)};
  width: ${px2rem(150)};
  height: ${px2rem(90)};
  .user {
    margin-right: ${px2rem(32)};
    span {
      font-size: ${px2rem(17)};
    }
    img {
      position: absolute;
      top: ${px2rem(2)};
      right: ${px2rem(110)};
      height: ${px2rem(20)};
    }
  }
  .isvip {
    margin-top: ${px2rem(12)};
    margin-right: ${px2rem(70)};
    span {
      padding: 0 ${px2rem(2)};
      border: 0.05rem solid rgb(232, 138, 173);
      font-size: ${px2rem(12)};
      border-radius: ${px2rem(2)};
      color: #000;
    }
  }
  .coin {
    margin-top: ${px2rem(12)};
    span {
      padding-right: ${px2rem(10)};
      color: #000;
    }
  }
  .space {
    position: absolute;
    right: ${px2rem(14)};
    top: ${px2rem(36)};
    span {
      font-size: ${px2rem(12)};
    }
    i {
      font-size: ${px2rem(10)};
    }
  }
`

export const Info = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${px2rem(10)};
  display: flex;
  justify-content: space-around;
  color: #000;
  div:first-child:after {
    content: '';
    position: absolute;
    left: 33%;
    top: ${px2rem(12)};
    width: ${px2rem(1)};
    height: ${px2rem(20)};
    background-color: rgb(220, 220, 220);
  }
  div:nth-child(2):after {
    content: '';
    position: absolute;
    left: 66%;
    top: ${px2rem(12)};
    width: ${px2rem(1)};
    height: ${px2rem(20)};
    background-color: rgb(220, 220, 220);
  }
  span {
    font-size: ${px2rem(15)};
  }
  p {
    font-size: ${px2rem(12)};
  }
`

export const BigVip = styled.div`
  img {
    margin: 0 auto;
    margin-top: ${px2rem(30)};
    width: 95%;
    height: 95%;
    object-fit: cover;
    border-radius: ${px2rem(8)};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  margin-top: ${px2rem(290)};
  display: flex;
  justify-content: space-around;
  .img-tab {
    width: ${px2rem(58)};
    height: ${px2rem(58)};
    img {
      width: 100%;
      height: 100%;
    }
  }
`