import React from 'react'
import Pic1 from '../../assets/images/1.jpg'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Author, Icon, Detail } from './style'

export default function Mine() {
  return (
    <>
      <HeaderWrapper>
        <Link to="/mine">
          <img src={Pic1}/>
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
          <i className='iconfont icon-dongtai'></i>
        </Icon>
      </HeaderWrapper>
      <Detail>
        <div>
          <span className='data'>1</span>
          <p>动态</p>
        </div>
        <div>
          <span>29</span>
          <p>关注</p>
        </div>
        <div>
          <span>0</span>
          <p>粉丝</p>
        </div>
      </Detail>
    </>
  )
}
