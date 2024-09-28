import React from 'react';
import { call, sms, fb, insta, yt } from '../assets/icons';
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "716f4821-11cf-4bfc-aee0-b18d0ae4da5f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success"
      });
    }
  };
  return (
    <>
      <section id='contact' className='w-full bg-[#f8ffe8] flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>
        <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>
          <div className='flex justify-center items-start flex-col gap-4 w-full'>
            <h1 className='text-[#3b5704] font-bold text-[35px]'>Contact Info</h1>
            <div id='phone1' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'>

              <span className='bg-[#bfd791] p-3 rounded-full'>
                <img src={call} alt="callicon" width={22} height={22} />
              </span>
              +91 98670 89284

            </div>
            <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'><span className='bg-[#bfd791] p-3 rounded-full'><img src={sms} alt="smsmail" width={22} height={22} /></span>befitlookfab@gmail.com</div>

            <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'><span className='bg-[#bfd791] p-3 rounded-full'><img src={sms} alt="smsmail" width={22} height={22} /></span>Adress</div>

            <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600'><span className='bg-[#bfd791] p-3 rounded-full'><img src={sms} alt="smsmail" width={22} height={22} /></span>Timings</div>

          </div>
          {/* form Section */}
          <form className='flex flex-col justify-center items-center gap-2 w-full' onSubmit={onSubmit}>
            <input type='text' name='Name' placeholder='Enter Your Name' className='px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-[#3b5704]' required></input>
            <input type='email' name='Email' placeholder='Enter Your Mail' className='px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-[#3b5704]' required></input>
            <input type='tel' name='Phone' placeholder='Enter Your Phone Number' className='px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-[#3b5704]' required></input>
            <textarea name='Query' className='px-4 py-4 w-full border-2 border-[#81b622] rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600' cols='20' rows='5' placeholder='Enter Your Queries' required></textarea>
            <button type='submit' className='bg-[#81b622] text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer'>SUBMIT</button>
          </form>

        </div>
      </section>


    </>
  );
};

export default Contact;


