import { useState } from 'react';

export default function ObjectUpdateCity() {
  const [user, setUser] = useState({ name: 'Jane Smith', role: 'Developer', city: 'New York' });

  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

  const updateCity = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setUser({ ...user, city: randomCity });
  };

  return (
    <div className="card">
      <h2>7. Object: Update City</h2>
      <div>
        <strong>Name:</strong> {user.name} <br/>
        <strong>Role:</strong> {user.role} <br/>
        <strong>City:</strong> <span className="value-display" style={{fontSize: '1.2rem'}}>{user.city}</span>
      </div>
      <button className="btn" onClick={updateCity}>
        Relocate User
      </button>
    </div>
  );
}
