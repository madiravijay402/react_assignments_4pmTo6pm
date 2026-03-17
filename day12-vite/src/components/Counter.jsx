import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
   const Increase=()=>{
        setCount((pre)=>pre+1)
   }
   const decrease =()=>{
    setCount((pre)=>pre-1)
   }
   const reset=()=>{
    setCount(0)
   }
  return (
   <>
        <div className='bg-red-500 p-5 flex flex-col gap-3'>
            <h1>Count : {count}</h1>
            <button onClick={Increase} className='bg-white rounded '>increse</button>
            <button onClick={decrease} className='bg-white rounded '>decrease</button>
            <button onClick={reset} className='bg-white rounded '>reset</button>
        </div>
   </>
  )
}

export default Counter