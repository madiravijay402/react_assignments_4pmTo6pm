import React, { useContext } from 'react'
import Countcontext from '../createcontext/Countcontext'

const Home = () => {
    const{toggle}=useContext(Countcontext)
    const{data,handlechange,decrease}=useContext()
  return (
    <>
    <div>
      <div>
        {toggle?<div className='bg-black w-750 text-white h-550 text-center'></div>:<div className='bg-white w-750 text-black h-550 text-center'></div>}
        {toggle?<p>dark</p>:<p>light</p>}
    </div>
    <div className='bg-black text-white flex flex-col justify-center items-center p-2 gap-3'>
      <div className='bg-yellow-400 text-black rounded p-2'>
        logo
      </div>
      <div className='bg-red-700 text-green-700 rounded-2xl p-2'>
        {data}
      </div>
      <div className='flex justify-center bg-red-200 rounded-2xl '>
        <button onClick={handlechange} className='text-red'>+</button>
        <button onClick={decrease} className='text-red'>-</button>
      </div>
    </div>
    </div>
    
    </>
  )
}
export default Home