
import React, { useState } from 'react';

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = {
    pro: [
      {
        heading: '1 month',
        description: '1. Get Complimentary Green Tea',
        desc1:'2. Airpot Menu',
        desc2:'3. Restaurant Guide and Travel Guide',
        desc3: '4. Maintenence Guide, daily Update and Recipe, Exercise Video',
        
        price: 'Rs. 6000/-',
      },
      {
        heading: '2 Month',
        description: '1. Get Complimentary Green Tea',
        desc1:'2. Airpot Menu',
        desc2:'3. Restaurant Guide and Travel Guide',
        desc3: '4. Maintenence Guide, daily Update, Recipe, Exercise Video',
        
        price: 'Rs. 10000/-',
      },
      {
        heading: '3 Month',
        description: '1. Get Complimentary Green Tea',
        desc1:'2. Airpot Menu',
        desc2:'3. Restaurant Guide and Travel Guide',
        desc3: '4. Maintenence Guide, daily Update and Recipe, Exercise Video',
        
        price: 'Rs. 16000/-',
      },
      {
        heading: '6 Month',
        description: '1. Get Complimentary Green Tea',
        desc1:'2. Airpot Menu',
        desc2:'3. Restaurant Guide and Travel Guide',
        desc3: '4.Maintenence Guide, daily Update and Recipe',
        desc4:'5.Exercie Video',
        price: 'Rs. 24000/-',
      }
    ],
    transform: [
      {
        heading: '1 Month',
        description: '1. Only Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Either Weight Gain or Weight Loss Transformation',
        desc3: 'Or Diet Plan Consultation',
        price: 'Rs. 1200/-',
      },
      {
        heading: '2 Month',
        description: '1. Only Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Either Weight Gain or Weight Loss Transformation',
        desc3: 'Or Diet Plan Consultation',
        price: 'Rs. 1600/-',
      },
      {
        heading: '3 Month',
        description: '1. Only Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Either Weight Gain or Weight Loss Transformation',
        desc3: 'Or Diet Plan Consultation',
        price: 'Rs. 2500/-',
      },
      {
        heading: '4 Month',
        description: '1. Only Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Either Weight Gain or Weight Loss Transformation',
        desc3: 'Or Diet Plan Consultation',
        price: 'Rs. 5400/-',
      }
    ],
    medical: [
      {
        heading: '1 Month',
        description: '1. Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Working On Blood Report',
        desc3: '4. Recipe and Diet Plan',
        price: 'Rs. 1400/-',
      },
      {
        heading: '2 Month',
        description: '1. Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Working On Blood Report',
        desc3: '4. Recipe and Diet Plan',
        price: 'Rs. 1800/-',
      },
      {
        heading: '3 Month',
        description: '1. Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Working On Blood Report',
        desc3: '4. Recipe and Diet Plan',
        price: 'Rs. 3500/-',
      },
      {
        heading: '6 Month',
        description: '1. Transformation',
        desc1:'2. Weekly Follow-up',
        desc2:'3. Working On Blood Report',
        desc3: '4. Recipe and Diet Plan',
        price: 'Rs. 7200/-',
      }
    ],
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-[#F8FFE8]">
      <h1 className="text-3xl font-bold flex justify-center align-middle">Pricing Plans</h1>
      <p className='m-5 ml-20 mr-20'>We offer three plans, each tailored to specific categories, allowing you to choose the one that best suits your needs. To learn more about each option, please click the "Pro" "Medical" and "Transform" buttons. The plans are organized based on duration in months for your convenience..</p>
      <div className="flex justify-center mb-4">
        <button onClick={() => handlePlanClick('transform')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">Transform</button>
        <button onClick={() => handlePlanClick('medical')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer ml-2">Medical</button>
        <button onClick={() => handlePlanClick('pro')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer ml-2">Pro</button>
      </div>
      {selectedPlan && (
        <div className="flex flex-wrap justify-center">
        {plans[selectedPlan].map((plan, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="shadow-md rounded p-4 h-[50vh]">
              <h2 className="text-2xl font-bold">{plan.heading}</h2>
              <p className="text-black">✔ {plan.description}</p>
              <p className="text-black">✔ {plan.desc1}</p>
              <p className="text-black">✔ {plan.desc2}</p>
              <p className="text-black">✔ {plan.desc3}</p>
              
              <p className="text-lg font-bold text-green-950">Price: {plan.price}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Pricing;

