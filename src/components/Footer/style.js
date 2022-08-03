import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const FooterWrapper = styled.div`
  width: 100%;
  height: ${px2rem(50)};
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-top: ${px2rem(1)} solid rgba(50, 50, 50, 0.1);
  display: flex;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #000;
    &.active {
      color: pink;
    }
    i {
      font-size: ${px2rem(21)};
    }
    span {
      font-size: ${px2rem(12)};
      color: #000;
    }
  }
`