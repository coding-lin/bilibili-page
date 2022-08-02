import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/styles/reset.css'
import './assets/font/font1/iconfont.css'
import './assets/font/font-vip/iconfont.css'
import 'swiper/dist/css/swiper.min.css'
import './modules/rem'
import 'weui'
import store from './store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
