import React from 'react'
import { Link } from 'react-router-dom'

const VideoItem = ({video}) => {

  return (
    <div className='videos-flex' key={video.id}>
      <Link
        to={`/recommend/video${video.id}`}
        key={video.id}
      >
        <div className='videos-box'>
          <div className="videos-img">
            <img src={video.img} alt="" />
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

export default VideoItem