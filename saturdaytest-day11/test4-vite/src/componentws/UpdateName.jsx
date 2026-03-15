import React, { useState } from 'react'

const UpdateName = () => {
    const store=[{name:"ram"},{name:"praveen"},{name:"havi"}]
    const[index,setIndex]=useState(0);
    const[update,setUpdate]=useState({name:"vijay",age:22})

    const changeName=()=>{
       const nextIndex = (index + 1) % store.length;

    setIndex(nextIndex);

    setUpdate({
      ...update,
      name: store[nextIndex].name
    });
    }
  return (
    <>
        <div>
            <div>
                <h2>Name: {update.name}</h2>
                <h2>Age: {update.age}</h2>
            </div>
            <div>
                <button onClick={changeName}>Next Name</button>
            </div>
        </div>
    </>
  )
}

export default UpdateName