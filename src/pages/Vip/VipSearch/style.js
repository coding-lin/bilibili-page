import styled from "styled-components"
import style from '@/assets/global-style'

export const Container = styled.div`
  width: 100%;
  background: #fff;
`

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`

export const Empty = styled.div`
  width: 100%;
  margin-top: 20px;
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 68%;
      height: 100%;
      margin: 0 auto;
    }
  }
`

export const GoodsWrapper = styled.div`

`

export const EnterLoading = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`