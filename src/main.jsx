import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/styles/reset.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.min.css'
import './modules/rem'
import 'weui'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
