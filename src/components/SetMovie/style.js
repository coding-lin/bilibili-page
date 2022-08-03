import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  .container {
    width: 100%;
    padding: ${px2rem(10)} ${px2rem(8)};
    background: rgba(50, 50, 50, 0.06);
    .content {
      height: ${px2rem(188)};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${px2rem(2)};
      user-select: none;
      background-size: cover;
    } 
  }
`