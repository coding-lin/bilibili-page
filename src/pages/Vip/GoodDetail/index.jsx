import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Toast, Badge } from 'antd-mobile'
import { SendOutline } from "antd-mobile-icons"
import SharePopup from "@/components/SharePopup"
import classnames from 'classnames'
import { getGoodDetail, addCollectGoods, delCollectGoods, addCartGoods } from '../store/actionCreators'
import './index.scss'

const GoodDetail = (props) => {
  const { goodList, cartGoodsList } = props
  const { getGoodDetailDispatch, addDispatch, delDispatch, addCartDispatch } = props
  const navigate = useNavigate()
  const { id } = useParams()
  const [visible, setVisible] = useState(false)
  const [ isLike, setIsLike ] = useState(false)

  const addColl = async (id) => {
    setIsLike(true)
    await addDispatch(id)
    Toast.show({
      content: '收藏成功',
      position: 'bottom',
    })
  }

  const delColl = (id) => {
    setIsLike(false)
    delDispatch(id)
  }

  const addCart = async (id) => {
    await addCartDispatch(id)
    Toast.show('加车成功')
  }

  useEffect(() => {
    getGoodDetailDispatch(id)
  }, [])

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
      <div className="good-detail-img">
        <img src={goodList.img} alt="" />
      </div>
      <div className="good-detail-price">
        <span>预估到手价 ¥{goodList.price}</span>
      </div>
      <div className="good-detail-title">
        <span>{goodList.title}</span>
      </div>
      <div className="good-detail-like">
        {isLike ? 
          <i className={classnames('iconfont','icon-aixin1','active')} onClick={() => delColl(goodList.id)} /> : 
          <i className={classnames('iconfont','icon-aixin3')} onClick={() => addColl(goodList.id)} />
        }
        <span>{isLike ? goodList.collection + 1 : goodList.collection}</span>
      </div>
      {goodList.rank ? 
        <div className="good-detail-rank">
          <img src="https://img01.anheyu.com/useruploads/113/2023/04/20/6440dada35066.png" alt="" />
          <span>{goodList.rank}</span>
        </div> :
        <></>
      }
      <div className="good-detail-bottom">
        <Link to="/vip/shopping-cart">
          <Badge
            color='rgb(250, 114, 152)'
            content={cartGoodsList.length > 0 ? cartGoodsList.length : ''}
            style={{ '--right': '18%', '--top': '18%' }}
          >
            <div className="detail-icon">
              <i className='iconfont icon-gouwuche'></i>
            </div>
          </Badge>
        </Link>
        <div className="add-cart" onClick={() => addCart(id)}>
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

const mapStateToProps = (state) => {
  return {
    goodList: state.vip.goodList,
    cartGoodsList: state.vip.cartGoodsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGoodDetailDispatch(id) {
      dispatch(getGoodDetail(id))
    },
    addDispatch(id) {
      dispatch(addCollectGoods(id))
    },
    delDispatch(id) {
      dispatch(delCollectGoods(id))
    },
    addCartDispatch(id) {
      dispatch(addCartGoods(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GoodDetail))
