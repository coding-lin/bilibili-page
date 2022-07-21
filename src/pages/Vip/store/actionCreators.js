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

const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
})

export const getBannersList = () => {
  return (dispatch) => {
    getBannersListRequest().then((data) => {
      dispatch(changeBannersList(data))
    })
  }
}

export const getGoodsList = () => {
  return (dispatch) => {
    getGoodsListRequest().then((data) => {
      dispatch(changeGoodsList(data))
      dispatch(changeLoading(false))
    })
  }
}