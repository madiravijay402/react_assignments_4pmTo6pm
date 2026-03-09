import React from 'react'

const Object = () => {
    const vasanthAndCo = {
  name: "Vasanth & Co (Online Support)",
  email: "onlinesupport@vasanthandco.co",
  phone: "93335 93335"
};

  return (
    <>
         <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {vasanthAndCo.name}</p>
      <p><strong>Email:</strong> {vasanthAndCo.email}</p>
      <p><strong>Phone:</strong> {vasanthAndCo.phone}</p>
    </div>
    </>
  )
}

export default Object