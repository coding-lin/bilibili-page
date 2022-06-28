import React, { useEffect } from 'react'
import { Wrapper } from './style'
import { NavLink } from 'react-router-dom'

export default function HomeNav() {
  let homeNavs = [
    { id: 1, desc: '直播', path: '/live'},
    { id: 2, desc: '推荐', path: '/recommend'},
    { id: 3, desc: '热门', path: '/hot'},
    { id: 4, desc: '动画', path: '/animation'},
    { id: 5, desc: '影视', path: '/movies'},
    { id: 6, desc: '校园', path: '/campus'}
  ]

  return (
    <Wrapper>
      <div className="navbar swiper-container">
        <div className="nav-box swiper-wrapper">
          {
            homeNavs.map((item, index) => {
              return (
                <NavLink
                  index={index}
                  to={`/home${item.path}`}
                  key={item.id}
                  className="nav-item swiper-slide"
                >
                {item.desc}
                </NavLink>
              )
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}