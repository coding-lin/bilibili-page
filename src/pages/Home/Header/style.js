import styled from 'styled-components'
import style from '@/assets/global-style'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
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
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    i {
      font-size: 20px;
      color: #000;
    }
  }
`

export const SearchInput = styled.div`
  width: 40%;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: ${style["search_bar-color"]};
  display: flex;
  i {
    padding-top: 2px;
    padding-left: 8px;
    padding-right: 4px;
    flex: 2;
  }
  input {
    width: 120px;
    flex: 8;
    padding-left: 4px;
    height: 30px;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 14px;
    border: 0;
  }
`