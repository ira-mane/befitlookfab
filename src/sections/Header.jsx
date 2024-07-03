import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <header className='bg-[#3B5704] font-light'>
        <NavLink to='/booking'>
          <Marquee>
            <h1 className='text-white text-[18px] text-center'>Book Your Appointment Now! ⌚ Making Life Happy and Healthy with BeFit-LookFab by Dietician Shumaila. 🥗</h1>
          </Marquee>
        </NavLink>
      </header>
      <Navbar />
    </>
  )
}

export default Header

