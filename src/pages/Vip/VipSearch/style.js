import styled from "styled-components"
import style, { px2rem } from '@/assets/global-style'

export const Container = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  width: 100%;
  height: ${px2rem(62)};
  span {
    font-size: ${px2rem(14)};
    line-height: ${px2rem(62)};
  }
`

export const Empty = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  margin-top: ${px2rem(72)};
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

export const GoodsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${px2rem(62)};
  background: ${style["background-color"]};
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