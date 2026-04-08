import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Day 20: useMemo & useCallback Assignments</h1>
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  );
}

export default App;
