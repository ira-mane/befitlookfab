// import React from 'react'
// import fruitbg from '../assets/images/fruitbg.png'

// const About = () => {
//   return (

//     <div id='services'className="bg-[#EDFFdd] min-h-screen flex flex-col lg:flex-row items-center justify-center" style={{
//       backgroundImage: `url(${fruitbg})`, 
//       backgroundSize: 'cover', 
//       backgroundPosition: 'center', 
//     }}>
// {/* Left Side: Mission and Vision */}
//       <div className="lg:w-1/2 p-8 border border-[#3B5704] rounded-lg bg-[#F0F5E1] ml-5">
//         <h1 className="text-[#3B5704] font-bold text-5xl">Our Mission</h1>
//         <p className="text-slate-05 text-2xl mt-1">
//           Empower individuals to reach weight loss goals with personalized nutrition plans and continuous support.
//         </p>
//         <h1 className="text-[#3B5704] font-bold text-5xl mt-10">Our Vision</h1>
//         <p className="text-slate-05 text-2xl">
//           Our Vision is to transform lives through nutrition. I want to equip you with the knowledge and tools necessary for long-term weight loss and overall wellness. Let's work together to make your health goals a reality.
//         </p>
//       </div>

//       {/* Right Side: Our Story */}
//       <div className="lg:w-1/2 p-8 border border-[#3B5704] rounded-lg bg-[#F0F5E1] mr-3 ml-3">
//         <h1 className="text-[#3B5704] font-bold text-5xl mb-3">Our Story</h1>
//         <p className="text-slate-05 text-2xl">
//           Shumaila Sayyed, the founder of our company, is passionate about promoting healthy lifestyles and empowering individuals to make sustainable changes.
//           <br /><br />
//           As an experienced dietitian and nutritionist, I am committed to supporting you on your journey towards better health. I believe in taking a personalized approach to weight loss, crafting programs that cater to the specific needs and goals of each individual client.
//           <br /><br />
//           I’m your dietitian with a background in Food Science (BSc) and a post-graduation in Sports Nutrition. Having worked in gyms, hospitals, personal clinics, and wellness companies, my aim at our weight loss business is to assist you in achieving your goals with personalized nutrition plans and expert guidance.

//         </p>
//       </div>
//     </div>

//   )
// }

// export default About


// import React from 'react';
// import fruitbg from '../assets/images/fruitbg.png'

// function About() {
//   return (
//     <div className="flex flex-col h-[100vh] bg-white">
//       {/* Hero Section */}
//       <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${fruitbg})` }}>
//         <div className="container mx-auto p-4 pt-20">
//           <h1 className="text-4xl font-bold text-black justify-center flex align-middle">About Us</h1>
//         </div>
//       </div>

//       {/* Vision Section */}
//       <div className="bg-white py-10 p-10">
//         <div className="container mx-auto p-4">
//           <h2 className="text-3xl font-bold text-#3B5704">Our Vision</h2>
//           <p className="text-lg text-black">Our Vision is to transform lives through nutrition. I want to equip you with the knowledge and tools necessary for long-term weight loss and overall wellness. Let's work together to make your health goals a reality.</p>
        
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="bg-white py-10 p-10">
//         <div className="container mx-auto p-4">
//           <h2 className="text-3xl font-bold text-#3B5704">Our Mission</h2>
//           <p className="text-lg text-black">Empower individuals to reach weight loss goals with personalized nutrition plans and continuous support.</p>
         
//         </div>
//       </div>

//       {/* Our Story Section */}
//       <div className="bg-white py-10 p-10">
//         <div className="container mx-auto p-4">
//           <h2 className="text-3xl font-bold text-#3B5704">Our Story</h2>
//           <p className="text-lg text-black"> I’m your dietitian with a background in Food Science (BSc) and a post-graduation in Sports Nutrition. Having worked in gyms, hospitals, personal clinics, and wellness companies, my aim at our weight loss business is to assist you in achieving your goals with personalized nutrition plans and expert guidance.
//           </p>
         
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


import React from 'react';
import fruitbg from '../assets/images/fruitbg.png'
import dietplan from '../assets/images/dietplan.jpg'
import dietician from '../assets/images/dietician.jpeg'
import nutrition from '../assets/images/nutrition.jpg'

function About() {
  return (
    <div className="flex flex-col max-h-screen bg-white">
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
          <p className="text-lg text-black">Our Vision is to transform lives through nutrition. I want to equip you with the knowledge and tools necessary for long-term weight loss and overall wellness. Let's work together to make your health goals a reality.</p>
        </div>
        <div className="bg-white py-10 p-10 w-1/3 mr-4">
          <h2 className="text-3xl font-bold text-#3B5704">Our Mission</h2>
          <p className="text-lg text-black">Empower individuals to reach weight loss goals with personalized nutrition plans and continuous support.</p>
        </div>
        <div className="bg-white py-10 p-10 w-1/3">
          <h2 className="text-3xl font-bold text-#3B5704">Our Story</h2>
          <p className="text-lg text-black"> I’m your dietitian with a background in Food Science (BSc) and a post-graduation in Sports Nutrition. Having worked in gyms, hospitals, personal clinics, and wellness companies, my aim at our weight loss business is to assist you in achieving your goals with personalized nutrition plans and expert guidance.</p>
        </div>
      </div>

      {/* Img slider */}
      <div className="flex justify-center">
        <img src={dietplan} alt="Image 1" className="w-1/3 mr-4" />
        <img src={nutrition} alt="Image 2" className="w-1/3 mr-4" />
        <img src={dietician} alt="Image 3" className="w-1/3" />
      </div>
    </div>
  );
}

export default About;


