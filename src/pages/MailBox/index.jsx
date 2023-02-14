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
            <img src="https://img-blog.csdnimg.cn/e115f843f24e4346a76a2fcd4a29f2fb.png" />
            <span>回复我的</span>
          </div>
        </Link>
        <Link to="@me">
          <div className='img-tab'>
            <img src="https://img-blog.csdnimg.cn/1a300e4637b044d09b5ed4141daf441d.png" />
            <span>@我</span>
          </div>
        </Link>
        <Link to="getzan">
          <div className='img-tab'>
            <img src="https://img-blog.csdnimg.cn/33b47241529541c883c51e7dcbd0128a.png" />
            <span>收到的赞</span>
          </div>
        </Link>
        <Link to="xitongtongzhi">
          <div className='img-tab'>
            <img src="https://img-blog.csdnimg.cn/f7506e190723451482def5ef209f05aa.png" />
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