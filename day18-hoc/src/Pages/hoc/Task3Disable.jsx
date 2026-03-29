import React from 'react';
import withDisable from '../../hoc/withDisable';
import { Link } from 'react-router-dom';

const DisableComponent = ({ isDisabled }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Task 3: Disable Button HOC</h2>
        <button 
          disabled={isDisabled} 
          className="bg-gray-500 text-gray-300 py-2.5 px-6 rounded-lg font-semibold cursor-not-allowed transition mb-4"
        >
          {isDisabled ? 'Disabled by HOC' : 'Active'}
        </button>
        <Link to="/" className="block mt-4 text-gray-400 hover:text-white text-sm underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default withDisable(DisableComponent);
