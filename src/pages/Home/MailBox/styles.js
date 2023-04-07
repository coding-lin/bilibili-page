import styled from 'styled-components'
import style, { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: ${px2rem(60)};
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: ${px2rem(1)} solid #eee;
  i {
    font-size: ${px2rem(20)};
    position: absolute;
    top: ${px2rem(20)};
    left: ${px2rem(14)};
  }
  span {
    float: left;
    font-size: ${px2rem(18)};
    font-weight: 600;
    margin-left: ${px2rem(50)};
    line-height: ${px2rem(60)};
  }
`

export const ImgTab = styled.div`
  width: 100%;
  margin-top: ${px2rem(61)};
  height: ${px2rem(75)};
  display: flex;
  justify-content: space-around;
  border-bottom: ${px2rem(1)} solid #eee;
  .img-tab {
    width: ${px2rem(50)};
    height: ${px2rem(50)};
    img {
      width: 100%;
      height: 100%;
    }
    span {
      width: ${px2rem(50)};
      font-size: ${px2rem(12)};
      color: #000;
    }
  }
`

export const Clearance = styled.div`
  width: 100%;
  height: ${px2rem(12)};
  background: ${style['background-color']};
`

export const List = styled.div`
  width: 100%;
  background: #fff;
  height: ${px2rem(40)};
  border-top: ${px2rem(1)} solid rgba(50, 50, 50, 0.08);
  border-bottom: ${px2rem(1)} solid rgba(50, 50, 50, 0.08);
  span {
    font-size: ${px2rem(16)};
    color: #000;
    line-height: ${px2rem(40)};
    float: left;
    margin-left: ${px2rem(10)};
  }
`