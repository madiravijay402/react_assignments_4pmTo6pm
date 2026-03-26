import React, { useContext } from 'react'
import Countcontext from '../createcontext/Countcontext'

const Home = () => {
    const{toggle}=useContext(Countcontext)
  return (
    <>
    <div>
        {toggle?<div className='bg-black w-750 text-white h-550 text-center'></div>:<div className='bg-white w-750 text-black h-550 text-center'></div>}
        {toggle?<p>dark</p>:<p>light</p>}
    </div>
    </>
  )
}
export default Home