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
              <img src="https://img-blog.csdnimg.cn/e832687f91fd4dfdaa19b0635662401d.png" />
              <span>手办</span>
            </div>
          </Link>
          <Link to="zhoubian">
            <div className='img-tab'>
              <img src="https://img-blog.csdnimg.cn/3c38c1993009445f8940960ad595e6c7.png" />
              <span>周边</span>
            </div>
          </Link>
          <Link to="manzhandianying">
            <div className='img-tab'>
              <img src="https://img-blog.csdnimg.cn/d85137ad41544c85b13ab1a838f2ba78.png" />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="tushumanhua">
            <div className='img-tab'>
              <img src="https://img-blog.csdnimg.cn/051f4bc79a0d4123a34858aa111180ea.png" />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="shumazhuangbei">
            <div className='img-tab'>
              <img src="https://img-blog.csdnimg.cn/3a1fdf010b2d48ef81b280cc87bc0032.png" />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="ciyuanfushi">
            <div className='img-tab'>
              <img src="https://img-blog.csdnimg.cn/838f23c27b62485b87605577ef049713.png" />
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
