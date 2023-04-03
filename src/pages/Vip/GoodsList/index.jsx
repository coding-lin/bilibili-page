import React from 'react'
import propTypes from "prop-types";
import { Wrapper } from './style'
import GoodsItem from '@/components/GoodsItem';

export default function GoodsList({ goodData, addDispatch, delDispatch }) {
  
  return (
    <Wrapper>
      <div className="container">
        {
          goodData && goodData.map(good => (
            <GoodsItem key={good.id} good={good} addDispatch={addDispatch} delDispatch={delDispatch} />
          ))
        }
      </div>
    </Wrapper>
  )
}

GoodsList.propTypes = {
  goodData: propTypes.array.isRequired
}