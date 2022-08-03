import styled from "styled-components"
import style, { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
  width: 100%;
  background: ${style["background-color"]};
  padding-bottom: ${px2rem(50)};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`