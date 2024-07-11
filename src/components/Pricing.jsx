// import React from 'react'
// import { tick } from '../assets/icons'
// import { pricing } from '../exports/index'
// import PriceGrid from '../components/PriceGrid'

// const Pricing = () => {
//   return (
//     <section id='pricings' className='w-full bg-[#F8FFE8] flex-col items-start justify-center h-fit px-7 py-14
//     lg:p-20 gap-5'>
//       <h1 className='text-[#3B5704] font-bold text-6xl'>Pricing</h1>
//       <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5'>
//         <p className='text-slate-950 text-2xl'>Explore our pricing list and discover our customizable options tailored to your specific needs, with pricing provided after consultation with our dietitian.We Offer three plan.</p>
//         <div className='w-full lg:w-2/4 '>
//           <ul className='flex flex-col justify-center items-start gap-4'>
//             <li className='flex justify-center items-center gap-4 text-[21px] text-grey-800 '><span className='bg-[#3B5704] p-1 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Transform</li>
//             <li className='flex justify-center items-center gap-4 text-[21px] text-grey-800 '><span className='bg-[#3B5704] p-1 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Medical</li>
//             <li className='flex justify-center items-center gap-4 text-[21px] text-grey-800 '><span className='bg-[#3B5704] p-1 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Pro</li>
//           </ul>
//         </div>

        
//       </div>

//       <div className='w-full flex justify-around items-center flex-wrap gap-10 mt-20'>
//         {pricing.map((price) =>
//           <div className='w-96' key={price.plan}>
//              <PriceGrid {...price}/>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Pricing

import React, { useState } from 'react';
import { tick } from '../assets/icons';
import { pricing } from '../exports/index';
import PriceGrid from '../components/PriceGrid';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('Transform');

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  // Filter pricing plans based on selectedPlan
  const filteredPricing = pricing.filter((price) => price.plan === selectedPlan);

  return (
    <section id='pricings' className='w-full bg-[#F8FFE8] flex-col items-start justify-center py-14 px-4 lg:p-20 gap-5'>
      <h1 className='text-[#3B5704] font-bold text-6xl'>Pricing</h1>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5'>
        <p className='text-slate-950 text-2xl'>
          Explore our pricing list and discover our customizable options tailored to your specific needs, with pricing provided after consultation with our dietitian. We offer three plans.
        </p>
        <div className='w-full lg:w-2/4'>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <li className={`flex justify-center items-center gap-4 text-[21px] ${selectedPlan === 'Transform' ? 'text-[#3B5704]' : 'text-grey-800'}`}>
              <span className={`bg-[#3B5704] p-1 rounded-full fill-white ${selectedPlan === 'Transform' ? 'block' : 'hidden'}`}>
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              <button onClick={() => handlePlanClick('Transform')} className='focus:outline-none'>
                Transform
              </button>
            </li>
            <li className={`flex justify-center items-center gap-4 text-[21px] ${selectedPlan === 'Medical' ? 'text-[#3B5704]' : 'text-grey-800'}`}>
              <span className={`bg-[#3B5704] p-1 rounded-full fill-white ${selectedPlan === 'Medical' ? 'block' : 'hidden'}`}>
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              <button onClick={() => handlePlanClick('Medical')} className='focus:outline-none'>
                Medical
              </button>
            </li>
            <li className={`flex justify-center items-center gap-4 text-[21px] ${selectedPlan === 'Pro' ? 'text-[#3B5704]' : 'text-grey-800'}`}>
              <span className={`bg-[#3B5704] p-1 rounded-full fill-white ${selectedPlan === 'Pro' ? 'block' : 'hidden'}`}>
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              <button onClick={() => handlePlanClick('Pro')} className='focus:outline-none'>
                Pro
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='w-full flex justify-around items-center flex-wrap gap-10 mt-20'>
        {pricing.map((price) => (
          <PriceGrid
            key={price.plan}
            plan={price.plan}
            price={price.price}
            label={price.label}
            about={price.about}
            isVisible={price.plan === selectedPlan} // Pass isVisible prop based on selectedPlan
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
