import React from 'react';
import withAlert from '../../hoc/withAlert';
import { Link } from 'react-router-dom';

const ButtonComponent = ({ handleClick }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Task 1: Button Alert HOC</h2>
        <button 
          onClick={handleClick} 
          className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg font-semibold transition mb-4"
        >
          Click Me (Injected Alert)
        </button>
        <Link to="/" className="block mt-4 text-gray-400 hover:text-white text-sm underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default withAlert(ButtonComponent);
