import React from 'react'
import Heroimg from '../assets/images/heroimg.png'
import Faq from '../sections/Faq'
import Contact from '../sections/Contact'
import Value from '../sections/Value'


const Hero = () => {
    return (
        <>
            <section className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-[#F8FFE8] h-auto lg:h-screen'>
                <div className='flex justify-center items-start flex-col gap-7 lg:w-1/2 px-8 py-10 lg:px-20 lg:py-20'>
                    <h1 className='text-[#3B5704] font-bold text-5xl'>Priotizing physical fitness and self care for<span className='text-[#81B622]'> healthy</span> and confidence appearance.</h1>
                    <p className='text-[#0d1106] text-2xl'>Book a consultation today with top-rated dietitian! Achieve your healthy goals with personalized nutrition plans tailored just for you.</p>
                    <div className='flex justify-center items-center gap-7'>
                        <a href='/booking'>
                            <button className='bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>Register Now</button>
                        </a>
                        <a href="https://www.instagram.com/befitlookfab" target="_blank" rel="noopener noreferrer">
                            <button className='border-2 border-[#3B5704] text-[#3b5704] text-[18px] rounded-md px-4 lg:px-8 py-3 hover:border-black hover:text-black cursor-pointer'>Watch Video</button>
                        </a>
                    </div>
                </div>
                <div className='relative h-full flex justify-center item-center w-1/2 px-5 py-20 object-cover'>
                    {/* <video className="absolute inset-0 h-full w-full rounded-lg object cover" controls>
                        <source src="https://lottie.host/embed/449c5a6d-fa66-4053-a2c1-be74d5cbf7d0/I9Cs0FnSuK.json" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> 
                    <img src={Heroimg} alt="Yoga Lady/Healthy Diet/Nutrition" width={700} height={600} /> */}
                    <lottie/>
                </div>
            </section>
            <Value />
            <Faq />
            <Contact />
        </>
    )
}


export default Hero