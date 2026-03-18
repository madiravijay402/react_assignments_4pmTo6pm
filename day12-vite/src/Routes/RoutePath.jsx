import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Counter from '../components/Counter'
import Skills from '../components/Skills'
import Toggle from '../components/Toggle'
import Twice from '../components/Twice'
import User from '../components/User'
const RoutePath = () => {
  return (
   <>
        <div>
            
        <Routes>
            <Route path='/' element={<Counter/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Toggle' element={<Toggle/>}/>
            <Route path='/Twice' element={<Twice/>}/>
            <Route path='/User' element={<User/>}/>
        </Routes>
        </div>
   </>
  )
}

export default RoutePath