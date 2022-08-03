import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import { Wrapper } from './style'

export default function SetMovie() {
  const images = [
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/o3/o3wel5.jpg', 
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/28/28wqwg.jpg', 
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/x8/x8kwd3.jpg', 
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/o3/o3edql.jpg'
  ]

  const items = images.map((image, index) => (
    <Swiper.Item key={index}>
      <div
        className="content"
        style={{backgroundImage: `url(${image})`}}
        onClick={() => {
          Toast.show(`你点击了电影 ${index + 1}`)
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
