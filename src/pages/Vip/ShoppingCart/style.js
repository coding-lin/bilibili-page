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
  height: ${px2rem(240)};
  margin-top: ${px2rem(60)};
  margin-bottom: ${px2rem(26)};
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
    }
  }
`

export const Other = styled.div`
  position: relative;
  width: 100%;
  height: ${px2rem(26)};
  margin-bottom: ${px2rem(10)};
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${px2rem(110)};
    height: ${px2rem(26)};
    line-height: ${px2rem(26)};
    border-radius: ${px2rem(14)};
    font-size: ${px2rem(14)};
    background: rgba(227, 229, 231);
    z-index: 10;
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0.05rem;
    background: #eee;
  }
`
