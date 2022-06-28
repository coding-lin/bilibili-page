import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import HomeNav from '@/components/HomeNav'

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
