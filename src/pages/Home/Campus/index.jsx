import React, { useEffect, useState } from 'react'
import SetMovie from '../SetMovie'
import { Wrapper } from './style'
import { getVideos } from '@/api/request'
import { Link } from 'react-router-dom'
import WeUI from 'react-weui'

const {
  Toast
} = WeUI;

export default function Recommend() {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async() => {
      let { data } = await getVideos()
      setVideos([...data])
      setLoading(false)
    })()
  }, [])

  return (
    <>
      <SetMovie />
      <Wrapper> 
        <Toast show={loading} icon="loading">加载中...</Toast>
        {
          videos && videos.map(
            video => (
              <div className='videos-flex' key={video.id}>
                <Link
                  to={`/campus/video${video.id}`}
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
          )
        }
      </Wrapper>
    </>
  )
}