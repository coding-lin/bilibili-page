import { createStore, compose, applyMiddleware } from 'redux'
// 组件  中间件redux-thunk   数据
import thunk from 'redux-thunk' // 异步数据管理
import reducer from './reducer'

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store