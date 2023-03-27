import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Skeleton, PullToRefresh, Toast, InfiniteScroll, DotLoading } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { Wrapper, HeaderWrapper, Empty } from './style'
import GoodsList from '../Vip/GoodsList'
import ScrollToTop from '@/components/common/scroll-to-top'
import { getGoodsList } from '../Vip/store/actionCreators'

const renderEmpty = () => {
  return (
    <Empty>
      <div className='info'>
        <img src="https://img01.anzhiy.cn/useruploads/113/2023/03/19/6416f061dc214.png" alt="" />
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
  const { getGoodListDispatch } = props

  useEffect(() => {
    getGoodListDispatch()
  }, [])

  async function doRefresh() {
    await sleep(1000)
    setGoodData([...new Set(goodData)])
    Toast.show('刷新成功')
  }

  const statusRecord = {
    pulling: '用力拉',
    canRelease: '松开吧',
    refreshing: '玩命加载中...',
    complete: '好啦',
  }

  async function mockRequest() {  
    if (count >= 5) return [];
    await sleep(1000);
    setCount(count => count + 1);
    return goodsList;
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
          <div style={{marginBottom: '2.5rem'}}>
            <span>一大波信息向你飞奔过来~</span>
            <DotLoading />
          </div>
        ) : (
          <div style={{marginBottom: '2.5rem'}}>
            <span>--- 我是有底线的 ---</span>
          </div>
        )}
      </>
    )
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
        <Skeleton.Paragraph lineCount={30} animated /> : 
        <PullToRefresh
          onRefresh={doRefresh}
          renderText={status => <div>{statusRecord[status]}</div>}
        >
          <GoodsList goodData={goodData} />
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
            <InfiniteScrollContent hasMore={hasMore} />
          </InfiniteScroll>
        </PullToRefresh>
      }
      <ScrollToTop />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ShoppingCart))