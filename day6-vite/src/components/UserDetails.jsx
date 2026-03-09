import React from 'react'
import UserProfile from './UserProfile'

const UserDetails = () => {
    const userDetails=[
        {
            id:1,
            name:"vijay",
            age:22,
            course:"Mernstack",
            pr:["html","css","java script","react"]
        },
        {
            id:2,
            name:"raghuram",
            age:24,
            course:"Mernstack",
            pr:["html","css","java script","react"]
        },
        {
            id:2,
            name:"praveen",
            age:23,
            course:"Javastack",
            pr:["html","css","sql","Javascript"]
        }
    ]
  return (
    <>
        <UserProfile data={userDetails}/>
    </>
  )
}

export default UserDetails