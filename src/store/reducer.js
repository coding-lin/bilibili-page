import { combineReducers } from "redux";
import { reducer as homeReducer } from '@/pages/Home/store/index'
import { reducer as searchReducer } from "@/pages/Home/HomeSearch/store/index"
import { reducer as vipReducer } from '@/pages/Vip/store/index'
import { reducer as vipSearchReducer } from '@/pages/Vip/VipSearch/store/index'

export default combineReducers({
  home: homeReducer,
  search: searchReducer,
  vip: vipReducer,
  vipsearch: vipSearchReducer
})