import React from 'react'

const Header = () => {
  return (
    <section className='w-full bg-[#f5f5f5] text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40'>
      <h1 className='text-[#3B5704] font-bold text-3xl'>BeFit LookFab</h1>
      <div className='hidden lg:flex justify-end items-center gap-2'>
        <ul className='flex justify-center items-center gap-3'>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='/'>Home</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#services'>About Us</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#pricing'>Pricing</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#faq'>FAQs</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#contact'>Contact</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#contact'>Blog</a>
          </li>
          <li>
            <a className='text-lg text-[#3B5704] cursor-pointer rounded-sm  px-5 py-2 hover:bg-[#3B5704] hover:text-white active:text-white' href='#contact'>Recipe</a>
          </li>
          <li>
            <a className='bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer' href='#contact'>Booking</a>
          </li>
        </ul>
      </div>

      
    </section>
  )
}

export default Header