import React, { useContext } from 'react'
import Countcontext from '../createcontext/Countcontext'

const Home = () => {
    const{data}=useContext(Countcontext)
  return (
    <>
        <div className='bg-red-700 text-white w-200 h-200 text-center'>
            {data}
        </div>
    </>
  )
}

export default Home