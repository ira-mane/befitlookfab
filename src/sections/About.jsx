import React from 'react';
import fruitbg from '../assets/images/fruitbg.png'
import dietplan from '../assets/images/dietplan.jpg'
import dietician from '../assets/images/dietician.jpeg'
import nutrition from '../assets/images/nutrition.jpg'

function About() {
  return (
    <div className="flex flex-col h-[120vh] bg-white">
      {/* Hero Section */}
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${fruitbg})` }}>
        <div className="container mx-auto p-4 pt-20">
          <h1 className="text-4xl font-bold text-black justify-center flex align-middle mb-10">About Us</h1>
        </div>
      </div>

      {/* Centered divs for Vision, Mission, and Our Story */}
      <div className="flex justify-center">
        <div className="bg-white py-10 p-10 w-1/3 mr-4">
          <h2 className="text-3xl font-bold text-#3B5704">Our Vision</h2>
          <p className="text-lg text-black pt-5">Our Vision is to transform lives through nutrition. I want to equip you with the knowledge and tools necessary for long-term weight loss and overall wellness. Let's work together to make your health goals a reality.</p>
        </div>
        <div className="bg-white py-10 p-10 w-1/3 mr-4">
          <h2 className="text-3xl font-bold text-#3B5704">Our Mission</h2>
          <p className="text-lg text-black pt-5">Empower individuals to reach weight loss goals with personalized nutrition plans and continuous support.</p>
        </div>
        <div className="bg-white py-10 p-10 w-1/3">
          <h2 className="text-3xl font-bold text-#3B5704">Our Story</h2>
          <p className="text-lg text-black pt-5"> I’m your dietitian with a background in Food Science (BSc) and a post-graduation in Sports Nutrition. Having worked in gyms, hospitals, personal clinics, and wellness companies, my aim at our weight loss business is to assist you in achieving your goals with personalized nutrition plans and expert guidance.</p>
        </div>
      </div>

      {/* Img slider */}
      <div className="flex justify-center">
        <img src={dietplan} alt="Dietplan" className="py-10 p-10 w-1/3 mr-4" />
        <img src={nutrition} alt="Nutition" className="py-10 p-10 w-1/3 mr-4" />
        <img src={dietician} alt="Dieitician" className="py-10 p-10 w-1/3" />
      </div>
    </div>
  );
}

export default About;


