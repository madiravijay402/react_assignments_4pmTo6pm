import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Help from '../components/Help'
import User from '../components/User'

const Routesway = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/user/:id' element={<User/>} />
    </Routes>
   </>
  )
}

export default Routesway