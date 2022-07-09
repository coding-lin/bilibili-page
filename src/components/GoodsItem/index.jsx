import React, { useState } from "react";
import classnames from 'classnames'

const GoodsItem = ({good}) => {
  const [isColl, setIsColl] = useState(false)

  const changeColl = () => {
    setIsColl(!isColl)
  }

  return (
    <div className="good-box" key={good.id}>
      <div className="good-img">
        <img src={good.img} />
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

export default GoodsItem
