import React, { useContext } from 'react'
import Countcontext from '../createcontext/Countcontext'

const NavBar = () => {
    const{data,handlechange}=useContext(Countcontext)
  return (
    <>
        <div className='bg-black flex justify-center gap-5 items-center text-white p-2'>
            <div>
                {data}
            </div>
            <div>
                <button className='bg-amber-500 rounded-2xl text-black p-2' onClick={handlechange}>click</button>
            </div>
        </div>
    </>
  )
}

export default NavBar