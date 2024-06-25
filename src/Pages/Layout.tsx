import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'

type Props = {}

function Layout({}: Props) {
  return (
    <div className="h-[100vh] flex flex-col">
        <Header />
        <div className="bg-pattern flex-1 max-h-[98%]">
        <Outlet />
        </div>
    </div>
  )
}

export default Layout