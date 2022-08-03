import styled from "styled-components"
import style, { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  background: #fff;
  transform-origin: right bottom;
  /* CSSTranstion 过度类型给children  */
  &.fly-enter,
  &.fly-appear {
    opacity: 0;
    /* 启用GPU加速 */
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-apply-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${px2rem(62)};
  span {
    font-size: ${px2rem(14)};
    line-height: ${px2rem(62)};
  }
`

export const FindWrapper = styled.div`
  width: 100%;
  .title {
    margin: ${px2rem(6)};
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: ${px2rem(15)};
      font-weight: 600;
      margin-left: ${px2rem(10)};
    }
    span {
      font-size: ${px2rem(14)};
      margin-right: ${px2rem(12)};
    }
  }
  .desc {
    margin: ${px2rem(14)};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      font-size: ${px2rem(14)};
      padding: ${px2rem(4)} ${px2rem(8)};
      border-radius: ${px2rem(4)};
    }
  }
`

export const SuggestWrapper = styled.div`
  
`

export const Empty = styled.div`
  width: 100%;
  margin-top: ${px2rem(20)};
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${px2rem(255)};
      height: ${px2rem(120)};
      margin: 0 auto;
    }
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  margin-top: ${px2rem(30)};
  flex-direction: column;
  overflow: hidden;
  border-top: ${px2rem(1)} solid ${style["border-color"]};
`

export const ListItem = styled.div`
  position: relative;
  height: ${px2rem(82)};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: ${px2rem(1)} solid ${style["border-color"]};
  img {
    width: ${px2rem(80)};
    height: ${px2rem(80)};
  }
  .time {
    position: absolute;
    left: 78%;
  }
`

export const EnterLoading = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`