import { combineReducers } from "redux";
import { reducer as vipReducer } from '@/pages/Vip/store/index'

export default combineReducers({
  vip: vipReducer
})