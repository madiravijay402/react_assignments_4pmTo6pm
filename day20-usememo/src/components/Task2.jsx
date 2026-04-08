import React, { useState, useMemo } from 'react';

// Generating 5000 names
const generateNames = () => {
  const names = [];
  for (let i = 1; i <= 5000; i++) {
    names.push(`User ${i}`);
  }
  return names;
};

const INITIAL_NAMES = generateNames();

const Task2 = () => {
  const [names] = useState(INITIAL_NAMES);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const filteredNames = useMemo(() => {
    console.log('Task 2: Filtering names runs only when search term changes...');
    if (!searchTerm) return names;
    return names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [names, searchTerm]);

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', border: '1px solid #ccc', margin: '10px 0', borderRadius: '8px' }}>
      <h2 style={{marginTop: 0}}>Task 2: useMemo (Search Filter)</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Search names (e.g., User 1)" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #888', background: theme === 'light' ? '#fff' : '#555', color: theme === 'light' ? '#000' : '#fff' }}
        />
        <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #888' }}>
          Toggle Theme ({theme})
        </button>
      </div>
      <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #777', padding: '10px', borderRadius: '4px', background: theme === 'light' ? '#f9f9f9' : '#444' }}>
        {filteredNames.length > 0 ? (
          filteredNames.slice(0, 100).map((name, index) => <div key={index} style={{ padding: '2px 0' }}>{name}</div>)
        ) : (
          <div>No names found</div>
        )}
        {filteredNames.length > 100 && <div style={{ marginTop: '5px', color: '#888' }}>...and {filteredNames.length - 100} more</div>}
      </div>
    </div>
  );
};

export default Task2;
