import React, { useState } from 'react'

const Formhandle = () => {
    const[data,setData]=useState({name:"",email:"",age:""})
    const[show,setShow]=useState(false);

    const handlechange=(e)=>{
        setData((pre)=>({
             ...pre,[e.target.name]:e.target.value
        }
        ))
    }
    const viewchange=(e)=>{
        e.preventDefault()
        setShow((pre)=>!pre)
    }
  return (
    <>
        <div className='bg-blue-300 flex flex-col justify-center gap-5 p-5'>
            <div className='bg-amber-400 '>
                <form className='flex gap-5 p-5'>
                <input type="text" name='name' onChange={handlechange} className='bg-white'/>
                <input type="email" name='email'onChange={handlechange} className='bg-white'/>
                <input type="number" name='age' onChange={handlechange} className='bg-white'/>
                <input type="submit"  value={show?"hide":"show"} onClick={viewchange} className='bg-blue-600 rounded-2xl p-3'/>
                </form>
            </div>
            <div>
                {show ?<div><p>Name: {data.name}</p>
                 <p>Email: {data.email}</p>
                 <p>Age: {data.age}</p></div>:""}
            </div>
        </div>
    </>
  )
}

export default Formhandle