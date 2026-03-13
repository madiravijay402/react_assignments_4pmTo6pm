import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'

const LayoutWithNav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

const RoutesPath = () => {
  return (
    <Routes>
      <Route element={<LayoutWithNav />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default RoutesPath