import React from 'react'
import { Wrapper } from './style'
import VideoItem from '@/components/VideoItem'

const VideoList = ({videoData, addDispatch}) => {

  return (
    <Wrapper>
      <div className="container">
        {
          videoData && videoData.map(
            (video) => (
              <VideoItem key={video.id} video={video} addDispatch={addDispatch} />
            )
          )
        }
      </div>
    </Wrapper>
  )
}

export default VideoList
