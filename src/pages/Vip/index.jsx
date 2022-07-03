import React, { useState, useEffect} from 'react'
import Banners from './Banners'
import { HeaderWrapper } from './style'
import { getBanners } from '@/api/request'
import WeUI from 'react-weui'

const {
  Toast
} = WeUI;

export default function Vip() {
  const [loading, setLoading] = useState(true)
  const [banners, setBanners] = useState([])

  useEffect(() => {
    (async () => {
      let { data: bannerData } = await getBanners()
      setLoading(false)
      setBanners(bannerData)
    })()
  })

  return (
    <div>
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
      <Toast show={loading} icon="loading">加载中...</Toast>
      <Banners banners={banners} />
    </div>
  )
}
