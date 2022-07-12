import { combineReducers } from "redux";
import { reducer as homeReducer } from '@/pages/Home/store/index'
import { reducer as vipReducer } from '@/pages/Vip/store/index'

export default combineReducers({
  home: homeReducer,
  vip: vipReducer
})