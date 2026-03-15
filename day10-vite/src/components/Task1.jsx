import React, { useState } from 'react'

const Task1 = () => {
    const[count,setCount]=useState(0)
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <>
    <div className='bg-black flex h-75 flex-col p-4 justify-center items-center text-white gap-5'>
        <p>count : {count}</p>
        <div className='flex gap-5 text-black'>
            <button onClick={increase} className='bg-white p-2 rounded-2xl flex justify-center'>increase</button>
            <button onClick={decrease} className='bg-white p-2 rounded-2xl flex justify-center'>decrease</button>
            <button onClick={reset} className='bg-white p-2 rounded-2xl flex justify-center'>reset</button>
        </div>
    </div>
    </>
  )
}

export default Task1