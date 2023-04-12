import * as actionTypes from './constants'
import { unique } from '@/utils'

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
        if (item.id === action.id) {
          item.like = true;
          item.collection += 1;
          addGoodsList.unshift(item);
        }
      })
      return {
        ...state,
        collectGoodsList: unique(addGoodsList),
      }
    case actionTypes.DEL_COLLECT_GOODS:
      let delGoodsList = state.collectGoodsList.filter(item => item.id !== action.id);
      return {
        ...state,
        collectGoodsList: delGoodsList,
      }
    default:
      return state;
  }
}

export default reducer