import React, { useState } from "react"
import LazyLoad from 'react-lazyload'
import classnames from 'classnames'
import bilibili from '@/assets/images/bilibili.jpeg'

const GoodsItem = ({good}) => {
  const [isColl, setIsColl] = useState(false)

  const changeColl = () => {
    setIsColl(!isColl)
  }

  return (
    <div className="good-box" key={good.id}>
      <div className="good-img">
        <LazyLoad
          placeholder={<img width="100%" 
          height="100%" src={bilibili}/>}
        >
          <img src={good.img} />
        </LazyLoad>
      </div>
      <div className="title">
        <span>{good.info}</span>
        <span>{good.title}</span>
      </div>
      <div className="rank_time">
        <span>{good.rank}</span>
        <span>{good.time}</span>
      </div>
      <div className="price_coll">
        <span>¥{good.price}</span>
        <span>
          <i
            className={classnames(
              'iconfont', 
              {'icon-aixin3': !isColl}, 
              {'icon-aixin1': isColl}, 
              {'active': isColl}
            )}
            onClick={() => changeColl()}
          >
          </i>
          <span>{isColl ? good.collection + 1 : good.collection}</span>
        </span>
      </div>
    </div>
  )
}

export default React.memo(GoodsItem)
