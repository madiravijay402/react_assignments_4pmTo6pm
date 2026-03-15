import { useState } from 'react';

export default function UserForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>12. Live Form Display</h2>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          className="input-field" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="input-field" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      
      <div style={{ marginTop: '1rem', width: '100%', textAlign: 'left', background: 'var(--bg-color)', padding: '1rem', borderRadius: '8px', border: '1px dashed var(--border-color)' }}>
        <strong>Output:</strong><br/>
        Name: {formData.name || '---'}<br/>
        Email: {formData.email || '---'}
      </div>
    </div>
  );
}
