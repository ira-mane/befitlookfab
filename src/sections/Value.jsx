import React from "react";
import logo1 from '../assets/images/logo1.png'

const Value = () => {
  return (

    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-[#EDFFCC] p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#3B5704] mb-2">BeFitLookFab</h2>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl text-justify">
            We empower individuals to make healthy choices by educating them about nutrition and providing them with the tools and resources they need to succeed.
  
            Our mission is to help individuals achieve sustainable weight management by providing personalized diet plans and ongoing support.
          </p>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-3 bg-[#81b622] p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2">Why Choose Us?</h2>
          <p className="text-gray-100 text-lg md:text-xl lg:text-2xl text-justify">We believe in empathy and best personalized plans to make you more confident in your journey. Empowering individuals to reach their full potential, we deliver personalized guidance and motivation to achieve a healthier, stronger, and more balanced lifestyle.</p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <img src={logo1} className="w-full h-full object-contain" alt="Logo" />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-[#EDFFCC] p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#3B5704] mb-2">Client Centric</h2>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl text-justify">
            We prioritize the individual needs and goals of our clients, tailoring our programs to their specific circumstances.
            <br />
            By taking a client-centered approach, we can provide personalized support and guidance, increasing the likelihood of successful health result.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#3b5704] p-3 md:p-5 lg:p-7 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2">Empathy</h2>
          <p className="text-gray-100 text-lg md:text-xl lg:text-2xl text-justify">Clients can trust as our approach is based on best practices in the field.</p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#81B622] p-3 md:p-5 lg:p-7 rounded-lg shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2">Evidence Based</h2>
          <p className="text-gray-100 text-lg md:text-xl lg:text-2xl text-justify">Evidence-based diet plan and effective personalized nutrition plans for individual.</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Value);