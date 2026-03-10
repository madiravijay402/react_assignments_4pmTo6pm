import React from 'react'
import { Routes } from 'react-router-dom'

const RoutePath = () => {
  return (
    <>
    <div className='bg-brown-500 h-160'>
        <Routes>
            <Routes path="/" element={<About/>}/>
            <Routes path="/" element={<About/>}/>
            <Routes path="/" element={<About/>} />
        </Routes>
    </div>
    </>
  )
}

export default RoutePath