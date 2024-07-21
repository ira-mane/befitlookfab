import React from "react";
import logo1 from '../assets/images/logo1.png'

const Value = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-[#EDFFCC] p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#3B5704] mb-2">BeFitLookFab</h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl">
            We empower individuals to make healthy choices by educating them about nutrition and providing them with the tools and resources they need to succeed.
            <br />
            Our mission is to help individuals achieve sustainable weight loss by providing personalized diet plans and ongoing support.
          </p>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-3 bg-[#81b622] p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-white mb-2">Why Choose Us?</h2>
          <p className="text-gray-100 text-lg md:text-xl lg:text-2xl">We believe in empathy and best personalized plans to make you more confident in your journey.</p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white p-4 rounded-lg shadow-lg">
          <img src={logo1} className="w-full h-full object-contain" alt="Logo" />
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-[#EDFFCC] p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-[#3B5704] mb-2">Client Centric</h2>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl">
            We prioritize the individual needs and goals of our clients, tailoring our programs to their specific circumstances.
            <br />
            By taking a client-centered approach, we can provide personalized support and guidance, increasing the likelihood of successful weight loss.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#3b5704] p-2 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-2">Empathy</h2>
          <p className="text-gray-100 text-sm md:text-base lg:text-lg">Clients can trust as our approach is based on best practices in the field.</p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-[#81B622] p-2 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-white mb-2">Evidence Based</h2>
          <p className="text-gray-100 text-sm md:text-base lg:text-lg">Evidence-based dietician, effective personalized nutrition diet plans.</p>
        </div>
      </div>
    </div>
  );
};

export default Value;
