import React, { useState } from 'react'

const Formhandle = () => {
    const[data,setData]=useState({name:"",email:"",age:""})

    const handlechange=(e)=>{
        setData((pre)=>({
             ...pre,[e.target.name]:e.target.value
        }
        ))
    }
  return (
    <>
        <div>
            <div>
                <form>
                <input type="text" name='name' onChange={handlechange}/>
                <input type="email" name='email'onChange={handlechange}/>
                <input type="number" name='age' onChange={handlechange}/>
                <input type="submit"  value={"submit"}/>
                </form>
            </div>
            <div>
                 <p>Name: {data.name}</p>
                 <p>Email: {data.email}</p>
                 <p>Age: {data.age}</p>
            </div>
        </div>
    </>
  )
}

export default Formhandle