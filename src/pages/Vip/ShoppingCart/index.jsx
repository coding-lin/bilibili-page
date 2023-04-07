import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Skeleton, PullToRefresh, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { Wrapper, HeaderWrapper, Empty } from './style'
import GoodsList from '../GoodsList'
import ScrollToTop from '@/components/common/scroll-to-top'
import NewInfiniteScroll from '@/components/InfiniteScroll'
import { getGoodsList, addCollectGoods, delCollectGoods } from '../store/actionCreators'
import { statusRecord, empty } from '@/config'

const renderEmpty = () => {
  return (
    <Empty>
      <div className='info'>
        <img src={empty} alt="" />
        <p>购物车空空如也</p>
        <span>你可能还喜欢</span>
      </div>
    </Empty>
  )
}

const ShoppingCart = (props) => {
  const [hasMore, setHasMore] = useState(true)
  const [goodData, setGoodData] = useState([])
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { goodsList, enterLoading } = props
  const { getGoodListDispatch, addDispatch, delDispatch } = props

  useEffect(() => {
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

  return (
    <Wrapper>
      <HeaderWrapper>
        <i 
          className='iconfont icon-fanhuijiantou'
          onClick={() => navigate(-1)}
        >
        </i>
        <h2>购物车</h2>
      </HeaderWrapper>
      { renderEmpty() }
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
  )
}

// state 状态树
const mapStateToProps = (state) => {
  return {
    enterLoading: state.vip.enterLoading,
    goodsList: state.vip.goodsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ShoppingCart))