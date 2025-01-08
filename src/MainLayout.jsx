import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/FOoter'
const MainLayout = () => {
  return (
    <div className='min-h-screen w-full bg-white text-black dark:bg-gray-800  dark:text-white flex flex-col'>
      <Navbar/>

      <main  className='flex-grow'>
      <Outlet/>
      </main>
      
      <Footer/>
    </div>
  )
}

export default MainLayout
