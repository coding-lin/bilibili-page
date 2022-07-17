import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-top: 1px solid rgba(50, 50, 50, 0.1);
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
      font-size: 1.6em;
    }
  }
`