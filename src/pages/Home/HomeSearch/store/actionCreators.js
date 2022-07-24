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

export const getSuggestList = () => {
    return (dispatch) => {
      getSuggestListRequest().then((data) => {
        dispatch(changeSuggestList(data))
        dispatch(changeEnterLoading(false))
      })
    }
  }
