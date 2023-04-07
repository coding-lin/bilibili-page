import React from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className='img-tab'>
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f1422340c.png" alt="" />
          <span>回复我的</span>
        </div>
        <div className='img-tab'>
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f142233f4.png" alt="" />
          <span>@我</span>
        </div>
        <div className='img-tab'>
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f142244f1.png" alt="" />
          <span>收到的赞</span>
        </div>
        <div className='img-tab'>
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f14224347.png" alt="" />
          <span>系统通知</span>
        </div>
      </ImgTab>
      <Clearance />
      <List>
        <span>聊天列表</span>
      </List>
    </Wrapper>
  )
}

export default MailBox