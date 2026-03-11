import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1>Contact Page</h1>
      <button onClick={() => navigate("/help")}>
        Go to Help
      </button>
    </>
  )
}

export default Contact