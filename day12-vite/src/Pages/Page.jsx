import React from 'react'
import Counter from '../components/Counter'
import Twice from '../components/Twice'
import Toggle from '../components/Toggle'
import Skills from '../components/Skills'
import User from '../components/User'
import NavBar from '../components/NavBar'
import RoutePath from '../Routes/RoutePath'

const Page = () => {
  return (
    <>
        <NavBar/>
        <RoutePath/>
        <Counter/>
        <Twice/>
        <Toggle/>
        <Skills/>
        <User/>
    </>
  )
}

export default Page