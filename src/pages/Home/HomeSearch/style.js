import styled from "styled-components"
import style from '@/assets/global-style'

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
  height: 62px;
  span {
    line-height: 62px;
  }
`

export const FindWrapper = styled.div`
  width: 100%;
  .title {
    margin: 6px;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin-left: 10px;
    }
    span {
      margin-right: 12px;
    }
  }
  .desc {
    margin: 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      background: rgba(55, 55, 55, 0.1);
      padding: 4px 8px;
      border-radius: 4px;
    }
  }
`

export const SuggestWrapper = styled.div`
  
`

export const Empty = styled.div`
  width: 100%;
  margin-top: 20px;
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 68%;
      height: 100%;
      margin: 0 auto;
    }
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid ${style["border-color"]};
`

export const ListItem = styled.div`
  position: relative;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${style["border-color"]};
  img {
    width: 80px;
    height: 80px;
  }
  .time {
    position: absolute;
    left: 288px;
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