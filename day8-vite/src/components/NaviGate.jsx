import React from 'react'
import { useNavigate } from 'react-router-dom'

const NaviGate = () => {
    const navigate=useNavigate()
    const handlechange=()=>{
        navigate("/home")
    }
  return (
    <>
        <button onClick={handlechange}>Home</button>
    </>
  )
}

export default NaviGate