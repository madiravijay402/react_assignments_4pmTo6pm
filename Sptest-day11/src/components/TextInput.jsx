import { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState('');

  return (
    <div className="card">
      <h2>2. Live Text Input</h2>
      <input 
        type="text" 
        className="input-field" 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <div style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        {text || "Start typing to see magic!"}
      </div>
    </div>
  );
}
