import React, {useEffect} from 'react'
import './style.css'
import { Swiper, Toast } from 'antd-mobile'
import classnames from 'classnames'

export default function SetMovie() {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={classnames('content')}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了电影 ${index + 1}`)
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ))

  return (
    <div className='wrapper'>
      <Swiper autoplay loop>{items}</Swiper> 
    </div>
  )
}
