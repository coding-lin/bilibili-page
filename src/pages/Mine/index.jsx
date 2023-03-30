import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { avatar } from '@/config'
import { Wrapper, HeaderWrapper, Author, Icon, Detail, Img, Container } from './style'

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
        <Link to="/space">
          <HeaderWrapper>
            <img src={avatar} alt="" />
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
        </Link>
        <Detail>
          <div>
            <span>4</span>
            <p>动态</p>
          </div>
          <div>
            <span>34</span>
            <p>关注</p>
          </div>
          <div>
            <span>1</span>
            <p>粉丝</p>
          </div>
        </Detail>
        <Img>
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416efc82bb64.png" alt="" />
        </Img>
        <Container>
          <Link to="/cache">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5d8e.png" alt="" />
            </div>
          </Link>
          <Link to="/history">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b648a.png" alt="" />
            </div>
          </Link>
          <Link to="/collect">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5dd2.png" alt="" />
            </div>
          </Link>
          <Link to="/wait">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b621e.png" alt="" />
            </div>
          </Link>
        </Container>
      </Wrapper>
    </CSSTransition>
  )
}
