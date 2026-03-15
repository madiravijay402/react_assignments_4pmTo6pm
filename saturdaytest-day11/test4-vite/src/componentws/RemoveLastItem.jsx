import React, { useState } from 'react'

const RemoveLastItem = () => {
  const [items, setItems] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const removeLast = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div>
      <h2>Items:</h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={removeLast}>Remove Last Item</button>
    </div>
  );
}

export default RemoveLastItem