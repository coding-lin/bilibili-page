import * as actionTypes from "./constants"

import {
  getSuggestListRequest
} from "@/api/request"

const changeSuggestList = (data) => ({
  type: actionTypes.SET_SUGGEST_LIST,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.SET_ENTER_LOADING,
  data
})

export const getSuggestList = (query) => {
  return (dispatch) => {
    getSuggestListRequest().then((data) => {
      let res = data.filter(item => item.title.indexOf(query) !== -1)
      dispatch(changeSuggestList(res))
      dispatch(changeEnterLoading(false))
    })
  }
}
