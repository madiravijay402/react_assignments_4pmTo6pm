import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <div className='bg-black '>
            <div className='mx-2 flex justify-between items-center text-white p-3'>
            <div className='w-30'>
                <img src="/Logo.jpg" alt="" />
            </div>
           
            <div className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </div>
            </div>
        </div>
    </>
  )
}

export default NavBar