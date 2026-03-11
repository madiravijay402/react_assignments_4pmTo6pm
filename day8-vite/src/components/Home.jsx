import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate("/about")
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go To About</button>
    </>
  )
}

export default Home