import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div>
            <div>
                <h2>Task</h2>
            </div>
            <div>
                <NavLink to="/" className={({isActive})=>isActive?"bg-white rounded-2xl p-2 text-black":"bg-yellow-500 rouded-2xl p-2 text-black"}>Images</NavLink>
                <NavLink to="/recieps" className={({isActive})=>isActive?"bg-white rounded-2xl p-2 text-black":"bg-yellow-500 rouded-2xl p-2 text-black"} >Recipes</NavLink>
            </div>
        </div> 
    </>
  )
}

export default NavBar