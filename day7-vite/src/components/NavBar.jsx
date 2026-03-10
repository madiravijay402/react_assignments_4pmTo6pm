import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between items-center px-6 py-3">
        <div className="font-bold">Logo</div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar