import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Header from './Header'
import HomeNav from './HomeNav'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home/recommend')
  }, [])

  return (
    <>
      <Header />
      <HomeNav />
      <Outlet />
    </>
  )
}
