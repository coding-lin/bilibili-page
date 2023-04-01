import React, { useState } from "react"
import LazyLoad from 'react-lazyload'
import classnames from 'classnames'
import bilibili from '@/assets/images/bilibili.jpeg'
import { Wrapper } from './style'

const GoodsItem = (props) => {
  const { good, addDispatch } = props;
  const [ isLike, setIsLike ] = useState(false);

  const changeLike = (id) => {
    setIsLike(!isLike);
    addDispatch(id);
  }

  return (
    <Wrapper>
      <div className="good-box">
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
                {'icon-aixin1': isLike},
                {'icon-aixin3': !isLike},
                {'active': isLike}
              )}
              onClick={() => changeLike(good.id)}
            />
            <span>{isLike ? good.collection + 1 : good.collection}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default GoodsItem
