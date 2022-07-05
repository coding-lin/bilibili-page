import React, { useState, useEffect } from 'react'
import propTypes from "prop-types";
import { Wrapper } from './style'

export default function GoodsList({goods}) {
  const [isColl, setIsColl] = useState(false)
  const [isAddNum, setIsAddNum] = useState(false)
  
  const changeColl = (id) => {
    console.log(id)
  }

  return (
    <Wrapper>
      <div className="container">
        {
          goods && goods.map(good => (
            <div className='good-box' key={good.id}>
              <div className='good-img'>
                <img src={good.img} />
              </div>
              <div className='title'>
                <span>{good.info}</span>
                <span>{good.title}</span>
              </div>
              <div className="rank_time">
                <span>{good.rank}</span>
                <span>{good.time}</span>
              </div>
              <div className='price_coll'>
                <span>¥{good.price}</span>
                <span>
                  <i className={isColl ? 
                    'iconfont icon-aixin1 active' :
                    'iconfont icon-aixin3'}
                    onClick={() => changeColl(good.id)}
                  >
                  </i>
                  {good.collection}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goods: propTypes.array.isRequired
}