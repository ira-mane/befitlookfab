
import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";

const Booking = () => {
  return (
    <div id='booking' className='w-h-screen bg-[#EDFFCC]'>
      <FormfacadeEmbed

        formFacadeURL="https://formfacade.com/include/113179649782249536771/form/1FAIpQLSeMjDrDc8B5TwcF4pc5zA6VssXau9yd370iJyOcxpRy4qMV8A/classic.js/?div=ff-compose"

        onSubmitForm={() => console.log('Form submitted')}

      />
    </div>
  )
}

export default Booking