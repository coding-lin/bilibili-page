import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Banners from './Banners'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { getBanners } from '@/api/request'
import WeUI from 'react-weui'

import Img1 from '@/assets/images/shouban.png'
import Img2 from '@/assets/images/zhoubian.png'
import Img3 from '@/assets/images/manzhandianying.png'
import Img4 from '@/assets/images/tushumanhua.png'
import Img5 from '@/assets/images/shumazhuangbei.png'
import Img6 from '@/assets/images/ciyuanfushi.png'

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
      <Wrapper>
        <Toast show={loading} icon="loading">加载中...</Toast>
        <Banners banners={banners} />
        <ImgTab>
          <Link to="shouban">
            <div className='img-tab'>
              <img src={Img1} />
              <span>手办</span>
            </div>
          </Link>
          <Link to="zhoubian">
            <div className='img-tab'>
              <img src={Img2} />
              <span>周边</span>
            </div>
          </Link>
          <Link to="manzhandianying">
            <div className='img-tab'>
              <img src={Img3} />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="tushumanhua">
            <div className='img-tab'>
              <img src={Img4} />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="shumazhuangbei">
            <div className='img-tab'>
              <img src={Img5} />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="ciyuanfushi">
            <div className='img-tab'>
              <img src={Img6} />
              <span>次元服饰</span>
            </div>
          </Link>
        </ImgTab>
      </Wrapper>
    </div>
  )
}
