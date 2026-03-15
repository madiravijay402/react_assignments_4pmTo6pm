import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
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
        <div>
            <div>
                <p>count: {count}</p>
            </div>
            <div>
                <button onClick={increase}>increse</button>
                <button onClick={decrease}>decrease</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    </>
  )
}

export default Counter