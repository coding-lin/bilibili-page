import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Banners from './Banners'
import GoodsList from './GoodsList'
import TextSwiper from '@/components/common/text-swiper'
import NewInfiniteScroll from '@/components/InfiniteScroll'
import ScrollToTop from '@/components/common/scroll-to-top'
import { HeaderWrapper, Wrapper, ImgTab } from './style'
import { Skeleton, PullToRefresh, Toast, Badge } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { connect } from 'react-redux'
import { getBannersList, getGoodsList, addCollectGoods, delCollectGoods } from './store/actionCreators'
import { textList, searchList, statusRecord } from '@/config'

const Vip = (props) => {
  const [hasMore, setHasMore] = useState(true)
  const [goodData, setGoodData] = useState([])
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { bannersList, goodsList, enterLoading, cartGoodsList } = props
  const { getBannerListDispatch, getGoodListDispatch, addDispatch, delDispatch } = props

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
          id: item.id += goodsList.length
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

  const renderImg = () => {
    return (
      <>
        <Banners bannersList={bannersList} />
        <ImgTab>
          <Link to="/vip/shouban">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e64d8.png" alt="" />
              <span>手办</span>
            </div>
          </Link>
          <Link to="/vip/zhoubian">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e9b1f.png" alt="" />
              <span>周边</span>
            </div>
          </Link>
          <Link to="/vip/manzhandianying">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e6c70.png" alt="" />
              <span>漫展电影</span>
            </div>
          </Link>
          <Link to="/vip/tushumanhua">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e57fe.png" alt="" />
              <span>图书漫画</span>
            </div>
          </Link>
          <Link to="vip/shumazhuangbei">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e9ce2.png" alt="" />
              <span>数码装备</span>
            </div>
          </Link>
          <Link to="/vip/ciyuanfushi">
            <div className='img-tab'>
              <img src="https://img01.anheyu.com/useruploads/113/2023/03/19/6416ee88e7140.png" alt="" />
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
            <Link to="/vip/store-house">
              <i className='iconfont icon-24gl-drawer'></i> 
            </Link>
            <Link to="/vip/shopping-cart">
              <Badge
                color='rgb(250, 114, 152)'
                content={cartGoodsList.length > 0 ? cartGoodsList.length : ''}
                style={{ '--right': '18%', '--top': '18%' }}
              >
                <i className='iconfont icon-gouwuche'></i>
              </Badge>
            </Link>
            <Link to="/vip/vip-center">
              <i className='iconfont icon-gerenzhongxin'></i>
            </Link>
          </span>
        </div>
        <div 
          className="search-bar"
          onClick={() => navigate(`/vip/search`)}
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
            <GoodsList goodData={goodData} addDispatch={addDispatch} delDispatch={delDispatch} />
            <NewInfiniteScroll loadMore={loadMore} hasMore={hasMore} />
          </PullToRefresh>
        }
        <ScrollToTop top={3000} />
      </Wrapper>
    </>
  )
}

// state 状态树
const mapStateToProps = (state) => {
  return {
    enterLoading: state.vip.enterLoading,
    bannersList: state.vip.bannersList,
    goodsList: state.vip.goodsList,
    cartGoodsList: state.vip.cartGoodsList
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
    },
    delDispatch(id) {
      dispatch(delCollectGoods(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Vip))
