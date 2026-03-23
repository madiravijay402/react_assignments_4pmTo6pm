import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ImageMap from '../components/ImageMap'
import Recipe from '../components/Recipe'

const RoutePath = () => {
  return (
    <Routes>
        <Route path='/' element={<ImageMap/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
    </Routes>
  )
}

export default RoutePath