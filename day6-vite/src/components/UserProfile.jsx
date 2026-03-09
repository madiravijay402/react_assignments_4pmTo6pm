import React from 'react'

const UserProfile = ({data}) => {
  return (
    <>
        {data.map((val,ind)=>(
            <li key={ind}>{val.name}</li>
        ))}
    </>
  )
}

export default UserProfile