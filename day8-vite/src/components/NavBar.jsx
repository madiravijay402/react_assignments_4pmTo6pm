import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <div className='flex justify-between mx-10 p-3'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
            <Link to="/help">Help</Link>
        </div>
    </>
  )
}

export default NavBar