import styled from 'styled-components'
import style, { px2rem } from '@/assets/global-style'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: ${px2rem(60)};
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: ${px2rem(42)};
      height: ${px2rem(42)};
      border-radius: 50%;
    }
    i {
      font-size: ${px2rem(20)};
      color: #000;
    }
  }
`

export const SearchInput = styled.div`
  width: 40%;
  margin-top: ${px2rem(15)};
  margin-bottom: ${px2rem(15)};
  border-radius: ${px2rem(15)};
  background-color: ${style["search_bar-color"]};
  display: flex;
  i {
    padding-top: ${px2rem(5)};
    padding-left: ${px2rem(10)};
    padding-right: ${px2rem(4)};
    flex: 2;
  }
  input {
    width: ${px2rem(120)};
    flex: 8;
    font-size: ${px2rem(12)};
    padding-left: ${px2rem(2)};
    height: ${px2rem(30)};
    background: rgba(255, 255, 255, 0.01);
    border-radius: ${px2rem(14)};
    border: 0;
  }
`