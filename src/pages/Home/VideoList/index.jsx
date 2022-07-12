import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import VideoItem from '@/components/VideoItem'
import { getVideosList } from '@/api/request'
import WeUI from 'react-weui'

const {
  Toast
} = WeUI;

const VideoList = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async() => {
      let { data } = await getVideosList()
      // console.log(data);
      setVideos([...data])
      setLoading(false)
    })()
  }, [])

  return (
    <Wrapper>
      <Toast show={loading} icon="loading">加载中...</Toast>
      {
        videos && videos.map(
          video => (
            <VideoItem key={video.id} video={video} />
          )
        )
      }
    </Wrapper>
  )
}

export default VideoList