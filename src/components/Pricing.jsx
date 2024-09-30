
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
        description: 'Customized Meal Plans & Nutrition Deficiency Correction',
        desc1:'Medical Reports & Restaurant Guides',
        desc2:'Travel Guides & Complimentary Green Tea Plan',
        desc3: 'Airport Menu Extension',
        
        price: 'Rs. 6000/-',
      },
      {
        heading: '2 Month',
        description: 'Customized Meal Plans & Nutrition Deficiency Correction',
        desc1:'Medical Reports & Restaurant Guides',
        desc2:'Travel Guides & Complimentary Green Tea Plan',
        desc3: 'Airport Menu Extension',
        
        price: 'Rs. 10000/-',
      },
      {
        heading: '3 Month',
        description: 'Customized Meal Plans & Nutrition Deficiency Correction',
        desc1:'Medical Reports & Restaurant Guides',
        desc2:'Travel Guides & Complimentary Green Tea Plan',
        desc3: 'Airport Menu Extension',
        
        price: 'Rs. 14400/-',
      },
      {
        heading: '6 Month',
        description: 'Customized Meal Plans & Nutrition Deficiency Correction',
        desc1:'Medical Reports & Restaurant Guides',
        desc2:'Travel Guides & Complimentary Green Tea Plan',
        desc3: 'Airport Menu Extension',
        price: 'Rs. 24000/-',
      }
    ],
    transform: [
      {
        heading: '1 Month',
        description: 'Personalized Meal Plans',
        desc1:'Nutritional Counseling',
        desc2:'Progress Tracking',
        desc3: 'This is our basic plan',
        price: 'Rs. 1500/-',
      },
      {
        heading: '2 Month',
        description: 'Personalized Meal Plans',
        desc1:'Nutritional Counseling',
        desc2:'Progress Tracking',
        desc3: 'This is our basic plan',
        price: 'Rs. 2700/-',
      },
      {
        heading: '3 Month',
        description: 'Personalized Meal Plans',
        desc1:'Nutritional Counseling',
        desc2:'Progress Tracking',
        desc3: 'This is our basic plan',
        price: 'Rs. 3750/-',
      },
      {
        heading: '6 Month',
        description: 'Personalized Meal Plans',
        desc1:'Nutritional Counseling',
        desc2:'Progress Tracking',
        desc3: 'This is our basic plan',
        price: 'Rs. 5400/-',
      }
    ],
    medical: [
      {
        heading: '1 Month',
        description: 'Personalized Meal Plans & Nutritional Counseling:',
        desc1:'Progress Tracking & Medical Therapy',
        desc2:'Lifestyle Coaching and BMI checking',
        desc3: 'Nutrition Deficiency Correction',
        price: 'Rs. 1400/-',
      },
      {
        heading: '2 Month',
        description: 'Personalized Meal Plans & Nutritional Counseling:',
        desc1:'Progress Tracking & Medical Therapy',
        desc2:'Lifestyle Coaching and BMI checking',
        desc3: 'Nutrition Deficiency Correction',
        price: 'Rs. 1800/-',
      },
      {
        heading: '3 Month',
        description: 'Personalized Meal Plans & Nutritional Counseling:',
        desc1:'Progress Tracking & Medical Therapy',
        desc2:'Lifestyle Coaching and BMI checking',
        desc3: 'Nutrition Deficiency Correction',
        price: 'Rs. 3500/-',
      },
      {
        heading: '6 Month',
        description: 'Personalized Meal Plans & Nutritional Counseling:',
        desc1:'Progress Tracking & Medical Therapy',
        desc2:'Lifestyle Coaching and BMI checking',
        desc3: 'Nutrition Deficiency Correction',
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
            <div className="shadow-md rounded p-4 h-[50vh] bg-white">
              <h2 className="text-2xl font-bold mb-5">{plan.heading}</h2>
              <p className="text-black font-bold">✔ {plan.description}</p>
              <p className="text-black font-bold">✔ {plan.desc1}</p>
              <p className="text-black font-bold">✔ {plan.desc2}</p>
              <p className="text-black font-bold">✔ {plan.desc3}</p>
              
              <p className="text-2xl font-bold text-green-800 mt-10">Price: {plan.price}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default Pricing;

