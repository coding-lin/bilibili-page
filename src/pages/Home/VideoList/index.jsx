import React from 'react'
import { Wrapper } from './style'
import VideoItem from '@/components/VideoItem'

const VideoList = ({videosList}) => {

  return (
    <Wrapper>
      {
        videosList && videosList.map(
          video => (
            <VideoItem key={video.id} video={video} />
          )
        )
      }
    </Wrapper>
  )
}

export default VideoList
