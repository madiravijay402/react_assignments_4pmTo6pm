import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <div className='bg-'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1></h1>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
            </div>
        </div>
    </>
  )
}

export default NavBar