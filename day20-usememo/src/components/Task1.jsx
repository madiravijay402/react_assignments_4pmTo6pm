import React, { useState, useMemo } from 'react';

const Task1 = () => {
  const [array, setArray] = useState(() => Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)));
  const [theme, setTheme] = useState('light');

  const generateNewArray = () => {
    setArray(Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)));
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const sortedArray = useMemo(() => {
    console.log('Task 1: Sorting array runs only when array changes...');
    return [...array].sort((a, b) => a - b);
  }, [array]);

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', border: '1px solid #ccc', margin: '10px 0', borderRadius: '8px' }}>
      <h2 style={{marginTop: 0}}>Task 1: useMemo (Sorting Numbers)</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button onClick={generateNewArray} style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #888' }}>
          Generate New Array
        </button>
        <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #888' }}>
          Toggle Theme ({theme})
        </button>
      </div>
      <div>
        <p><strong>Original Array:</strong> {array.join(', ')}</p>
        <p><strong>Sorted Array:</strong> {sortedArray.join(', ')}</p>
      </div>
    </div>
  );
};

export default Task1;
