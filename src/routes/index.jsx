import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
const Dynamic = lazy(() => import('@/pages/dynamic'))
const Vip = lazy(() => import('@/pages/vip'))
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
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />} >
        {/* 二级路由 */}
        <Route path="/home/live" element={<Live />} />
        <Route path="/home/recommend" element={<Recommend />} />
        <Route path="/home/hot" element={<Hot />} />
        <Route path="/home/animation" element={<Animation />} />
        <Route path="/home/movies" element={<Movies />} />
        <Route path="/home/campus" element={<Campus />} />
      </Route>
      <Route path="/dynamic" element={<Dynamic />}></Route>
      <Route path="/vip" element={<Vip />}></Route>
      <Route path="/mine" element={<Mine />}></Route>
    </Routes>
  )
}

export default RoutesConfig
