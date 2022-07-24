import * as actionTypes from "./constants"

import {
  getGoodsListRequest
} from "@/api/request"

const changeGoodsList = (data) => ({
  type: actionTypes.SET_GOODS_LIST,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.SET_ENTER_LOADING,
  data
})

export const getGoodsList = () => {
    return (dispatch) => {
      getGoodsListRequest().then((data) => {
        dispatch(changeGoodsList(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
