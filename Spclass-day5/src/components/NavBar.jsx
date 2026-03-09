import React from 'react'
import { MdCall } from "react-icons/md";
const NavBar = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-white shadow-md font-bold">
        <div className="flex-shrink-0">
          <img
            src="./VasanthandCoLogo.png"
            alt="Vasanth & Co logo"
            className="w-32 sm:w-40 lg:w-48 object-contain"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm sm:text-base text-gray-700">
          <a href="">Telivisons</a>
          <a href="">Washing Machine</a>
          <a href="">Air conditioner</a>
          <a href="">Mobile</a>
          <a
            href=""
            className="px-3 py-1 rounded-full bg-amber-400 hover:bg-amber-500 text-white text-sm transition-colors"
          >
            Special offers
          </a>
        </div>

        <div className="flex gap-3 sm:gap-5 justify-center items-center text-sm sm:text-base">
          <div className="text-2xl text-amber-500">
            <MdCall />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-red-600">Live chat or:</div>
            <div className="text-gray-800">9333593335</div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="./vasanth.gif"
            alt="Offers banner"
            className="w-40 sm:w-48 lg:w-56 object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default NavBar