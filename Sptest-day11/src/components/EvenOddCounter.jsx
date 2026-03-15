import { useState } from 'react';

export default function EvenOddCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>11. Even/Odd Counter</h2>
      <div className="value-display">{count}</div>
      <div style={{ 
        fontWeight: 'bold', 
        marginBottom: '1rem',
        color: count % 2 === 0 ? 'var(--primary-color)' : 'var(--success-color)'
      }}>
        {count % 2 === 0 ? 'Even' : 'Odd'} Number
      </div>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
