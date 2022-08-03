import React from 'react'
import LazyLoad from 'react-lazyload'
import bilibili from '@/assets/images/bilibili.jpeg'
import { Wrapper } from './style'

const VideoItem = ({video}) => {

  return (
    <Wrapper>
      <div className="video-box" key={video.id}>
        <div className="video-img">
          <LazyLoad
            placeholder={<img width="100%" 
            height="100%" src={bilibili}/>}
          >
            <img src={video.img} width="100%" height="100%" />
          </LazyLoad>
          <div className="data">
            <i className='iconfont icon-bofangqi-bofangxiaodianshi'></i>
            <span>{video.bofang}</span>
            <i className='iconfont icon-pinglun'></i>
            <span>{video.pinglun}</span>
            <span>{video.time}</span>
          </div>
        </div>
        <div className="video-info">
          <div className='title'>
            {video.title}
          </div>
          <div className='up'>
            {video.up}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

// 性能优化  子组件
export default React.memo(VideoItem)