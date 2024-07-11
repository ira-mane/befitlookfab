import React, { useState } from 'react';
import { faqItems } from '../exports/index';
import SingleQuestion from '../components/SingleQuestion';

const Faq = () => {
  const [cards] = useState(faqItems);
  return (
    <>
     <section id='faq' className='bg-[#f8ffe8] min-h-screen md:h-[45vh]'>
  <div className='max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-10'>
    <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-[#3B5704] mb-8'>
      Frequently Asked Questions
    </h1>

    <div className='space-y-6'>
      {cards.map((card, index) => (
        <SingleQuestion {...card} key={index} />
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Faq;
