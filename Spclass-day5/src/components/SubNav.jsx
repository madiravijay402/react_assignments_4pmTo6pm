import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
const SubNav = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-10 py-3 bg-slate-50 border-y">
        <div>
          <select className="border rounded-md px-3 py-2 bg-white text-gray-800 text-sm sm:text-base">
            <option value="">Laptop</option>
            <option value="">Mobiles</option>
            <option value="">Air Conditioner</option>
            <option value="">Tablet</option>
          </select>
        </div>

        <div className="flex-1 w-full sm:w-auto">
          <div className="w-full h-10 flex items-center border border-gray-300 rounded-2xl px-3 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="flex justify-center sm:justify-end gap-5 text-xs sm:text-sm md:text-base text-gray-700">
          <div className="flex flex-col items-center gap-1">
            <FaRegHeart />
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <IoPerson />
            <span>Sign in</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaCartPlus />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubNav