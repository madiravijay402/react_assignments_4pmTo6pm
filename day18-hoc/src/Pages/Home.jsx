import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
        React day-18 Assignments Dashboard
      </h1>
      
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {/* Auth Tasks Section */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 flex-1 min-w-[300px]">
          <h2 className="text-2xl font-bold mb-6 text-indigo-400 border-b border-gray-700 pb-2">
            🔐 LOGIN / REGISTER Flow
          </h2>
          <ul className="space-y-3 mb-6 text-gray-300 text-sm">
            <li><span className="font-semibold text-white">Task 1:</span> Basic Register (localStorage)</li>
            <li><span className="font-semibold text-white">Task 2:</span> Login Validation</li>
            <li><span className="font-semibold text-white">Task 3:</span> Redirect After Login</li>
            <li><span className="font-semibold text-white">Task 4:</span> Logout System</li>
            <li><span className="font-semibold text-white">Task 5:</span> Multiple Users Array</li>
          </ul>
          <div className="flex flex-col gap-3">
            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-center py-2 rounded-lg font-medium transition shadow-md">
              Go to Register
            </Link>
            <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-center py-2 rounded-lg font-medium transition shadow-md">
              Go to Login
            </Link>
          </div>
        </div>

        {/* HOC Tasks Section */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 flex-1 min-w-[300px]">
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-gray-700 pb-2">
            ⚡ HOC TASKS
          </h2>
          <div className="flex flex-col gap-3">
            <Link to="/hoc/task1" className="bg-emerald-600 hover:bg-emerald-700 text-center py-2 rounded-lg font-medium transition shadow-md flex justify-between px-4">
              <span>Task 1: Button Alert HOC</span> <span>→</span>
            </Link>
            <Link to="/hoc/task2" className="bg-emerald-600 hover:bg-emerald-700 text-center py-2 rounded-lg font-medium transition shadow-md flex justify-between px-4">
              <span>Task 2: Text Override HOC</span> <span>→</span>
            </Link>
            <Link to="/hoc/task3" className="bg-emerald-600 hover:bg-emerald-700 text-center py-2 rounded-lg font-medium transition shadow-md flex justify-between px-4">
              <span>Task 3: Disable Button HOC</span> <span>→</span>
            </Link>
            <Link to="/hoc/task4" className="bg-emerald-600 hover:bg-emerald-700 text-center py-2 rounded-lg font-medium transition shadow-md flex justify-between px-4">
              <span>Task 4: Input Logger HOC</span> <span>→</span>
            </Link>
            <Link to="/dashboard" className="bg-emerald-600 hover:bg-emerald-700 text-center py-2 rounded-lg font-medium transition shadow-md flex justify-between px-4">
              <span>Task 5: Auth AuthCheck HOC</span> <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
