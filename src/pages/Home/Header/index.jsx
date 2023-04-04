import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { avatar } from '@/config'
import { HeaderWrapper, SearchInput } from './style'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <HeaderWrapper>
        <Link to="/mine">
          <img src={avatar} alt="" />
        </Link>
        <SearchInput onClick={() => navigate("/home/search")}>
          <a>
            <i className='iconfont icon-sousuo'></i>
          </a>
          <input type="text" placeholder='请输入搜索内容' />
        </SearchInput>
        <Link to="/dynamic">
          <i className='iconfont icon-airudiantubiaohuizhi-zhuanqu_youxi'></i>
        </Link>
        <Link to="/home/mail-box">
          <i className='iconfont icon-youjian'></i>    
        </Link>
      </HeaderWrapper>
    </>
  )
}