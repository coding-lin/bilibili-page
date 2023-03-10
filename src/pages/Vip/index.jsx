import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { Skeleton } from 'antd-mobile'
import { connect } from 'react-redux'
import { getBannersList, getGoodsList } from './store/actionCreators'

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
              <img src="https://s2.xptou.com/2023/03/10/640aa4a5ef1c4.png" />
              <span>手办</span>
            </div>
          </Link>
          <Link to="zhoubian">
            <div className='img-tab'>
              <img src="https://s2.xptou.com/2023/03/10/640aa4fe718cb.png" />
              <span>周边</span>
            </div>
          </Link>
          <Link to="manzhandianying">
            <div className='img-tab'>
              <img src="https://s2.xptou.com/2023/03/10/640aa52a3ee1f.png" />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="tushumanhua">
            <div className='img-tab'>
              <img src="https://s2.xptou.com/2023/03/10/640aa54d315b2.png" />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="shumazhuangbei">
            <div className='img-tab'>
              <img src="https://s2.xptou.com/2023/03/10/640aa586da215.png" />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="ciyuanfushi">
            <div className='img-tab'>
              <img src="https://s2.xptou.com/2023/03/10/640aa5a905ff0.png" />
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
        { enterLoading ? <Skeleton.Paragraph lineCount={30} animated /> : renderImg() }  
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
