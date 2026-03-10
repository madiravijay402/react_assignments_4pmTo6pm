import React from 'react'

const NavBar = () => {
  return (
    <>
      <div>
        <div>
            logo
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar