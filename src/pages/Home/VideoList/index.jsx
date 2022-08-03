import React from 'react'
import { Wrapper } from './style'
import VideoItem from '@/components/VideoItem'

const VideoList = ({videosList}) => {

  return (
    <Wrapper>
      <div className="container">
        {
          videosList && videosList.map(
            video => (
              <VideoItem key={video.id} video={video} />
            )
          )
        }
      </div>
    </Wrapper>
  )
}

export default VideoList
