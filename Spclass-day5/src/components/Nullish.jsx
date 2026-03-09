import React from 'react'

const Nullish = () => {
    let username;
  return (
    <>
        <div>
            <h1>{username ?? "Vijay"}</h1>
        </div>
    </>
  )
}

export default Nullish