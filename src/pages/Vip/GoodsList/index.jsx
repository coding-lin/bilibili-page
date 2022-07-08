import React from 'react'
import propTypes from "prop-types";
import { Wrapper } from './style'
import GoodsItem from '@/components/GoodsItem';

export default function GoodsList({goods}) {
  
  return (
    <Wrapper>
      <div className="container">
        {
          goods && goods.map(good => (
            <GoodsItem key={good.id} good={good} />
          ))
        }
      </div>
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goods: propTypes.array.isRequired
}