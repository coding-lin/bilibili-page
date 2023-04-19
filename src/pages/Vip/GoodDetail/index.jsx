import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Toast, Badge } from 'antd-mobile'
import { SendOutline } from "antd-mobile-icons"
import SharePopup from "@/components/SharePopup"
import './index.scss'

const GoodDetail = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const addCart = () => {
    Toast.show('加车成功')
  }

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
          <Badge
            color='rgb(250, 114, 152)'
            content="1"
            style={{ '--right': '18%', '--top': '18%' }}
          >
            <div className="detail-icon">
              <i className='iconfont icon-gouwuche'></i>
            </div>
          </Badge>
        </Link>
        <div className="add-cart" onClick={addCart}>
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
