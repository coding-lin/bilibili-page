import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Toast } from 'antd-mobile'
import { EditSOutline } from "antd-mobile-icons"
import { avatar } from '@/config'
import { Wrapper, HeaderWrapper, Author, Icon, Detail, Img, Container } from './style'

export default function Mine() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

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
        <Link to="/mine/space">
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
                <span>硬币: 650</span>
              </div>
            </Author>
            <Icon>
              <span>空间</span>
              <i className='iconfont icon-xiangyoujiantou'></i>
            </Icon>
          </HeaderWrapper>
        </Link>
        <EditSOutline className='edit-icon' onClick={() => navigate('/mine/edit')} />
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
          <div className="img-tab" onClick={() => Toast.show('功能待实现')}>
            <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5d8e.png" alt="" />
          </div>
          <div className="img-tab" onClick={() => Toast.show('功能待实现')}>
            <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b648a.png" alt="" />
          </div>
          <Link to="/mine/collect">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b5dd2.png" alt="" />
            </div>
          </Link>
          <Link to="/mine/wait">
            <div className="img-tab">
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/26/641fe563b621e.png" alt="" />
            </div>
          </Link>
        </Container>
      </Wrapper>
    </CSSTransition>
  )
}
