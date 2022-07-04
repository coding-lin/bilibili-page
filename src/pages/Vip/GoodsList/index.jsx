import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from "prop-types";
import { Wrapper } from './style'

export default function GoodsList({goods}) {
  
  return (
    <Wrapper>
      {
        goods && goods.map(good => (
          <div className='container' key={good.id}>
            <Link
              to={`/goodlist/good${good.id}`}
              key={good.id}
            >
            <div className="good-box">
              <img src={good.img} />
            </div>
            </Link>
          </div>
        )
        )
      }
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goods: propTypes.array.isRequired
}