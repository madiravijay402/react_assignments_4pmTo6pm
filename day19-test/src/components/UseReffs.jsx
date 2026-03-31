// import React, {  useRef, useState } from 'react'

// const UseReffs = () => {
//     const inputRef=useRef();
//     const showRef=useRef();
//     const[count,setCount]=useState(0)
    
//     const handlechange=()=>{
//         const data=inputRef.current.value
//         if(data){
//             showRef.current.innerHTML=data
//         }
//     }
//     const increase=()=>{
//         setCount((pre)=>pre+1)
//     }
//   return (
//     <>
//         <div className='bg-black text-white p-2 w-75'>
//             <input type="text" ref={inputRef}/>
//             <button onClick={handlechange}>show data</button>
//             <h2 ref={showRef}></h2>
//             <div className='bg-red p-4 '>
//                 <h2>What is useRef and how is it different from useState?</h2>
//                 <p>
//                     useRef is a component 
//                 </p>
//             </div>
//             <div className='bg-black text-white p-3'>
//                 <h2>{count}</h2>
//                 <button onClick={increase}>increase</button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default UseReffs

import React, { useRef, useState } from "react";

const UseReffs = () => {
    console.log("component re-rendering");
    
  const inputRef = useRef();
  const showRef = useRef();
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  const handleChange = () => {
    const data = inputRef.current.value;

    if (data) {
      showRef.current.innerHTML = data;
    }
  };

  const increaseState = () => {
    setCount((pre) => pre + 1);
    console.log(count);
    
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  return (
    <>
      <div className="bg-black text-white p-2 w-75">
        <input type="text" ref={inputRef} />
        <button onClick={handleChange}>Show Data</button>
        <h2 ref={showRef}></h2>

        <div className="bg-red-500 p-4 mt-4">
          <h2>useState Example</h2>
          <h3>{count}</h3>
          <button onClick={increaseState}>Increase State</button>
        </div>

        <div className="bg-blue-500 p-4 mt-4">
          <h2>useRef Example</h2>
          <h3>{countRef.current}</h3>
          <button onClick={increaseRef}>Increase Ref</button>
        </div>
        <div>
            <h1>What is useRef and how is it different from useState?</h1>
            <p>useRef is hook where it updates the value without causing a re-render , we use here dom values for storing data , where in state we re-render component every tinme for doing an event </p>
        </div>
      </div>
    </>
  );
};

export default UseReffs;