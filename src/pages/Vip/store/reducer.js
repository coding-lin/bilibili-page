import * as actionTypes from './constants'

const defaultState = {
  bannersList: [],
  goodsList: [],
  collectGoodsList: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOADING:
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
    case actionTypes.ADD_COLLECT_GOODS:
      let addGoodsList = state.collectGoodsList;
      state.goodsList.map(item => {
        if (item.id === action.id && addGoodsList.indexOf(item) === -1) {
          addGoodsList.unshift(item);
        }
      })
      return {
        ...state,
        collectGoodsList: addGoodsList,
      }
    case actionTypes.DEL_COLLECT_GOODS:
      return {
        
      }
    default:
      return state;
  }
}

export default reducer