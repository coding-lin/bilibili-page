import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Wrapper, HeaderWrapper, ImgTab, Clearance, List } from './styles'

import Img1 from '@/assets/images/huifu.png'
import Img2 from '@/assets/images/@me.png'
import Img3 from '@/assets/images/getzan.png'
import Img4 from '@/assets/images/xitongtongzhi.png'

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
            <img src={Img1} />
            <span>回复我的</span>
          </div>
        </Link>
        <Link to="@me">
          <div className='img-tab'>
            <img src={Img2} />
            <span>@我</span>
          </div>
        </Link>
        <Link to="getzan">
          <div className='img-tab'>
            <img src={Img3} />
            <span>收到的赞</span>
          </div>
        </Link>
        <Link to="xitongtongzhi">
          <div className='img-tab'>
            <img src={Img4} />
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