import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { 
  isPathPartlyExisted,
  isPath
} from '@/utils'

export default function Footer() {
  const { pathname } = useLocation()
  if (isPath(pathname)) return

  return (
    <FooterWrapper>
      <Link to="/home" className={classnames(
        {active:pathname == '/' || isPathPartlyExisted(pathname)}
      )}>
        <i className='iconfont icon-shouye'></i>
        <span>首页</span>
      </Link>
      <Link to="/dynamic" className={classnames({active:pathname == '/dynamic'})}>
        <i className='iconfont icon-fengche'></i>
        <span>动态</span>
      </Link>
      <Link to="/vip" className={classnames({active:pathname == '/vip'})}>
        <i className='iconfont icon-huiyuan'></i>
        <span>会员购</span>
      </Link>
      <Link to="/mine" className={classnames({active:pathname == '/mine'})}>
        <i className='iconfont icon-wode'></i>
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}