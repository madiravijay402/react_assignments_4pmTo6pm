import { useState } from 'react';

export default function ArrayRemoveLast() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  const removeLast = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };

  return (
    <div className="card">
      <h2>9. Array: Remove Last Item</h2>
      <ul className="list-container">
        {items.length === 0 ? (
          <li className="list-item" style={{color: 'var(--danger-color)'}}>No items left!</li>
        ) : (
          items.map((item, index) => (
            <li key={index} className="list-item">🍒 {item}</li>
          ))
        )}
      </ul>
      <button 
        className="btn btn-danger" 
        onClick={removeLast} 
        disabled={items.length === 0}
        style={{ marginTop: 'auto' }}
      >
        Remove Last Item
      </button>
    </div>
  );
}
