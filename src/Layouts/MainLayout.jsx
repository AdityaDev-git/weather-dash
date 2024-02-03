import React from 'react'
import SidebarC from '../Components/SidebarC'
import Dashboard from '../Components/Dashboard'


const MainLayout = () => {
  return (
    <div className='flex flex-row h-screen w-screen bg-slate-50'>
        <SidebarC/>
        <div className='flex-1 px-8 py-4 bg-gray-900 overflow-y-scroll scroll-smooth'>
        <Dashboard/>
        </div>
    </div>
  )
}

export default MainLayout