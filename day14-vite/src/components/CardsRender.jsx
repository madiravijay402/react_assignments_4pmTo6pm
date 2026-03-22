import React, { useEffect, useState } from 'react'

const CardsRender = () => {
    const [count, setCount] = useState(0);
    const handlechange=()=>{
      setCount((pre)=>pre+1)
    }
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlechange}>Increment</button>
    </div>
  );
}

export default CardsRender