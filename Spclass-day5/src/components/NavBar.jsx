import React from 'react'
import { MdCall } from "react-icons/md";
const NavBar = () => {
  return (
    <>
    <div className='flex  flex-wrap justify-between mx-10 my-5  p-2 items-center font-bold '>
        <div className='w-75 mx-10'>
            <img src="./VasanthandCoLogo.png" alt="" />
        </div>
        <div className='flex gap-5'>
            <a href="">Telivisons </a>
            <a href="">Washing Machine </a>
            <a href="">Air conditioner </a>
            <a href="">mobile </a>
            <a href="" className='bg-auto'>special offers</a>
        </div>
        <div className='flex gap-5 justify-center items-center'> 
            <div className='text-2xl'>
                <MdCall/>
            </div>
            <div>
                <div className='text-red-600'>
                      Live chat or:
                </div>
                <div>
                  9333593335
                </div>
            </div>
        </div>
        <div className='w-25 mx-20'>
            <img src="./vasanth.gif" alt="" />
        </div>
    </div>
    
    </>
  )
}

export default NavBar