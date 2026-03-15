import { useState } from 'react';

export default function ProfileCard() {
  const [profile, setProfile] = useState({
    name: 'Emily Chen',
    role: 'Junior Developer',
    experience: 1
  });

  const promote = () => {
    setProfile({
      ...profile,
      role: profile.experience >= 3 ? 'Senior Developer' : 'Mid-Level Developer',
      experience: profile.experience + 1
    });
  };

  return (
    <div className="card" style={{ borderTop: '4px solid var(--primary-color)' }}>
      <h2>15. Profile Card</h2>
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%', background: '#cbd5e1', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', 
        color: '#475569', margin: '0 auto'
      }}>
        👩‍💻
      </div>
      <div>
        <h3 style={{ marginBottom: '0.2rem' }}>{profile.name}</h3>
        <div style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{profile.role}</div>
        <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Experience: {profile.experience} years</div>
      </div>
      <button className="btn btn-success" onClick={promote}>
        Promote 📈
      </button>
    </div>
  );
}
