import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SendOutline } from "antd-mobile-icons"
import SharePopup from "@/components/SharePopup"
import './index.scss'

const GoodDetail = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  return (
    <div className='good-detail-wrapper'>
      <div className="good-detail-header">
        <div className="detail-back">
          <i 
            className="iconfont icon-fanhuijiantou" 
            onClick={() => navigate(-1)}>
          </i>
        </div>
        <div className="detail-share">
          <SendOutline className='share-icon' onClick={() => setVisible(true)} />
        </div>
      </div>
      <div className="good-detail-bottom">
        <Link to="/vip/shopping-cart">
          <div className="detail-icon1">
              <i className='iconfont icon-gouwuche'></i>
          </div>
        </Link>
        <div className="add-cart">
          <span>加购物车</span>
        </div>
        <div className="buy-now">
          <span>立即购买</span>
        </div>
      </div>
      <SharePopup visible={visible} setVisible={setVisible} />
    </div>
  )
}

export default GoodDetail
