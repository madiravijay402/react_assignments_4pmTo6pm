import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import withAuthCheck from '../../hoc/withAuthCheck';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  const handleLogout = () => {
    // Task 4: Remove isLoggedIn and redirect
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-300 mb-8">
          Welcome back, <span className="font-semibold text-blue-400">{currentUser.name || 'User'}</span>! 
          You have successfully logged in.
        </p>
        
        <button 
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-2.5 px-6 rounded-lg font-semibold transition w-full mb-4"
        >
          Logout (Task 4)
        </button>
        
        <Link to="/" className="text-gray-400 hover:text-white underline text-sm">Back to Home</Link>
      </div>
    </div>
  );
};

export default withAuthCheck(Dashboard);
