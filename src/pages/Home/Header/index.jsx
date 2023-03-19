import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HeaderWrapper, SearchInput } from './style'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <HeaderWrapper>
        <Link to="/mine">
          <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ef6e2d626.jpeg" />
        </Link>
        <SearchInput onClick={() => navigate("/search")}>
          <a>
            <i className='iconfont icon-sousuo'></i>
          </a>
          <input type="text" placeholder='请输入搜索内容' />
        </SearchInput>
        <Link to="/dynamic">
          <i className='iconfont icon-airudiantubiaohuizhi-zhuanqu_youxi'></i>
        </Link>
        <Link to="/mail-box">
          <i className='iconfont icon-youjian'></i>    
        </Link>
      </HeaderWrapper>
    </>
  )
}