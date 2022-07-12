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

export const getVideosList = () => {
  return (dispatch) => {
    getVideosListRequest().then((data) => {
      dispatch(changeVideosList(data.data))
      dispatch(changeEnterLoading(false))
    })
  }
}