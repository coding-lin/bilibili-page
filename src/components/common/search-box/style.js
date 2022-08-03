import styled from "styled-components"
import style ,{ px2rem } from '@/assets/global-style'

export const SearchInput = styled.div`
  position: relative;
  width: 80%;
  height: ${px2rem(30)};
  margin: ${px2rem(16)};
  border-radius: ${px2rem(15)};
  background-color: ${style["search_bar-color"]};
  display: flex;
  >i:first-child {
    position: absolute;
    font-size: ${px2rem(17)};
    top: ${px2rem(6)};
    left: ${px2rem(10)};
  }
  >i:last-child {
    position: absolute;
    font-size: ${px2rem(17)};
    top: ${px2rem(6)};
    right: ${px2rem(12)};
  }
  input {
    flex: 8;
    font-size: ${px2rem(14)};
    padding-left: ${px2rem(32)};
    height: ${px2rem(30)};
    background: rgba(255, 255, 255, 0.01);
    border-radius: ${px2rem(14)};
    border: 0;
  }
`;