import React, { useState } from 'react'
import { faqItems } from '../exports/index'
import SingleQuestion from '../components/SingleQuestion';

const Faq = () => {
const [cards] = useState(faqItems);
return (
    <>
    <section id='faq' className='bg-[#f8ffe8] max-h-screen'>
      <section className='max-w-xl mx-auto py-20 px-4'>
        <h1 className='text-3xl text-center tracking-widest font-bold text-[#3B5704] mb-3'>Frequently Asked Quetsions</h1>

        <section className='grid grid-cols-1 gap-8'>
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
      </section>
    </>
  )
}

export default Faq