import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: ${px2rem(20)};
  background: rgba(255, 255, 255, 0.1);
  .container {
    column-count: 2;
    column-gap: ${px2rem(10)};
    margin-top: ${px2rem(10)};
    margin-left: ${px2rem(8)};
    margin-right: ${px2rem(8)};
  }
  .adm-infinite-scroll {
    height: 0;
    background: rgba(255, 255, 255, 0.1);
  }
`