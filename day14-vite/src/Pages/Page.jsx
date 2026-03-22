import React from 'react'
import CardsRender from '../components/CardsRender'
import FetchData from '../components/FetchData'
import Dependency from '../components/Dependency'

const Page = () => {
  return (
    <>
        <CardsRender/>
        <FetchData/>
        <Dependency/>
    </>
  )
}

export default Page