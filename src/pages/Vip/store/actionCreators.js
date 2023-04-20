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

const addCollect = (id) => ({
  type: actionTypes.ADD_COLLECT_GOODS,
  id
})

const delCollect = (id) => ({
  type: actionTypes.DEL_COLLECT_GOODS,
  id
})

const getGood = (id) => ({
  type: actionTypes.CHANGE_GOOD_DETAIL,
  id
})

const addCart = (id) => ({
  type: actionTypes.ADD_CART_GOODS,
  id
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

export const addCollectGoods = (id) => {
  return (dispatch) => {
    dispatch(addCollect(id))
  }
}

export const delCollectGoods = (id) => {
  return (dispatch) => {
    dispatch(delCollect(id))
  }
}

export const getGoodDetail = (id) => {
  return (dispatch) => {
    dispatch(getGood(id))
  }
}

export const addCartGoods = (id) => {
  return (dispatch) => {
    dispatch(addCart(id))
  }
}
