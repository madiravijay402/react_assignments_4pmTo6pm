import React, { useState } from 'react'

const DarkLight = () => {
    const[toggle,setToggle]=useState(false)

    const change=()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <div>
            <div>
                <button onClick={change}>{toggle?"dark":"light"}</button>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default DarkLight