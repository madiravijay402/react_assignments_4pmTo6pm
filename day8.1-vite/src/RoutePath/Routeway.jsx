import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import UserDetails from '../components/UserDetails'

const Routeway = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user/:id" element={<UserDetails/>}/>
            </Routes>
        </div>
    </>
  )
}

export default Routeway