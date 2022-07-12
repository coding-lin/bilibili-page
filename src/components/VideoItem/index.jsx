import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import bilibili from './bilibili.jpeg'

const VideoItem = ({video}) => {

  return (
    <div className='videos-flex' key={video.id}>
      <Link
        to={`/recommend/video${video.id}`}
        key={video.id}
      >
        <div className='videos-box'>
          <div className="videos-img">
            <LazyLoad
              placeholder={<img width="100%" 
              height="100%" src={bilibili}/>}
            >
              <img src={video.img} alt="" />
            </LazyLoad>
            <div className="info">
              <i className='iconfont icon-bofangqi-bofangxiaodianshi'></i>
              <span>{video.bofang}</span>
              <i className='iconfont icon-jianyi'></i>
              <span>{video.pinglun}</span>
              <span>{video.time}</span>
            </div>
          </div>
          <div className='title'>
            <span>{video.title}</span>
          </div>
          <div className='up'>
            <span>{video.up}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

// 性能优化  子组件
export default React.memo(VideoItem)