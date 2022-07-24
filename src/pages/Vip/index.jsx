import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { Skeleton } from 'antd-mobile'
import { connect } from 'react-redux'
import { getBannersList, getGoodsList } from './store/actionCreators'

import Img1 from '@/assets/images/shouban.png'
import Img2 from '@/assets/images/zhoubian.png'
import Img3 from '@/assets/images/manzhandianying.png'
import Img4 from '@/assets/images/tushumanhua.png'
import Img5 from '@/assets/images/shumazhuangbei.png'
import Img6 from '@/assets/images/ciyuanfushi.png'

const Vip = (props) => {
  const navigate = useNavigate()
  const { bannersList, goodsList, enterLoading } = props
  const { getBannerListDispatch, getGoodListDispatch } = props

  useEffect(() => {
    getBannerListDispatch()
    getGoodListDispatch()
  }, [])
  
  const renderImg = () => {
    return (
      <>
        <Banners bannersList={bannersList} />
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
        <GoodsList goodsList={goodsList}/>
      </>
    )
  }

  return (
    <>
      <HeaderWrapper>
        <div className="title">
          <span>会员购</span>
          <span>
            CHE手办原型创作大赛
            <i className='iconfont icon-xiangyoujiantou'></i>
          </span>
          <span>
            <Link to="/store-house">
              <i className='iconfont icon-24gl-drawer'></i> 
            </Link>
            <Link to="/shopping-cart">
              <i className='iconfont icon-gouwuche'></i>
            </Link>
            <Link to="/vip-center">
              <i className='iconfont icon-gerenzhongxin'></i>
            </Link>
          </span>
        </div>
        <div 
          className="search-bar"
          onClick={() => navigate(`/vipsearch`)}
        >
          <i className='iconfont icon-sousuo'></i>
          <input type="text" placeholder='搜索商品...'/>
          <Link to="/all">
            <i className='iconfont icon-ALL'></i>
          </Link>
        </div>
      </HeaderWrapper>
      <Wrapper>
        { enterLoading ? <Skeleton.Paragraph lineCount={25} animated /> : renderImg() }  
      </Wrapper>
    </>
  )
}

// state 状态树
const mapStateToProps = (state) => {
  return {
    enterLoading: state.vip.enterLoading,
    bannersList: state.vip.bannersList,
    goodsList: state.vip.goodsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListDispatch() {
      dispatch(getBannersList())
    },
    getGoodListDispatch() {
      dispatch(getGoodsList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Vip))
