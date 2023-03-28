import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import { Wrapper } from './style'
import { images } from '@/config'

export default function SetMovie() {
  const items = images.map(item => (
    <Swiper.Item key={item.id}>
      <div
        className="content"
        style={{backgroundImage: `url(${item.img})`}}
        onClick={() => {
          Toast.show(`你点击了电影 ${item.id}`)
        }}
      >
      </div>
    </Swiper.Item>
  ))

  return (
    <Wrapper>
      <div className='container'>
        <Swiper autoplay loop>{items}</Swiper> 
      </div>
    </Wrapper>
  )
}
