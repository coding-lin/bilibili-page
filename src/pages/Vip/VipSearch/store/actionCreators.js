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

export const getGoodsList = (query) => {
  return (dispatch) => {
    getGoodsListRequest().then((data) => {
      let res = data.filter(item => item.title.indexOf(query) !== -1)
      dispatch(changeGoodsList(res))
      dispatch(changeEnterLoading(false))
    })
  }
}
