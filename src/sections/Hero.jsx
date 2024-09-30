import React from 'react'
import Heroimg from '../assets/images/heroimg.png'
import Faq from '../sections/Faq'
import Contact from '../sections/Contact'
import Value from '../sections/Value'

const Hero = () => {
  return (
    <>
      <section className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-[#F8FFE8] h-auto lg:h-screen'>
        <div className='flex justify-center items-start flex-col gap-5 lg:w-1/2 px-8 py-10 lg:px-20 lg:py-20 md:px-12 md:py-15 sm:px-8 sm:py-10'>
          <h1 className='text-[#3B5704] font-bold text-4xl lg:text-5xl md:text-4xl sm:text-3xl'>Priotizing physical fitness and self care for<span className='text-[#81B622]'> healthy</span> and confidence appearance.</h1>
          <p className='text-[#0d1106] text-xl lg:text-xl md:text-lg sm:text-lg'>Book a consultation today with top-rated dietitian! Achieve your healthy goals with personalized nutrition plans tailored just for you.</p>
          <div className='flex justify-center items-center gap-4'>
            <a href='/booking'>
              <button className='bg-[#3B5704] text-white px-3 lg:px-6 py-2 rounded-md text-lg lg:text-lg md:text-lg sm:text-lg hover:bg-black hover:text-white cursor-pointer'>Register Now</button>
            </a>
            <a href="https://www.instagram.com/befitlookfab" target="_blank" rel="noopener noreferrer">
              <button className='border-2 border-[#3B5704] text-[#3b5704] text-lg lg:text-lg md:text-lg sm:text-lg rounded-md px-3 lg:px-6 py-2 hover:border-black hover:text-black cursor-pointer'>Watch Video</button>
            </a>
          </div>
        </div>
        <div className='relative h-full flex justify-center item-center w-1/2 px-5 py-10 object-cover lg:w-1/2 md:w-1/2 sm:w-full'>
          <img src={Heroimg} alt="Yoga Lady/Healthy Diet/Nutrition" width={100} height={300} className='lg:w-full md:w-full sm:w-full object-contain' />
        </div>
      </section>
      <Value />
      <Faq />
      <Contact />
    </>
  )
}


export default Hero