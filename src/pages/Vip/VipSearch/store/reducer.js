import * as actionTypes from "./constants"

const defaultState = {
  goodsList: [],
  enterLoading: false,
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_GOODS_LIST:
      return {
        ...state,
        goodsList: action.data,
      }
    case actionTypes.SET_ENTER_LOADING:
      return {
        ...state,
        enterLoading: action.data,
      }
    default:
      return state
  }
}
