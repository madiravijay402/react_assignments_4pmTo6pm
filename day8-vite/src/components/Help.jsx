import React from 'react'
import { useNavigate } from 'react-router-dom'

const Help = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1>Help Page</h1>
      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </>
  )
}

export default Help