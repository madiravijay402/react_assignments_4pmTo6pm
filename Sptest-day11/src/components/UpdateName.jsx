import { useState } from 'react';

export default function UpdateName() {
  const [name, setName] = useState('Alice');

  const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

  const changeName = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };

  return (
    <div className="card">
      <h2>5. Update Name</h2>
      <div className="value-display">{name}</div>
      <button className="btn" onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}
