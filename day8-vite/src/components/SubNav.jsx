import React from 'react'
import { NavLink } from 'react-router-dom'

const SubNav = () => {
  return (
    <>
    <div className='flex bg-black  justify-between p-4 text-white  items-center'>
        <NavLink to="/" className={({isActive})=>isActive?"bg-yellow-400 rounded-2xl p-3":""}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>isActive?"bg-yellow-400 rounded-2xl p-3":""}>about</NavLink>
        <NavLink to="/contact" className={({isActive})=>isActive?"bg-yellow-400 rounded-2xl p-3":""}>contact</NavLink>
        <NavLink to="/help" className={({isActive})=>isActive?"bg-yellow-400 rounded-2xl p-3":""}>Help</NavLink>
    </div>
    </>
  )
}

export default SubNav