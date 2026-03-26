import React, { useRef } from 'react'

const Task1 = () => {
    const inputRef = useRef(null);
  const messageRef = useRef(null);
  const timerRef = useRef(null);

  const handleTyping = () => {
    messageRef.current.innerText = "User is typing...";

    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    
    timerRef.current = setTimeout(() => {
      messageRef.current.innerText = "User stopped typing...";
    }, 2000);
  };
  return (
    <>
    <div className='bg-amber-500 flex flex-col gap-5 p-2 justify-center items-center'>
        <input type="text" ref={inputRef} onChange={handleTyping} placeholder='type something...' className='bg-white text-black rounded p-2'/>
        <p ref={messageRef}>start typing...</p>
    </div>
        
    </>
  )
}

export default Task1