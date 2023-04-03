import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import TextSwiper from '@/components/common/text-swiper'
import ScrollToTop from '@/components/common/scroll-to-top'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { Skeleton, PullToRefresh, Toast, InfiniteScroll, DotLoading } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { connect } from 'react-redux'
import { getBannersList, getGoodsList, addCollectGoods } from './store/actionCreators'
import { textList, searchList, statusRecord } from '@/config'

const Vip = (props) => {
  const [hasMore, setHasMore] = useState(true)
  const [goodData, setGoodData] = useState([])
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { bannersList, goodsList, enterLoading } = props
  const { getBannerListDispatch, getGoodListDispatch, addDispatch } = props

  useEffect(() => {
    getBannerListDispatch()
    getGoodListDispatch()
  }, [])

  async function doRefresh() {
    await sleep(1000)
    Toast.show('刷新成功')
  }

  async function mockRequest() {  
    if (count >= 5) return [];
    await sleep(1000);
    setCount(count => count + 1);
    return goodsList.map(item => {
      if (count >= 1) {
        return {
          ...item,
          id: item.id = item.id + goodsList.length  
        }
      } else {
        return {...item}
      }
    });
  }

  async function loadMore() {
    const append = await mockRequest()
    setGoodData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  const InfiniteScrollContent = ({ hasMore }) => {
    return (
      <>
        {hasMore ? (
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.7rem" }}>一大波信息向你飞奔过来~</span>
            <DotLoading />
          </div>
        ) : (
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.7rem" }}>--- 我是有底线的 ---</span>
          </div>
        )}
      </>
    )
  }

  const renderImg = () => {
    return (
      <>
        <Banners bannersList={bannersList} />
        <ImgTab>
          <Link to="shouban">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e64d8.png" alt="" />
              <span>手办</span>
            </div>
          </Link>
          <Link to="zhoubian">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e9b1f.png" alt="" />
              <span>周边</span>
            </div>
          </Link>
          <Link to="manzhandianying">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e6c70.png" alt="" />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="tushumanhua">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e57fe.png" alt="" />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="shumazhuangbei">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e9ce2.png" alt="" />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="ciyuanfushi">
            <div className='img-tab'>
              <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416ee88e7140.png" alt="" />
              <span>次元服饰</span>
            </div>
          </Link>
        </ImgTab>
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
          <i className='iconfont icon-ALL'></i>
        </div>
      </HeaderWrapper>
      <Wrapper>
        { enterLoading ? <Skeleton animated className='img' /> : renderImg() }
        { enterLoading ? 
          <Skeleton.Paragraph lineCount={20} animated /> : 
          <PullToRefresh 
            onRefresh={doRefresh}
            renderText={status => <div>{statusRecord[status]}</div>}
          >
            <GoodsList goodData={goodData} addDispatch={addDispatch} />
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
              <InfiniteScrollContent hasMore={hasMore} />
            </InfiniteScroll>
          </PullToRefresh>
        }
        <ScrollToTop top={2000} />
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
    },
    addDispatch(id) {
      dispatch(addCollectGoods(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Vip))
