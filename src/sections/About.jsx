import React from 'react'
import fruitbg from '../assets/images/fruitbg.png'

const About = () => {
  return (

    <div id='services'className="bg-[#EDFFdd] min-h-screen flex flex-col lg:flex-row items-center justify-center" style={{
      backgroundImage: `url(${fruitbg})`, // Set the background image
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Center the image
    }}>
{/* Left Side: Mission and Vision */}
      <div className="lg:w-1/2 p-8 border border-[#3B5704] rounded-lg bg-[#F0F5E1] ml-5">
        <h1 className="text-[#3B5704] font-bold text-5xl">Our Mission</h1>
        <p className="text-slate-05 text-2xl mt-1">
          Empower individuals to reach weight loss goals with personalized nutrition plans and continuous support.
        </p>
        <h1 className="text-[#3B5704] font-bold text-5xl mt-10">Our Vision</h1>
        <p className="text-slate-05 text-2xl">
          Our Vision is to transform lives through nutrition. I want to equip you with the knowledge and tools necessary for long-term weight loss and overall wellness. Let's work together to make your health goals a reality.
        </p>
      </div>

      {/* Right Side: Our Story */}
      <div className="lg:w-1/2 p-8 border border-[#3B5704] rounded-lg bg-[#F0F5E1] mr-3 ml-3">
        <h1 className="text-[#3B5704] font-bold text-5xl mb-3">Our Story</h1>
        <p className="text-slate-05 text-2xl">
          Shumaila Sayyed, the founder of our company, is passionate about promoting healthy lifestyles and empowering individuals to make sustainable changes.
          <br /><br />
          As an experienced dietitian and nutritionist, I am committed to supporting you on your journey towards better health. I believe in taking a personalized approach to weight loss, crafting programs that cater to the specific needs and goals of each individual client.
          <br /><br />
          I’m your dietitian with a background in Food Science (BSc) and a post-graduation in Sports Nutrition. Having worked in gyms, hospitals, personal clinics, and wellness companies, my aim at our weight loss business is to assist you in achieving your goals with personalized nutrition plans and expert guidance.

        </p>
      </div>
    </div>

  )
}

export default About


