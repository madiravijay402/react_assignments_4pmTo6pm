import React from 'react'
import NavBar from '../components/NavBar'
import Routesway from '../RoutePath/Routesway'
import SubNav from '../components/SubNav'
import NaviGate from '../components/NaviGate'

const Page = () => {
  return (
    <>
     <div>
        <NavBar/>
        <Routesway/>
        <SubNav/>
        {/* <NaviGate/> */}
     </div>
    </>
  )
}

export default Page