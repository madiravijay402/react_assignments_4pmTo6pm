import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <div>
            <div>
                logo
            </div>
            <div>
                <Link to="/">Counter</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Toggle">Toggle</Link>
                <Link to="/Twice">Twice</Link>
                <Link to="/counter">Counter</Link>
            </div>
        </div>
    </>
  )
}

export default NavBar