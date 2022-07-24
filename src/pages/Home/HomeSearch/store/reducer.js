import * as actionTypes from "./constants"

const defaultState = {
  suggestList: [],
  enterLoading: false,
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_SUGGEST_LIST:
      return {
        ...state,
        suggestList: action.data,
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
