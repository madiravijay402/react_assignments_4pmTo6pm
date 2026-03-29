import React from 'react';
import withTextOverride from '../../hoc/withTextOverride';
import { Link } from 'react-router-dom';

const TextComponent = ({ title }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">
          This component was originally passed `title="Original Text"`, but the HOC intercepted it and replaced it.
        </p>
        <Link to="/" className="block mt-4 text-gray-400 hover:text-white text-sm underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default withTextOverride(TextComponent);
