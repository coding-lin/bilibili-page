import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Skeleton, PullToRefresh, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { Wrapper, HeaderWrapper, Empty, Other } from './style'
import GoodsList from '../GoodsList'
// import CartGoods from '@/components/CartGoods'
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
      </div>
    </Empty>
  )
}

const More = () => {
  return (
    <Other>
      <span>你可能还喜欢</span>
      <p></p>
    </Other>
  )
}

const ShoppingCart = (props) => {
  const [hasMore, setHasMore] = useState(true)
  const [goodData, setGoodData] = useState([])
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const { goodsList, enterLoading, cartGoodsList } = props
  const { getGoodListDispatch, addDispatch, delDispatch } = props
  console.log(cartGoodsList, '-----')

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

  return (
    <Wrapper>
      <HeaderWrapper>
        <i 
          className='iconfont icon-fanhuijiantou'
          onClick={() => navigate(-1)}
        >
        </i>
        {cartGoodsList.length > 0 ? <span>购物车({cartGoodsList.length})</span> : <span>购物车</span>}
      </HeaderWrapper>
      {/* {cartGoodsList.length > 0 ? (
        <>
          {cartGoodsList.map((item) => (
            <CartGoods
              key={item.id}
              data={item}
            />
          ))}
        </>
      ) : (
        renderEmpty()
      )} */}
      { renderEmpty() }
      { More() }
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
    goodsList: state.vip.goodsList,
    cartGoodsList: state.vip.cartGoodsList
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