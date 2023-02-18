import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd-mobile'
import SetMovie from '@/components/SetMovie'
import VideoList from '../VideoList'
import { getVideosList } from '../store/actionCreators'
import '@/assets/styles/index.scss'

const Movies = (props) => {
  const { videosList, enterLoading } = props
  const { getVideoListDispatch } = props

  useEffect(() => {
    getVideoListDispatch()
  }, [])

  const renderMovie = () => <SetMovie />

  const renderVideo = () => <VideoList videosList={videosList} />

  return (
    <>
      { enterLoading ? (<Skeleton animated className='movie' />) : renderMovie() }
      { enterLoading ? (<Skeleton.Paragraph lineCount={20} animated />) : renderVideo() }
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Movies))
