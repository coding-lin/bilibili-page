import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, HeaderWrapper, Empty, List } from './style'
import empty from '@/assets/images/empty.png'

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

const ShoppingCart = ({goods}) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/shopping-cart`)
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <i 
          className='iconfont icon-xiangyoujiantou'
          onClick={() => navigate(`/vip`)}
        >
        </i>
        <h2>购物车</h2>
      </HeaderWrapper>
      { !goods ? renderEmpty() : renderList() }
    </Wrapper>
  )
}

export default React.memo(ShoppingCart)