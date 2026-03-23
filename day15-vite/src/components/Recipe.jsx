import React, { useEffect, useState } from 'react'

const Recipe = () => {
    const[info,setInfo]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch("https://dummyjson.com/recipes")
            const data=await res.json()
            setInfo(data.recipes)
        }
        fetchData()
    },[])
    
  return (
    <>
    
        {info.map((u)=>(
            <div key={u.id}>{u.name}</div>
        ))}
    </>
  )
}

export default Recipe