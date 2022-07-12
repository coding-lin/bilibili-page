import * as actionTypes from './constants'

const defaultState = {
  bannersList: [],
  goodsList: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return {
        ...state,
        enterLoading: action.data
      }
    case actionTypes.CHANGE_BANNERS_LIST:
      return {
        ...state,
        bannersList: action.data
      }
    case actionTypes.CHANGE_GOODS_LIST:
      return {
        ...state,
        goodsList: action.data
      }
    default:
      return state;
  }
}

export default reducer