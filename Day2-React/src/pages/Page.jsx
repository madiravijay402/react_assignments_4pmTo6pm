import React from 'react'
import { Login } from '../App'
import NavBar from '../components/NavBar'
import "../index.css"
function Page() {
  return (
    <>
        <div className='navi'>
           <NavBar/>
        </div>
        <div className='tick'>
            <Login/>
        </div>
    </>
  )
}

export default Page