import React, { useContext } from 'react'
import ThemeContext from '../createcontext/ThemeContext'

const NavBar = () => {
    const{changeTheme,toggle}=useContext(ThemeContext)
  return (
    <>
    {toggle?<div className='bg-black flex justify-center gap-5 items-center text-white p-2 mb-5'> <button className='bg-amber-500 rounded-2xl text-black p-2' onClick={changeTheme}>{toggle?"dark":"light"}</button></div>:<div className='mb-5 bg-white flex justify-center gap-5 items-center text-black p-2'> <button className='bg-amber-500 rounded-2xl text-black p-2' onClick={changeTheme}>{toggle?"dark":"light"}</button></div>}
       
            
        
    </>
  )
}

export default NavBar