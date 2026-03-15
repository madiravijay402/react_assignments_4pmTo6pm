import React, { useState } from 'react'

const TextInput = () => {
    const[input,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
  return (
    <>
        <div>
            <div>
                <input type="text" onChange={handleChange}/>
            </div>
            <div>
                <div>{input || "start typing to see the magic"}</div>
            </div>
        </div>
    </>
  )
}

export default TextInput