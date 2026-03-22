import React, { useEffect, useState } from 'react'

const Dependency = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect runs");
  },[]);
  return (
    <>
        <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </>
  )
}

export default Dependency