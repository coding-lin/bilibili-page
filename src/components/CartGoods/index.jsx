import React from 'react'
import './index.scss'

const CartGoods = ({ data }) => {
  return (
    <div className='cart-good-wrapper'>
      <div className="cart-good-img">
        <img src={data.img} alt="" />
      </div>
    </div>
  )
}

export default CartGoods
