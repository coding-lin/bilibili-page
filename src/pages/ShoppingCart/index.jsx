import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd-mobile'
import { CSSTransition } from 'react-transition-group'
import { Wrapper, HeaderWrapper, Empty, List } from './style'
import empty from '@/assets/images/empty.png'
import GoodsList from '../Vip/GoodsList'
import { getGoodsList } from '../Vip/store/actionCreators'

const renderEmpty = () => {  // 空状态组件
  return (
    <Empty>
      <div className='info'>
        <img src={empty} />
        <p>购物车空空如也</p>
        <span>你可能还喜欢</span>
      </div>
    </Empty>
  )
}

const renderList = () => {  // 购物车商品列表组件
  return (
    <List>
      
    </List>
  )
}

const ShoppingCart = (props) => {
  const navigate = useNavigate()
  const { goodsList, enterLoading } = props
  const { getGoodListDispatch } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    navigate(`/shopping-cart`)
  }, [])

  useEffect(() => {
    setShow(true)
    getGoodListDispatch()
  }, [])

  const renderGoods = () => {
    return (
      <GoodsList goodsList={goodsList} />
    )
  }

  return (
    <Wrapper>
      <CSSTransition
        in={show}
        timeout={300}
        appear={true}
        classNames="fly"
        unmountOnExit
      >
        <HeaderWrapper>
          <i 
            className='iconfont icon-fanhuijiantou'
            onClick={() => navigate(`/vip`)}
          >
          </i>
          <h2>购物车</h2>
        </HeaderWrapper>
      </CSSTransition>
      {/* { !goodsList ? renderEmpty() : renderList() } */}
      { renderEmpty() }
      { enterLoading ? <Skeleton.Paragraph lineCount={25} animated /> : renderGoods() } 
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