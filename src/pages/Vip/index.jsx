import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { getBanners, getGoods } from '@/api/request'
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
  const [goods, setGoods] = useState([])

  useEffect(() => {
    (async () => {
      let { data: bannerData } = await getBanners()
      let { data: goodsData } = await getGoods()
      setBanners(bannerData)
      setGoods(goodsData)
      setLoading(false)
    })()
  })

  return (
    <div>
      <HeaderWrapper>
        <div className="title">
          <span>会员购</span>
          <span>
            CHE手办原型创作大赛
            <i className='iconfont icon-xiangyoujiantou'></i>
          </span>
          <span>
            <Link to="store-house">
              <i className='iconfont icon-24gl-drawer'></i> 
            </Link>
            <Link to="shopping-cart">
              <i className='iconfont icon-gouwuche'></i>
            </Link>
            <Link to="vip-center">
              <i className='iconfont icon-gerenzhongxin'></i>
            </Link>
          </span>
        </div>
        <div className="search-bar">
          <i className='iconfont icon-sousuo'></i>
          <input type="text" placeholder='搜索商品...'/>
          <Link to="all">
            <i className='iconfont icon-ALL'></i>
          </Link>
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
        <GoodsList goods={goods}/>
      </Wrapper>
    </div>
  )
}
