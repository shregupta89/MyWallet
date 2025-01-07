import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/FOoter'
const MainLayout = () => {
  return (
    <div className='w-screen h-screen bg-white text-black dark:bg-gray-800  dark:text-white'>
      <Navbar/>

      <main>
      <Outlet/>
      </main>
      
      <Footer/>
    </div>
  )
}

export default MainLayout
