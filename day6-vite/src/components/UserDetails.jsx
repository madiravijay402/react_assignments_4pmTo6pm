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
            id:3,
            name:"praveen",
            age:23,
            course:"Javastack",
            pr:["html","css","sql","Javascript"]
        }
    ]
  return (
    <>
      <div className="bg-slate-50 border rounded-2xl p-4 sm:p-6">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Users
          </h2>
          <div className="text-xs sm:text-sm text-gray-600">
            {userDetails.length} profiles
          </div>
        </div>

        <UserProfile data={userDetails} />
      </div>
    </>
  )
}

export default UserDetails