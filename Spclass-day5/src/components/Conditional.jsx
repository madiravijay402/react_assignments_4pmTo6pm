import React from 'react'

const Conditional = () => {
 const isLoggedIn = true;

  return (
    <div className='bg-amber-100'>
      {isLoggedIn ? <h2 className='bg-green-400'>Welcome User</h2> : <h2 className='bg-red-500'>Please Login</h2>}
    </div>
  );
}

export default Conditional