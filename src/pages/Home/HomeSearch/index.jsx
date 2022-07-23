import React, { useState, useEffect } from "react"
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from "react-router-dom"
// import SearchBox from '@/components/common/search-box'
import { Wrapper, HeaderWrapper, SearchInput, FindWrapper } from './style'

const HomeSearch = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [showDesc, setShowDesc] = useState(true)

  useEffect(() => {
    setShow(true)
  }, [])

  const isDisplay = () => {
    setShowDesc(!showDesc)
  }

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
        <FindWrapper>
          <div className="title">
            <h2>搜索发现</h2>
            <span onClick={() => isDisplay()}>
              { showDesc ? '隐藏' : '显示' }
            </span>
          </div>
          <div 
            className="desc"
            style={showDesc ? {display: ''} : {display: 'none'}}
          >
            <span>白石茉莉奈</span>
            <span>周杰伦新专辑</span>
            <span>小蓝蓝</span>
            <span>v5 wbg</span>
          </div>
        </FindWrapper>
        
      </Wrapper>
    </CSSTransition>
  )
}

export default HomeSearch
