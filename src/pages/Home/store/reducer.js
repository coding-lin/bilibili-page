import * as actionTypes from './constants'

const defaultState = {
  videosList: [],
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
    default:
      return state;
  }
}

export default reducer