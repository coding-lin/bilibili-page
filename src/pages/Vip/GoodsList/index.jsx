import React from 'react'
import propTypes from "prop-types";
import { Wrapper } from './style'
import GoodsItem from '@/components/GoodsItem';

export default function GoodsList({goodData}) {
  
  return (
    <Wrapper>
      <div className="container">
        {
          goodData && goodData.map((good, index) => (
            <GoodsItem key={index} good={good} />
          ))
        }
      </div>
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goodData: propTypes.array.isRequired
}