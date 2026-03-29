import React from 'react';

const withAuthCheck = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      return (
        <div className="min-h-screen bg-gray-900 text-red-500 flex flex-col items-center justify-center p-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-red-500 text-center shadow-lg">
                <h1 className="text-3xl font-bold mb-4 uppercase tracking-wider">Access Denied</h1>
                <p className="text-gray-400">You must be logged in to view this page. (Auth HOC Task 5)</p>
                <a href="/login" className="inline-block mt-4 text-blue-400 hover:underline">Go to Login</a>
            </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthCheck;
