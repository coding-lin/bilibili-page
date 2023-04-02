import * as actionTypes from './constants'

import {
  getVideosListRequest
} from '@/api/request'

const changeVideosList = (data) => ({
  type: actionTypes.CHANGE_VIDEOS_LIST,
  data
})

const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

const addVideos = (id) => ({
  type: actionTypes.ADD_WAIT_VIDEOS,
  id
})

const delVideos = (id) => ({
  type: actionTypes.DEL_WAIT_VIDEOS,
  id
})

export const getVideosList = () => {
  return (dispatch) => {
    getVideosListRequest().then((data) => {
      dispatch(changeVideosList(data))
      dispatch(changeEnterLoading(false))
    })
  }
}

export const addWaitVideos = (id) => {
  return (dispatch) => {
    dispatch(addVideos(id))
  }
}

export const delWaitVideos = (id) => {
  return (dispatch) => {
    dispatch(delVideos(id))
  }
}
