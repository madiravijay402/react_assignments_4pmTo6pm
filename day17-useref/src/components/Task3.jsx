import React, { useRef } from 'react'

const Task3 = () => {
     const nameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const message = messageRef.current.value;

    console.log("Name:", name);
    console.log("Message:", message);

  
    nameRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <>
            <form onSubmit={handleSubmit}>
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter your name"
      />

      <br /><br />

      <textarea
        ref={messageRef}
        placeholder="Enter your message"
      ></textarea>

      <br /><br />

      <button type="submit">Submit</button>
    </form>

    </>
  )
}

export default Task3