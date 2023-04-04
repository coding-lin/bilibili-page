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
  .edit-icon {
    position: absolute;
    top: ${px2rem(50)};
    left: ${px2rem(230)};
    font-size: ${px2rem(20)};
    color: #fff;
  }
  .bg-wrapper {
    height: ${px2rem(240)};
    background: url('https://img01.anzhiy.cn/useruploads/113/2023/04/04/642c42e76670b.png') no-repeat;
    background-size: cover;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${px2rem(40)};
  display: flex;
  justify-content: space-around;
  color: #fff;
  img {
    width: ${px2rem(90)};
    border-radius: 50%;
  }
`

export const Author = styled.div`
  width: 40%;
  height: ${px2rem(40)};
  margin-top: ${px2rem(10)};
  margin-left: ${px2rem(-35)};
  display: flex;
  flex-direction: column;
  color: #fff;
  .author-name {
    margin-left: ${px2rem(18)};
    font-size: ${px2rem(17)};
    span {
      &.level {
        margin-left: ${px2rem(30)};
        font-size: ${px2rem(17)};
        color: orange;
      }
    }
  }
  .is-vip {
    margin-top: ${px2rem(8)};
    margin-left: ${px2rem(-58)};
    span {
      font-size: ${px2rem(12)};
      border-radius: ${px2rem(2)};
      border: ${px2rem(2)} solid #fff;
      padding: 0 ${px2rem(2)};
    }
  }
  .property {
    margin-top: ${px2rem(8)};
    margin-left: ${px2rem(-20)};
    flex-direction: row;
    span {
      font-size: ${px2rem(12)};
      padding-left: ${px2rem(25)}
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
  position: absolute;
  top: ${px2rem(160)};
  display: flex;
  justify-content: space-around;
  color: #fff;
  span {
    font-size: ${px2rem(18)};
  }
  p {
    font-size: ${px2rem(14)};
  }
`

export const Img = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  width: 100%;
  margin-top: ${px2rem(10)};
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