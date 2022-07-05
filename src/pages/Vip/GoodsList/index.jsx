import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from "prop-types";
import { Wrapper } from './style'

export default function GoodsList({goods}) {
  
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
                <span>{good.collection}</span>
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