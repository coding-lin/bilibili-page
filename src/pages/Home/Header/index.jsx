import React from 'react'
import Pic1 from '@/assets/images/1.jpg'
import { Link } from 'react-router-dom'
import { HeaderWrapper, SearchInput } from './style'
import { Badge, Space } from 'antd-mobile'

export default function Header() {

  return (
    <>
      <HeaderWrapper>
        <Link to="/mine">
          <img src={Pic1}/>
        </Link>
        <SearchInput>
          <a>
            <i className='iconfont icon-sousuo'></i>
          </a>
          <input type="text" placeholder='请输入搜索内容'/>
        </SearchInput>
        <Link to="/dynamic">
          <i className='iconfont icon-airudiantubiaohuizhi-zhuanqu_youxi'></i>
        </Link>
        <Link to="/mail-box">
          <Space style={{ '--gap': '16px' }}>
            <Badge content='3'>
              <i className='iconfont icon-youjian'></i>
            </Badge>
          </Space> 
        </Link>
      </HeaderWrapper>
    </>
  )
}