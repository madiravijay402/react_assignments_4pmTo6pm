import { useState } from "react";

function FormExample() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Registration</h2>
      <div className="space-y-3 mb-4 flex-1">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-gray-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-gray-800"
        />
      </div>
      <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100">
        <p className="text-sm font-medium text-indigo-900 truncate"><span className="text-indigo-600 opacity-70 mr-2">Name:</span>{form.name || "..."}</p>
        <p className="text-sm font-medium text-indigo-900 truncate mt-1"><span className="text-indigo-600 opacity-70 mr-2">Email:</span>{form.email || "..."}</p>
      </div>
    </div>
  );
}

export default FormExample;