import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd-mobile'
import { Wrapper, HeaderWrapper, Empty, List } from './style'
import GoodsList from '../Vip/GoodsList'
import { getGoodsList } from '../Vip/store/actionCreators'

const renderEmpty = () => {  // 空状态组件
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
  const navigate = useNavigate()
  const { goodsList, enterLoading } = props
  const { getGoodListDispatch } = props

  useEffect(() => {
    getGoodListDispatch()
  }, [])

  const renderGoods = () => {
    return (
      <GoodsList goodsList={goodsList} />
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
      { enterLoading ? <Skeleton.Paragraph lineCount={30} animated /> : renderGoods() } 
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