
import React from 'react'

// COLOUR FORMAT and CODE
// Light Yellow - #EDFFCC
// Dark Green - #3B5704
// Light Green - #81B622

const Booking = () => {
  
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-[#edffcc] rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#3b5704] underline  decoration-wavy">
          Book Your Appointment Now!
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-black"
            >
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold text-black"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#3b5704] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="eating-preference"
              className="block text-sm font-semibold text-black"
            >
              Eating Preference
            </label>
            <select
              id="eating-preference"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none  focus:ring-opacity-40"
            >
              <option value="non-veg">Non Veg</option>
              <option value="veg">Veg</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-black"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-sm font-semibold text-black"
            >
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-sm font-semibold text-black"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="appointment-date"
              className="block text-sm font-semibold text-black"
            >
              Preferred Appointment Date
            </label>
            <input
              type="date"
              id="appointment-date"
              className="block w-full px-4 py-2 mt-2 text-[#3b5704] bg-white border rounded-md focus:border-[#81b622] focus:ring-[#81b622] focus:outline-none focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#81b622] rounded-md hover:bg-[#3b5704] focus:outline-none focus:bg-[#81b622]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Booking



