import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Wrapper, HeaderWrapper, Author, Icon, Detail, Img } from './style'

export default function Mine() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

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
          <Link to="/mine">
            <img src="https://img-blog.csdnimg.cn/9ae699d84c764d2593ee5bed74976b77.jpeg" />
          </Link>
          <Author>
            <div className='author-name'>
              <span>dafenqi616</span>
              <span className='level'>Lv4</span>
            </div>
            <div className='is-vip'>
              <span>正式会员</span>
            </div>
            <div className='property'>
              <span>B币: 0.0</span>
              <span>硬币: 470</span>
            </div>
          </Author>
          <Icon>
            <span>空间</span>
            <i className='iconfont icon-xiangyoujiantou'></i>
          </Icon>
        </HeaderWrapper>
        <Detail>
          <div>
            <span className='data'>1</span>
            <p>动态</p>
          </div>
          <div>
            <span>30</span>
            <p>关注</p>
          </div>
          <div>
            <span>0</span>
            <p>粉丝</p>
          </div>
        </Detail>
        <Img>
          <img src="https://img-blog.csdnimg.cn/13d2d42411f7407cb0cbfc95176d9500.png" />
        </Img>
      </Wrapper>
    </CSSTransition>
  )
}
