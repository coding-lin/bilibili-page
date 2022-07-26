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
    margin: 2px;
    width: 50px;
    height: 50px;
    img {
      width: 110%;
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
  height: 12px;
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