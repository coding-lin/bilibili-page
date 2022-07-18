import { createStore, compose, applyMiddleware } from 'redux'
// 组件  中间件redux-thunk   数据
import reducer from './reducer'
import thunk from 'redux-thunk'  // 异步数据管理
import logger from 'redux-logger'  // 让 redux 调试更优秀

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, 
  // 合并成一个中间件对象
  compose(
    composeEnhancers(applyMiddleware(thunk)),
    applyMiddleware(logger)
  )
)

export default store