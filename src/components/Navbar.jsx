import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='w-full bg-white text-[#3B5704] flex justify-between items-center px-8 py-5 lg:px-16 sticky top-0 z-40'>
            <NavLink to='/' className='flex gap-3'>
                <h1 className='text-[#3B5704] font-bold text-3xl'>BeFitLookFab</h1>
            </NavLink>

            <div className='block lg:hidden'>
                <button onClick={toggleMenu} className='text-[#3B5704] focus:outline-none'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Navbar links */}
            <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
                <ul className='flex flex-col lg:flex-row lg:gap-3'>
                    <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink exact to='/' activeClassName='font-bold'>
                            Home
                        </NavLink>
                    </li>
                    <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/about' activeClassName='font-bold'>
                            About
                        </NavLink>
                    </li>   <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/blog' activeClassName='font-bold'>
                            Blog
                        </NavLink>
                    </li>
                    <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/pricing' activeClassName='font-bold'>
                            Pricing
                        </NavLink>
                    </li>
                 
                    <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/bmi' activeClassName='font-bold'>
                            BMI
                        </NavLink>
                    </li>
                    <li className='text-lg cursor-pointer px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white'>
                        <NavLink to='/contact' activeClassName='font-bold'>
                            Contact
                        </NavLink>
                    </li>
                    <li className='bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>
                        <NavLink to='/booking'>Booking</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
