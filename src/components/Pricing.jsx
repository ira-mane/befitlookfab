import React from 'react';

function Pricing() {
  const plans = [
    {
      heading: 'Basic Reset',
      duration: '3 Months',
      price: '₹8,999',
      monthlyRate: '₹2,999/month',
    },
    {
      heading: 'Deep Reset',
      duration: '6 Months',
      price: '₹14,999',
      monthlyRate: '₹2,499/month',
    },
    {
      heading: 'Extended Reset',
      duration: '9 Months',
      price: '₹18,999',
      monthlyRate: '₹2,111/month',
    },
    {
      heading: 'Total Reset',
      duration: '12 Months',
      price: '₹21,999',
      monthlyRate: '₹1,833/month',
    },
  ];

  const inclusions = [
    'Monthly personalized diet charts (updated every 30 days)',
    'Weekly WhatsApp check-ins (Monday–Friday)',
    'Supplement & habit suggestions (no brand push)',
    'Diet support for PCOS, thyroid, gut issues, hormonal balance',
    'Ongoing access to expert guidance via WhatsApp',
  ];

  return (
    <div className="container mx-auto p-6 pt-6 md:p-6 lg:p-12 bg-[#F8FFE8]">
      <h1 className="text-3xl font-bold flex justify-center">Reset Plans</h1>
      <p className="m-5 ml-10 mr-10 text-center">
        Our Reset Plans are designed to provide comprehensive support for your health journey. Choose the duration that suits you best — the longer the commitment, the better the value.
      </p>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-2 max-w-full">
  {plans.map((plan, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-1">
      <div className="shadow-md rounded-xl p-4 h-full bg-white border border-green-300 hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold mb-2 text-[#3B5704]">{plan.heading}</h2>
        <p className="text-lg mb-1"><strong>Duration:</strong> {plan.duration}</p>
        <p className="text-xl font-semibold text-green-700 mb-1">{plan.price}</p>
        <p className="text-sm text-gray-600 italic">{plan.monthlyRate}</p>
      </div>
    </div>
  ))}
</div>


      {/* Inclusions Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-[#3B5704] mb-4 text-center">What’s Included in Every Plan</h3>
        <ul className="pl-6 text-gray-800 space-y-2">
          {inclusions.map((item, idx) => (
            <li key={idx} className="font-medium">✔ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pricing;
