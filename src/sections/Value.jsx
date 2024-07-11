import React from "react";
import logo1 from '../assets/images/logo1.png'

const Value = () => {
  return (
<div className="h-auto">
  <div className="flex flex-col gap-2 md:grid md:grid-cols-5 md:grid-rows-3 md:gap-2 h-auto md:h-[45vh]">
    <div className="col-span-2 row-span-2 bg-[#EDFFCC] p-4 rounded-lg shadow-lg">
      <h2 className="font-bold text-2xl md:text-4xl text-[#3B5704] mb-2">BeFitLookFab</h2>
      <p className="text-gray-700 text-base md:text-[1.1rem]">
        We empower individuals to make healthy choices by educating them about nutrition and providing them with the tools and resources they need to succeed.
        <br />
        Our mission is to help individuals achieve sustainable weight loss by providing personalized diet plans and ongoing support.
      </p>
    </div>
    <div className="col-span-3 row-span-1 bg-[#81b622] p-4 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl md:text-2xl text-white mb-2">Why Choose Us?</h2>
      <p className="text-gray-100 text-lg md:text-xl">We believe in empathy and best personalized plans to make you more confident in your journey.</p>
    </div>
    <div className="col-span-1 row-span-2 bg-white p-4 rounded-lg shadow-lg">
      <img src={logo1} className="w-full h-full object-contain" alt="Logo" />
    </div>
    <div className="col-span-2 row-span-2 bg-[#EDFFCC] p-4 rounded-lg shadow-lg">
      <h2 className="font-bold text-lg md:text-xl text-[#3B5704] mb-2">Client Centric</h2>
      <p className="text-gray-700 text-base">
        We prioritize the individual needs and goals of our clients, tailoring our programs to their specific circumstances.
        <br />
        By taking a client-centered approach, we can provide personalized support and guidance, increasing the likelihood of successful weight loss.
      </p>
    </div>
    <div className="col-span-1 row-span-1 bg-[#3b5704] p-2 rounded-lg shadow-lg">
      <h2 className="font-bold text-lg md:text-xl text-white mb-2">Empathy</h2>
      <p className="text-gray-100 text-sm md:text-base">Clients can trust as our approach is based on best practices in the field.</p>
    </div>
    <div className="col-span-1 row-span-1 bg-[#81B622] p-2 rounded-lg shadow-lg">
      <h2 className="font-bold text-lg md:text-xl text-white mb-2">Evidence Based</h2>
      <p className="text-gray-100 text-sm md:text-base">Evidence-based dietician, effective personalized nutrition diet plans.</p>
    </div>
  </div>
</div>

  );
};

export default Value;
