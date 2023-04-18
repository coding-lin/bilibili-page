import React, { useState } from "react"
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { Toast } from "antd-mobile"
import classnames from 'classnames'
import bilibili from '@/assets/images/bilibili.jpeg'
import { Wrapper } from './style'

const GoodsItem = (props) => {
  const { good, addDispatch, delDispatch } = props
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

  return (
    <Wrapper>
      <div className="good-box">
        <Link to={`/vip/good/${good.id}`}>
          <div className="good-img">
          <LazyLoad
            placeholder={
            <img
              width="100%"
              height="100%"
              src={bilibili}
              alt=""
            />}
          >
            <img src={good.img} alt="" />
          </LazyLoad>
          </div>
        </Link>
        <div className="title">
          {good.info ? <span>{good.info}</span> : ''}
          <span>{good.title}</span>
        </div>
        <div className="rank_time">
          <div className="rank">
            {good.rank ? <span>{good.rank}</span> : ''}
          </div>
          <div className="time">
            {good.time ? <span>{good.time}</span> : ''}
          </div>
        </div>
        <div className="price_coll">
          <span>¥{good.price}</span>
          <div className="coll_num">
            {isLike ? 
              <i className={classnames('iconfont','icon-aixin1','active')} onClick={() => delColl(good.id)} /> : 
              <i className={classnames('iconfont','icon-aixin3')} onClick={() => addColl(good.id)} />
            }
            <span>{isLike ? good.collection + 1 : good.collection}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default GoodsItem
