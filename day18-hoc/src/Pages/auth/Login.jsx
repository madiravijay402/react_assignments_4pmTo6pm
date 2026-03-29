import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user inside array (Task 5 requirement)
    const validUser = existingUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (validUser) {
      alert('Login Success');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(validUser));
      navigate('/dashboard'); // Predict to Dashboard (Task 3)
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Task 2: Login Validations</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg mt-2 font-semibold transition">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">
          No account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link>
        </p>
        <Link to="/" className="block mt-4 text-center text-gray-400 hover:text-white text-sm">Back to Home</Link>
      </div>
    </div>
  );
};

export default Login;
