import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
  i {
    font-size: 20px;
    color: #000;
    position: absolute;
    top: 14px;
    left: 14px;
  }
  span {
    float: left;
    font-size: 18px;
    font-weight: 600;
    margin-left: 50px;
    line-height: 60px;
  }
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

export const ImgTab = styled.div`
  width: 100%;
  margin-top: 61px;
  padding-bottom: 20px;
  height: 78px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
  .img-tab {
    width: 52px;
    height: 52px;
    img {
      width: 108%;
      height: 100%;
    }
    span {
      font-size: 12px;
      color: #000;
    }
  }
`

export const Clearance = styled.div`
  width: 100%;
  height: 15px;
  background: ${style['background-color']};
`

export const List = styled.div`
  width: 100%;
  background: #fff;
  height: 40px;
  border-top: 1px solid rgba(50, 50, 50, 0.08);
  border-bottom: 1px solid rgba(50, 50, 50, 0.08);
  span {
    font-size: 18px;
    color: #000;
    line-height: 40px;
    float: left;
    margin-left: 10px;
  }
`