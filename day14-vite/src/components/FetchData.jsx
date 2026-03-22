import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[users,setUsers]=useState([]);
    const[show,setShow]=useState(false);
    useEffect(()=>{
        const features= async()=>{
            try{
                const res=await fetch("https://jsonplaceholder.typicode.com/users");
                const data=await res.json();
                setUsers(data);
                
            }catch(error){
                    console.log(error);
            }
        }
        features();
    },[])
  return (
    <>
    <div>
        {show ?  <div>
            {users.map((e)=>(
                <p key={e.id}>{e.name}</p>
            ))}
        </div> :"" }
    </div>
        <button className='bg-black text-white p-2 hover:cursor-pointer' onClick={()=>setShow(!show)}>show</button>
    </>
  )
}

export default FetchData