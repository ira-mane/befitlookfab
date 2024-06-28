import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
    <header className='bg-[#3B5704]'>
      <NavLink to='/booking'>
    <Marquee>
      <h1 className='text-white text-[18px] text-center'>Book Your Appointment Now.⌚ Make living happy and healthy.🥗 Befit-lookfab by Shumaila</h1>
      </Marquee>
      </NavLink>
    </header>
    <Navbar/>
    </>
  )
}

export default Header

