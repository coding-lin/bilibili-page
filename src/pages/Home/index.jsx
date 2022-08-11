import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import HomeNav from './HomeNav'

export default function Home() {

  return (
    <>
      <Header />
      <HomeNav />
      <Outlet />
    </>
  )
}
