import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
const SubNav = () => {
  return (
    <>
    <div className='flex justify-between mx-30'>
        <div>
            <select className="border rounded p-2 bg-white text-gray-800">
                <option value="">Laptop</option>
                <option value="">Mobiles</option>
                <option value="">Air Conditioner</option>
                <option value="">Tablet</option>
            </select>
        </div>
        <div className='border-1 w-100 h-10 p-2 rounded-2xl'>
            <input type="text"  placeholder='search for products...'/>
        </div>
        <div className='flex gap-5 text-1xl'>
            <div>
                <div><FaRegHeart/></div>
                <div>wishlist</div>
            </div>
            <div>
                <div>
                    <IoPerson/>
                </div>
                <div>
                    Sign in
                </div>
            </div>
            <div>
                <div>
                    <FaCartPlus/>
                </div>
                <div>
                    Cart
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubNav