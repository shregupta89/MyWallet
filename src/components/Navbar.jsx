import React from 'react'
import Button from './ui/Button'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=" flex justify-between  p-4">
    <div >
      <NavLink className='font-bold text-3xl cursor-pointer' to="/">KeyMint</NavLink>
    </div>
    <div>
    <Button 
    onClick={()=>{document.querySelector("html").classList.toggle("dark")}} text="Toggle Theme"/>
    </div>
  </div>
  )
}

export default Navbar
