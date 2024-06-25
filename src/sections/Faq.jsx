import React from 'react'

const Faq = () => {
  return (
    <section id='faq' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center '>
      <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl text-green-600">Frequently Asked Questions</h2>
        <div className="divide-y dark:divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5 text-2xl">How do I book a consultation with the dietician?</h3>
            <p className="md:pl-0 md:col-span-7 text-xl">You can book a consultation by clicking the "Book Now" button on our home page. Alternatively, you can call or email us using the contact information provided below, or direct message us on Instagram.</p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5 text-2xl">What are the consultation charges?</h3>
            <p className="md:pl-0 md:col-span-7 text-xl">Initial Consultation charges are Rs. 500. Or you can either choose the plan listed on our pricing page</p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5 text-2xl">Do you offer refunds or rescheduling for missed appointments?</h3>
            <p className="md:pl-0 md:col-span-7 text-xl"> If you need to change your appointment, please contact us at least 24 hours in advance to avoid any charges.</p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5 text-2xl">What payment methods do you accept?</h3>
            <p className="md:pl-0 md:col-span-7 text-xl">For online consulation we accept UPI payment options like Gpay, Paytm etc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq