import React, { useState } from 'react'

const Task2 = () => {
    const[toggle,setToggle]=useState(false)

    const show=()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <div className='bg-blue-500 p-10 flex justify-around '>
            <div> <button onClick={show} className='bg-white rounded-2xl p-3'>{toggle?"hide":"show"}</button></div>
           <div> {toggle?<div className='bg-green-300 text-black h-50 flex items-center w-50 p-5'>
                <h2>online</h2>
            </div>:<div className='bg-red-500 text-black h-50 flex items-center w-50 p-5'>
                <h2>offline</h2>
            </div>}</div>
        </div>
    </>
  )
}

export default Task2