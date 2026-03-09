import React from "react";

const AdminPanel = () => {

  const isAdmin = true;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      {isAdmin && (
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          
          <h1 className="text-2xl font-bold text-center mb-4">
            Admin Dashboard
          </h1>

          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> Vijay</p>
            <p><span className="font-semibold">Role:</span> Administrator</p>
            <p><span className="font-semibold">Location:</span> Chennai</p>
            <p><span className="font-semibold">Status:</span> Active</p>
          </div>

        </div>
      )}

    </div>
  );
};

export default AdminPanel;