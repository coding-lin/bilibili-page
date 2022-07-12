import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Wrapper } from './style'
import { Skeleton } from 'antd-mobile'
import VideoItem from '@/components/VideoItem'
import { getVideosList } from '../store/actionCreators'

const VideoList = (props) => {
  const { videosList, enterLoading } = props
  const { getVideoListDispatch } = props

  useEffect(() => {
    getVideoListDispatch()
  }, [])

  const renderVideo = () => {
    return (
      <>
        {
          videosList && videosList.map(
            video => (
              <VideoItem key={video.id} video={video} />
            )
          )
        }
      </>
    )
  }

  return (
    <Wrapper>
      { enterLoading ? (<Skeleton.Paragraph lineCount={25} animated />) : renderVideo() }
      {/* {
        videosList && videosList.map(
          video => (
            <VideoItem key={video.id} video={video} />
          )
        )
      } */}
    </Wrapper>
  )
}

// state 状态树
const mapStateToProps = (state) => {
  return {
    enterLoading: state.home.enterLoading,
    videosList: state.home.videosList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoListDispatch() {
      dispatch(getVideosList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VideoList))