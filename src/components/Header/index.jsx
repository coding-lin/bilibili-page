import React, { useState, useEffect } from 'react'
import Pic1 from '@/assets/images/1.jpg'
import { Link, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import { HeaderWrapper, SearchInput } from './style'

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

        <Link to="/vip">
          <i className='iconfont icon-youjian'></i>
        </Link>
      </HeaderWrapper>
      
    </>
  )
}