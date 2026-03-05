import React from 'react'
import { Login } from '../App'
import NavBar from '../components/NavBar'
import "../index.css"
import One from '../components/One'
import Cast from '../components/Cast'
function Page() {
  return (
    <>
        <div className='navi'>
           <NavBar/>
        </div>
        <div>
           <One/>
        </div>
        <div>
          <Cast/>
        </div>
    </>
  )
}

export default Page