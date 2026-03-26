import React, { useRef } from 'react'

const Task4 = () => {
     const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current.value;
    alert(value);
  };
  return (
    <>
         <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
    </>
  )
}

export default Task4