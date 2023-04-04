import * as actionTypes from './constants'
import { unique } from '@/utils'

const defaultState = {
  videosList: [],
  waitVideosList: [],
  enterLoading: true
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return {
        ...state,
        enterLoading: action.data
      }
    case actionTypes.CHANGE_VIDEOS_LIST:
      return {
        ...state,
        videosList: action.data
      }
    case actionTypes.ADD_WAIT_VIDEOS:
      let addVideosList = state.waitVideosList;
      state.videosList.map(item => {
        if (item.id === action.id) {
          addVideosList.unshift(item);
        }
      })
      return {
        ...state,
        waitVideosList: unique(addVideosList)
      }
    case actionTypes.DEL_WAIT_VIDEOS:
      let delVideosList = state.waitVideosList.filter(item => item.id !== action.id);
      return {
        ...state,
        waitVideosList: delVideosList
      }
    case actionTypes.DEL_ALL_VIDEOS:
      let newVideosList = [];
      return {
        ...state,
        waitVideosList: newVideosList
      }
    default:
      return state;
  }
}

export default reducer