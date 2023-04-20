import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(120, 120, 120, 0.1);
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${px2rem(60)};
  background: #fff;
  z-index: 999;
  i {
    position: absolute;
    font-size: ${px2rem(20)};
    top: ${px2rem(20)};
    left: ${px2rem(18)};
  }
  span {
    font-size: ${px2rem(16)};
    font-weight: 600;
    line-height: ${px2rem(60)};
  }
`

export const Empty = styled.div`
  width: 100%;
  height: ${px2rem(264)};
  margin-top: ${px2rem(60)};
  margin-bottom: ${px2rem(26)};
  border-bottom: ${px2rem(1)} solid rgba(100, 100, 100, 0.10);
  .info {
    position: relative;
    width: 100%;
    height: ${px2rem(276)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: ${px2rem(250)};
      margin: 0 auto;
    }
    p {
      font-size: ${px2rem(14)};
      left: -50%;
      right: -50%;
      bottom: ${px2rem(36)};
    }
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: ${px2rem(110)};
      height: ${px2rem(26)};
      line-height: ${px2rem(26)};
      margin-top: ${px2rem(-55)};
      margin-left: ${px2rem(-55)};
      border-radius: ${px2rem(14)};
      font-size: ${px2rem(14)};
      background-color: rgba(227, 229, 231);
    }
  }
`
