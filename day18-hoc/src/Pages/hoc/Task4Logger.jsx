import React from 'react';
import withInputLogger from '../../hoc/withInputLogger';
import { Link } from 'react-router-dom';

const InputComponent = ({ onLogInput }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Task 4: Input Logger HOC</h2>
        <label className="text-sm text-gray-300 block mb-2 text-left">Type below (check console!)</label>
        <input 
          type="text" 
          onChange={onLogInput} 
          className="w-full p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Start typing..."
        />
        <Link to="/" className="block mt-4 text-gray-400 hover:text-white text-sm underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default withInputLogger(InputComponent);
