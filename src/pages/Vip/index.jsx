import React from 'react'
import { HeaderWrapper } from './style'

export default function Vip() {
  return (
    <HeaderWrapper>
      <div className="title">
        <h2>会员购</h2>
        <span>CHE手办原型创作大赛</span>
        <i className='iconfont icon-xiangyoujiantou'></i>
      </div>
      <div className="search-bar">
        <input type="text" placeholder='搜索商品...'/>
      </div>
    </HeaderWrapper>
  )
}
