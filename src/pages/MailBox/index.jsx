import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Wrapper, HeaderWrapper, ImgTab, Clearance, List } from './styles'

const MailBox = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <HeaderWrapper>
        <i 
          className='iconfont icon-xiangzuojiantou'
          onClick={() => navigate(-1)}
        >
        </i>
        <span>消息</span>
      </HeaderWrapper> 
      <ImgTab>
        <Link to="huifu">
          <div className='img-tab'>
            <img src="https://s2.xptou.com/2023/03/10/640aa6442e4cf.png" />
            <span>回复我的</span>
          </div>
        </Link>
        <Link to="@me">
          <div className='img-tab'>
            <img src="https://s2.xptou.com/2023/03/10/640aa66763828.png" />
            <span>@我</span>
          </div>
        </Link>
        <Link to="getzan">
          <div className='img-tab'>
            <img src="https://s2.xptou.com/2023/03/10/640aa68784544.png" />
            <span>收到的赞</span>
          </div>
        </Link>
        <Link to="xitongtongzhi">
          <div className='img-tab'>
            <img src="https://s2.xptou.com/2023/03/10/640aa6a478853.png" />
            <span>系统通知</span>
          </div>
        </Link>
      </ImgTab>
      <Clearance />
      <List>
        <span>聊天列表</span>
      </List>
    </Wrapper>
  )
}

export default MailBox