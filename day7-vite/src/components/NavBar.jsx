import React from 'react'

const NavBar = () => {
  return (
    <>
      <div>
        <div>
            logo
        </div>
        <div>
            <Link path="/">Home</Link>
            <Link path="/about">About</Link>
            <Link path="/contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar