import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import SetMovie from '@/components/SetMovie'
import VideoList from '../VideoList'
import NewInfiniteScroll from '@/components/InfiniteScroll'
import ScrollToTop from '@/components/common/scroll-to-top'
import { getVideosList, addWaitVideos } from '../store/actionCreators'
import '@/assets/styles/index.scss'

const Recommend = (props) => {
  const [hasMore, setHasMore] = useState(true)
  const [videoData, setVideoData] = useState([])
  const [count, setCount] = useState(0)
  const { videosList, enterLoading } = props
  const { getVideoListDispatch, addDispatch } = props

  useEffect(() => {
    getVideoListDispatch()
  }, [])

  async function mockRequest() {  
    if (count >= 5) return [];
    await sleep(1000);
    setCount(count => count + 1);
    return videosList.map(item => {
      if (count >= 1) {
        return {
          ...item,
          id: item.id += videosList.length
        }
      } else {
        return {...item}
      }
    });
  }

  async function loadMore() {
    const append = await mockRequest()
    setVideoData(val => [...val, ...append])
    setHasMore(append.length > 0)
  }

  return (
    <>
      { enterLoading ? <Skeleton animated className='movie' /> : <SetMovie /> }
      { enterLoading ? 
        <Skeleton.Paragraph lineCount={20} animated /> : 
        <>
          <VideoList videoData={videoData} addDispatch={addDispatch} />
          <NewInfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
      }
      <ScrollToTop top={2000} />
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
    },
    addDispatch(id) {
      dispatch(addWaitVideos(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))
