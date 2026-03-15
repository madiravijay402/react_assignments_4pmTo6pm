import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <div className="card">
      <h2>3. Theme Toggle</h2>
      <div className="value-display">{isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</div>
      <button 
        className={`btn ${isDark ? '' : 'btn-danger'}`} 
        onClick={() => setIsDark(!isDark)}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
