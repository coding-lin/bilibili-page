import styled from "styled-components"
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: ${px2rem(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`