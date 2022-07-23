import React, { useState, useEffect } from "react"
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from "react-router-dom"
// import SearchBox from '@/components/common/search-box'
import { Wrapper, HeaderWrapper, SearchInput } from './style'

const HomeSearch = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const renderVideos = () => {

  }

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
    >
      <Wrapper>
        <HeaderWrapper>
          <SearchInput>
            <a>
              <i className='iconfont icon-sousuo'></i>
            </a>
            <input type="text" placeholder='请输入搜索内容' />
          </SearchInput>
          <span onClick={() => navigate(-1)}>取消</span>
        </HeaderWrapper>
        
      </Wrapper>
    </CSSTransition>
  )
}

export default HomeSearch
