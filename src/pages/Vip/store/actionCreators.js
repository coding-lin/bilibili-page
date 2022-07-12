import * as actionTypes from './constants'

import {
  getBannersListRequest,
  getGoodsListRequest
} from '@/api/request'

const changeBannersList = (data) => ({
  type: actionTypes.CHANGE_BANNERS_LIST,
  data
})

const changeGoodsList = (data) => ({
  type: actionTypes.CHANGE_GOODS_LIST,
  data
})

const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const getBannersList = () => {
  return (dispatch) => {
    getBannersListRequest().then((data) => {
      dispatch(changeBannersList(data.data))
    })
  }
}

export const getGoodsList = () => {
  return (dispatch) => {
    getGoodsListRequest().then((data) => {
      dispatch(changeGoodsList(data.data))
      dispatch(changeEnterLoading(false))
    })
  }
}