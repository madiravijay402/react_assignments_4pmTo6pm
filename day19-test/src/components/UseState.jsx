import React, { useState } from 'react'

const UseState = () => {
    const[value,setValue]=useState("");
    const handlechange=(e)=>{
        setValue(e.target.value);
    }
  return (
    <>
        <div>
            <div>
                <h1>what is use state in react</h1>
            <p>so useState in react is a state manager where we store a value intialy and update that value using the funtion returned by useState we do this with help of an Event  </p>
            <h4><b>Example :</b></h4>
            <p>when we use useState we declare it like this : const[value,setValue]= useState()
                down we create an arrow function 
                handlechange $vcfgd{
                    // setValue("new value")
                }
                and to use this funtion or update a state we need an event like input or button event names like onClick,onchange

            </p>
            <h2>when we dont use setter react doesnt update the value</h2>
            </div>
            <div>
                <input type="text"  className='bg-black rounded text-white p-2 w-50' onChange={handlechange}/>
                <h2>{value}</h2>
            </div>
            
        </div>
    </>
  )
}

export default UseState