import React, { useContext } from 'react'
import CreateCount from '../Context/Createcount'

const UseConts = () => {
    const{value,handlechange}=useContext(CreateCount)
  return (
    <>
        <form  className='bg-blue-500 p-3 flex flex-col justify-center'>
            <input type="text"  onChange={handlechange} placeholder='enter something...'  className='bg-white text-black'/>
            <h2>{value}</h2>
        </form>
        <div>
            <h2>What is a custom hook in React?</h2>
            <p>“Context API is used to share data globally across components without passing props manually through every level. We first create a context, then create a provider and wrap the app with it. Any component inside the provider can access the shared values using useContext. </p>
        </div>
    </>
  )
}

export default UseConts