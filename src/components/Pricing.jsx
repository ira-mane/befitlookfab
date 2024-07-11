
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
        description: 'Get Complimentary Green Tea ,Airpot Menu, Restaurant Guide ,Travel Guide, Maintenence Guide,Daily Updates,Recipe ,Exercise View',
        price: 'Rs. 6000 /-',
      },
      {
        heading: '2 Month',
        description: 'Get personalized diet plans, regular check-ins, and a 30-minute consultation with our expert dietician.',
        price: '$149/month',
      },
      {
        heading: '3 Month',
        description: 'Get personalized diet plans, regular check-ins, a 30-minute consultation, and a personalized meal planning service.',
        price: '$249/month',
      },
      {
        heading: 'Pro Premium Plan',
        description: 'Get personalized diet plans, regular check-ins, a 30-minute consultation, and a personalized meal planning service.',
        price: '$249/month',
      }
    ],
    transform: [
      {
        heading: 'Transform Plan',
        description: 'Get a customized diet plan to help you achieve your weight loss goals.',
        price: '$49/month',
      },
      {
        heading: 'Transform Plus Plan',
        description: 'Get a customized diet plan and regular check-ins with our expert dietician to help you achieve your weight loss goals.',
        price: '$99/month',
      },
      {
        heading: 'Transform Premium Plan',
        description: 'Get a customized diet plan, regular check-ins, and a personalized meal planning service to help you achieve your weight loss goals.',
        price: '$199/month',
      },
      {
        heading: 'Transform Premium Plan',
        description: 'Get a customized diet plan, regular check-ins, and a personalized meal planning service to help you achieve your weight loss goals.',
        price: '$199/month',
      }
    ],
    medical: [
      {
        heading: 'Medical Plan',
        description: 'Get a personalized diet plan tailored to your specific medical needs.',
        price: '$199/month',
      },
      {
        heading: 'Medical Plus Plan',
        description: 'Get a personalized diet plan, regular check-ins, and a 30-minute consultation with our expert dietician tailored to your specific medical needs.',
        price: '$299/month',
      },
      {
        heading: 'Medical Premium Plan',
        description: 'Get a personalized diet plan, regular check-ins, a 30-minute consultation, and a personalized meal planning service tailored to your specific medical needs.',
        price: '$399/month',
      },
      {
        heading: 'Medical Premium Plan',
        description: 'Get a personalized diet plan, regular check-ins, a 30-minute consultation, and a personalized meal planning service tailored to your specific medical needs.',
        price: '$399/month',
      }
    ],
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Pricing Plans</h1>
      <div className="flex justify-center mb-4">
        <button onClick={() => handlePlanClick('pro')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">Pro</button>
        <button onClick={() => handlePlanClick('transform')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer ml-2">Transform</button>
        <button onClick={() => handlePlanClick('medical')} className="bg-[#3B5704] text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer ml-2">Medical</button>
      </div>
      {selectedPlan && (
        <div className="flex flex-wrap justify-center">
        {plans[selectedPlan].map((plan, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded p-4 h-[50vh]">
              <h2 className="text-2xl font-bold">{plan.heading}</h2>
              <p className="text-gray-600">{plan.description}</p>
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