import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import TextSwiper from '@/components/common/text-swiper'
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

  const textList = [
    {id: 1, name: 'CHE手办原型创作大赛 >'},
    {id: 2, name: '官方直营 正品保证'},
    {id: 3, name: 'CHE手办原型创作大赛 >'}
  ]

  const searchList = [
    {id: 1, name: '耳机'},
    {id: 2, name: '碧蓝航线'},
    {id: 3, name: '租借女友'},
    {id: 4, name: '路人女主'},
    {id: 5, name: '洛天依'},
    {id: 6, name: '天官赐福'},
    {id: 7, name: '英雄联盟'},
    {id: 8, name: '耳机'},
  ]
  
  const renderImg = () => {
    return (
      <>
        <Banners bannersList={bannersList} />
        <ImgTab>
          <Link to="shouban">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e64d8.png" />
              <span>手办</span>
            </div>
          </Link>
          <Link to="zhoubian">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e9b1f.png" />
              <span>周边</span>
            </div>
          </Link>
          <Link to="manzhandianying">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e6c70.png" />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="tushumanhua">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e57fe.png" />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="shumazhuangbei">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e9ce2.png" />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="ciyuanfushi">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e7140.png" />
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
          <TextSwiper data={textList} />
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
          <input type="text" />
          <div className="search-text">
            <TextSwiper data={searchList} />
          </div>
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
