import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd-mobile'
import SetMovie from '../SetMovie'
import VideoList from '../VideoList'
import { getVideosList } from '../store/actionCreators'

const Hot = (props) => {
  const { videosList, enterLoading } = props
  const { getVideoListDispatch } = props

  useEffect(() => {
    getVideoListDispatch()
  }, [])

  const renderVideo = () => {
    return (
      <>
        <SetMovie />
        <VideoList videosList={videosList} />
      </>
    )
  }

  return (
    <>
      { enterLoading ? (<Skeleton.Paragraph lineCount={25} animated />) : renderVideo() }
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Hot))
