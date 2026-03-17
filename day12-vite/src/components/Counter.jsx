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
        <div>
            <h1>Count : {count}</h1>
            <button onClick={Increase}>increse</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
   </>
  )
}

export default Counter