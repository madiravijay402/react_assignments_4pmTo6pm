import { useState } from 'react';

export default function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    const nextNumber = numbers.length > 0 ? numbers[numbers.length - 1] + 1 : 1;
    setNumbers([...numbers, nextNumber]);
  };

  return (
    <div className="card">
      <h2>14. Number List Add</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
        {numbers.map((num, idx) => (
          <span key={idx} style={{
            background: 'var(--primary-color)',
            color: 'white',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            fontWeight: 'bold'
          }}>
            {num}
          </span>
        ))}
      </div>
      <button className="btn btn-success" onClick={addNumber} style={{ marginTop: 'auto' }}>
        Add Next Number
      </button>
    </div>
  );
}
