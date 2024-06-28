import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <>
    <header>
      <NavLink to='/booking'>
      <h1 className='bg-[#3B5704] text-white text-[18px] text-center'>Book Your Appointment Now.⌚ Make living happy and healthy.🥗 Befit-lookfab by Shumaila</h1>
      </NavLink>
    </header>
    <Navbar/>
    </>
  )
}

export default Header

