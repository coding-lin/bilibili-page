import styled from "styled-components";
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
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
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: ${px2rem(90)};
  img {
    margin-top: ${px2rem(18)};
    width: ${px2rem(54)};
    height: ${px2rem(54)};
    border-radius: 50%;
  }
`

export const Author = styled.div`
  width: 40%;
  height: ${px2rem(40)};
  margin-top: ${px2rem(8)};
  display: flex;
  flex-direction: column;
  .author-name {
    font-size: ${px2rem(16)};
    span {
      padding-left: ${px2rem(6)};
      &.level {
        font-size: ${px2rem(18)};
        font-family: sans-serif;
        font-weight: 600;
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: ${px2rem(4)};
    span {
      font-size: ${px2rem(12)};
      font-weight: 300;
      padding: ${px2rem(2)};
      border-radius: ${px2rem(2)};
      border: ${px2rem(2)} solid pink;
    }
  }
  .property {
    margin-top: ${px2rem(4)};
    flex-direction: row;
    span {
      font-size: ${px2rem(13)};
      padding-left: ${px2rem(6)};
    }
  }
`

export const Icon = styled.div`
  span {
    padding: ${px2rem(2)};
    font-size: ${px2rem(15)};
    line-height: ${px2rem(90)};
  }
  i {
    font-size: ${px2rem(15)};
    line-height: ${px2rem(90)};
  }
`

export const Detail = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: ${px2rem(60)};
  justify-content: space-around;
  background-color: #fff;
  div:first-child:after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 33%;
    top: ${px2rem(14)};
    width: ${px2rem(1)};
    height: ${px2rem(30)};
    background-color: gray;
  }
  div:nth-child(2):after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 66%;
    top: ${px2rem(14)};
    width: ${px2rem(1)};
    height: ${px2rem(30)};
    background-color: gray;
  }
  span {
    font-size: ${px2rem(18)};
  }
  p {
    font-size: ${px2rem(14)};
  }
`

export const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`