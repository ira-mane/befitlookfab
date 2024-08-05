import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <React.Fragment>
      <header className='bg-[#3B5704] font-light'>
        <NavLink to='/booking'>
          <Marquee pauseOnHover>
            <h1 className='text-white text-[18px] text-center'>Book Your Appointment Now at 📞 +91 98670 89284 ! ⌚ Making Life Happy and Healthy with BeFit-LookFab by Dietician Shumaila. 🥗</h1>
          </Marquee>
        </NavLink>
      </header>
      <Navbar />
    </React.Fragment>
  )
}

export default Header

