import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div className='bg-black flex justify-between p-4 text-white'>
            <div>
                <h2>Task</h2>
            </div>
            <div className='flex gap-4'>
                <NavLink to="/" className={({isActive})=>isActive?"bg-yellow-500 rounded-2xl p-2 text-black":"bg-white rounded-2xl p-2 text-black"}>Images</NavLink>
                <NavLink to="/recipe" className={({isActive})=>isActive?"bg-yellow-500 rounded-2xl p-2 text-black":"bg-white rounded-2xl p-2 text-black"} >Recipes</NavLink>
            </div>
        </div> 
    </>
  )
}

export default NavBar