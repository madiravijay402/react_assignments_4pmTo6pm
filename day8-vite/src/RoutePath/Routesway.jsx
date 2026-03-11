import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Help from '../components/Help'

const Routesway = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>}/>
    </Routes>
   </>
  )
}

export default Routesway