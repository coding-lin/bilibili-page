import React from 'react'
import propTypes from "prop-types";
import { Wrapper } from './style'
import GoodsItem from '@/components/GoodsItem';

export default function GoodsList({goodsList}) {
  
  return (
    <Wrapper>
      <div className="container">
        {
          goodsList && goodsList.map(good => (
            <GoodsItem key={good.id} good={good} />
          ))
        }
      </div>
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goodsList: propTypes.array.isRequired
}