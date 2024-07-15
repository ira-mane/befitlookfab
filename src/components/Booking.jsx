// import React, { useState } from 'react';

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lcontactNumber: '',
//     email: '',
//     eatingPreference: '',
//     age: '',
//     height: '',
//     weight: '',
//     appointmentDate: '',
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('https://script.google.com/macros/s/AKfycbyKbh9Vmrj69suGgi8OsCQLaA3LPxe8CejurdDc2KDxds9RLjR1CWLCDkEEiO6NiXLovQ/exec', {
//       method: 'POST',
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//    <div className="w-full p-6 m-auto bg-[#edffcc] rounded-md shadow-xl lg:max-w-xl">
//      <h1 className="text-3xl font-semibold text-center text-[#3b5704] underline  decoration-wavy">
//        Book Your Appointment Now!
//      </h1>
//      <form className="mt-6">
//        <div className="mb-4">
//   <label
//               htmlFor="firstname"
//               className="block text-sm font-semibold text-black"
//             >
//               Firstname
//             </label>
//             <input
//               type="text"
//               id="firstname"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="lastname"
//               className="block text-sm font-semibold text-black"
//             >
//               Contact Number
//             </label>
//             <input
//               type="text"
//               id="lastname"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-black"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#3b5704] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="eating-preference"
//               className="block text-sm font-semibold text-black"
//             >
//               Eating Preference
//             </label>
//             <select
//               id="eating-preference"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none  focus:ring-opacity-40"
//             >
//               <option value="non-veg">Non Veg</option>
//               <option value="veg">Veg</option>
//               <option value="vegan">Vegan</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="age"
//               className="block text-sm font-semibold text-black"
//             >
//               Age
//             </label>
//             <input
//               type="number"
//               id="age"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="height"
//               className="block text-sm font-semibold text-black"
//             >
//               Height (cm)
//             </label>
//             <input
//               type="number"
//               id="height"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="weight"
//               className="block text-sm font-semibold text-black"
//             >
//               Weight (kg)
//             </label>
//             <input
//               type="number"
//               id="weight"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="appointment-date"
//               className="block text-sm font-semibold text-black"
//             >
//               Preferred Appointment Date
//             </label>
//             <input
//               type="date"
//               id="appointment-date"
//               className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
//             />
//           </div>
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#81b622] rounded-md hover:bg-[#3b5704] focus:outline-none focus:bg-[#81b622]"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//  </div>
      
//     </form>
//   );
// };

// export default Booking


import React from 'react';

const Booking = () => {
  return (
    <div className="flex justify-center h-screen">
      <iframe
        id="JotFormIFrame-241925105612449"
        title="Appointment Booking Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/241925105612449"
        frameBorder="0"
        className="min-w-full max-w-full h-[720px] border-none"
        // scrolling="no"
      />
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" />
      <script>
        {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-241925105612449']", "https://form.jotform.com/")`}
      </script>
    </div>
  );
};

export default Booking;



