import React, { useEffect, useState } from 'react'
import SetMovie from '../SetMovie'
import { Wrapper } from './style'
import VideoItem from '@/components/VideoItem'
import WeUI from 'react-weui'
import { getVideos } from '@/api/request'

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
              <VideoItem key={video.id} video={video} />
            )
          )
        }
      </Wrapper>
    </>
  )
}
