import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full bg-white text-white flex justify-between items-center px-8 py-5 lg:px-16 sticky top-0 z-40'>
                <NavLink to='/' className='flex gap-3'>
                    <h1 className='text-[#3B5704] font-bold text-3xl'>BeFitLookFab</h1>
                </NavLink>
                <div className='hidden lg:flex justify-end items-center gap-2'>
                <ul className='flex justify-center items-center gap-3'>
                <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/Pricing'>Pricing</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/recipe'>Recipe</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/bmi'>BMI</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/faq'>FAQs</NavLink>
                    </li>
                    <li className='bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>
                        <NavLink to='/booking'>Booking</NavLink>
                    </li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar