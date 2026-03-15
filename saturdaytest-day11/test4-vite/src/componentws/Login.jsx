import React, { useState } from 'react'

const Login = () => {
    const[lgn,setLgn]=useState(false)
    const change=()=>{
        setLgn(!lgn)
    }
  return (
    <>
        <div>
            <div>
                <h2>Login status</h2>
            </div>
            <div>
                <p>{lgn ?"Login Please":"Welcome"}</p>
            </div>
            <div>
                <button onClick={change}>{lgn ?"LOgin":"Logout"}</button>
            </div>
        </div>
    </>
  )
}

export default Login