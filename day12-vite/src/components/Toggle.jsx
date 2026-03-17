import React, { useState } from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(false)
    const show=()=>{
        setToggle((p)=>!p)
    }
  return (
    <>
    <button onClick={show} className='bg-black text-white'>{toggle?"hide":"show"}</button>
        {toggle ? <div className='bg-blue-500 p-5 text-align'>
            this is toggled
        </div>:""}
    </>
  )
}

export default Toggle