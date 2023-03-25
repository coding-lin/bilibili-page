import React, { useState } from "react"
import LazyLoad from 'react-lazyload'
import classnames from 'classnames'
import bilibili from '@/assets/images/bilibili.jpeg'
import { Wrapper } from './style'

const GoodsItem = ({good}) => {
  const [isColl, setIsColl] = useState(false)

  const changeColl = () => {
    setIsColl(!isColl)
  }

  return (
    <Wrapper>
      <div className="good-box" key={good.id}>
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
            <img src={good.img} />
          </LazyLoad>
        </div>
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
            <i
              className={classnames(
                'iconfont', 
                {'icon-aixin3': !isColl}, 
                {'icon-aixin1': isColl}, 
                {'active': isColl}
              )}
              onClick={() => changeColl()}
            />
            <span>{isColl ? good.collection + 1 : good.collection}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

// 性能优化
export default React.memo(GoodsItem)
