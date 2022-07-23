import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
const Search = lazy(() => import('@/pages/Search'))
const MailBox = lazy(() => import('@/pages/MailBox'))
const Dynamic = lazy(() => import('@/pages/Dynamic'))
const Vip = lazy(() => import('@/pages/Vip'))
const ShoppingCart = lazy(() => import('@/pages/ShoppingCart'))
const Mine = lazy(() => import('@/pages/Mine'))

const Live = lazy(() => import('@/pages/Home/Live'))
const Recommend = lazy(() => import('@/pages/Home/Recommend'))
const Hot = lazy(() => import('@/pages/Home/Hot'))
const Animation = lazy(() => import('@/pages/Home/Animation'))
const Movies = lazy(() => import('@/pages/Home/Movies'))
const Campus = lazy(() => import('@/pages/Home/Campus'))

const RoutesConfig = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>  // 首页
      <Route path="/home" element={<Home />} >
        {/* 二级路由 */}
        <Route path="/home/live" element={<Live />} />
        <Route path="/home/recommend" element={<Recommend />} />
        <Route path="/home/hot" element={<Hot />} />
        <Route path="/home/animation" element={<Animation />} />
        <Route path="/home/movies" element={<Movies />} />
        <Route path="/home/campus" element={<Campus />} />
      </Route>
      <Route path="/search" element={<Search />} />  // 首页搜索
      <Route path='/mail-box' element={<MailBox />}></Route>  // 首页邮箱
      <Route path="/dynamic" element={<Dynamic />}></Route>  // 动态
      <Route path="/vip" element={<Vip />}></Route>  // 会员购
      <Route path='/shopping-cart' element={<ShoppingCart />}></Route>  // 会员购购物车
      <Route path="/mine" element={<Mine />}></Route>  // 我的
    </Routes>
  )
}

export default RoutesConfig
