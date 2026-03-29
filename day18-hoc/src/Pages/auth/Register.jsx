import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user already exists
    const userExists = existingUsers.some(u => u.email === formData.email);
    if (userExists) {
      alert('User with this email already exists!');
      return;
    }

    // Push new user to array
    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    alert('Registered Successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Task 1 & 5: Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-gray-300">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg mt-2 font-semibold transition">Register</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
        <Link to="/" className="block mt-4 text-center text-gray-400 hover:text-white text-sm">Back to Home</Link>
      </div>
    </div>
  );
};

export default Register;
