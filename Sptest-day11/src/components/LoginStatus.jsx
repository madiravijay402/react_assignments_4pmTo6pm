import { useState } from 'react';

export default function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="card">
      <h2>4. Login Status</h2>
      <div className="value-display" style={{ color: isLoggedIn ? 'var(--success-color)' : 'var(--danger-color)' }}>
        {isLoggedIn ? 'Welcome User 👋' : 'Please Login 🔒'}
      </div>
      <button 
        className={`btn ${isLoggedIn ? 'btn-danger' : 'btn-success'}`}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
