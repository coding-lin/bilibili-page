import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Toast } from 'antd-mobile'
import { EditSOutline } from "antd-mobile-icons"
import { avatar } from '@/config'
import { HeaderWrapper, Space, User, Info, BigVip, Wrapper } from './style'
import moon from '@/assets/images/moon.png'
import sun from '@/assets/images/sun.png'

export default function Mine() {
  const [show, setShow] = useState(false)
  const [visiable, setVisiable] = useState(false)

  const changeModel = () => {
    setVisiable(!visiable)
    Toast.show({
      content: '模式切换成功',
      position: 'bottom',
    })
  }

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <>
      <CSSTransition
        in={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
      >
        <HeaderWrapper>
          <div className="model-icon" onClick={changeModel}>
            {visiable ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
          </div>
          <Link to="/mine/space">
            <Space>
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <User>
                <div className="user">
                  <span>dafenqi616</span>
                  <img src="https://img01.anheyu.com/useruploads/113/2023/04/05/642d2d2327ebe.png" alt="" />
                </div>
                <div className="isvip">
                  <span>正式会员</span>
                </div>
                <div className="coin">
                  <span>B币：0.0</span>
                  <span>硬币：652</span>
                </div>
                <div className="space">
                  <span>空间 </span>
                  <i className='iconfont icon-xiangyoujiantou'></i>
                </div>
              </User>
            </Space>
          </Link>
          <Link to="/mine/edit">
            <EditSOutline className='edit-icon' />
          </Link>
          <Info>
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
          </Info>
          <BigVip>
            <img src="https://img01.anheyu.com/useruploads/113/2023/04/05/642d0029c7ca6.png" alt="" />
          </BigVip>
        </HeaderWrapper>
      </CSSTransition>
      <Wrapper>
        <div className="img-tab" onClick={() => Toast.show('功能待实现')}>
          <img src="https://img01.anheyu.com/useruploads/113/2023/03/26/641fe563b5d8e.png" alt="" />
        </div>
        <div className="img-tab" onClick={() => Toast.show('功能待实现')}>
          <img src="https://img01.anheyu.com/useruploads/113/2023/03/26/641fe563b648a.png" alt="" />
        </div>
        <Link to="/mine/collect">
          <div className="img-tab">
            <img src="https://img01.anheyu.com/useruploads/113/2023/03/26/641fe563b5dd2.png" alt="" />
          </div>
        </Link>
        <Link to="/mine/wait">
          <div className="img-tab">
            <img src="https://img01.anheyu.com/useruploads/113/2023/03/26/641fe563b621e.png" alt="" />
          </div>
        </Link>
      </Wrapper>
    </>
  )
}
