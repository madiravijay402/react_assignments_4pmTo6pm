import React, { useState, useCallback, memo } from 'react';

// Child Component
const Child = memo(({ onCalculateSquare }) => {
  console.log('Task 3: Child component rendered!');
  const testNumber = 25;
  const result = onCalculateSquare(testNumber);

  return (
    <div style={{ padding: '15px', border: '2px dashed #888', marginTop: '15px', borderRadius: '8px', background: 'rgba(0,0,0,0.05)' }}>
      <h3 style={{marginTop: 0}}>Child Component</h3>
      <p>I calculate the square of a number using a passed function.</p>
      <p style={{fontSize: '18px'}}>Square of <strong>{testNumber}</strong> is: <strong>{result}</strong></p>
      <p style={{fontSize: '12px', color: '#666'}}>* Check console to see when this child renders.</p>
    </div>
  );
});

// Parent Component
const Task3 = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Function to calculate square, wrapped in useCallback
  const calculateSquare = useCallback((num) => {
    console.log('Task 3: Calculating square (running expensive loop)...');
    let result = 0;
    // Artificial loop to simulate heavy calculation
    for (let i = 0; i <= 10000000; i++) {
        // Just wasting time
    }
    result = num * num;
    return result;
  }, []);

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', border: '1px solid #ccc', margin: '10px 0', borderRadius: '8px' }}>
      <h2 style={{marginTop: 0}}>Task 3: useCallback (Event Handler Optimization)</h2>
      <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #888', marginBottom: '10px' }}>
        Toggle Theme ({theme})
      </button>
      
      <Child onCalculateSquare={calculateSquare} />
    </div>
  );
};

export default Task3;
