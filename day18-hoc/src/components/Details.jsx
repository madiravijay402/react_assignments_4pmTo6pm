import React from 'react'

const Details = ({ type, formData, handleChange, handleSubmit }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-white w-80">
        <h2 className="text-2xl font-bold mb-6 text-center capitalize">{type}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {type === 'register' && (
                <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-300">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name || ''} 
                        onChange={handleChange} 
                        className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" 
                        required 
                    />
                </div>
            )}
            <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-300">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email || ''} 
                    onChange={handleChange} 
                    className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" 
                    required 
                />
            </div>
            <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-300">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password || ''} 
                    onChange={handleChange} 
                    className="p-2.5 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600" 
                    required 
                />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2.5 rounded-lg mt-4 capitalize font-semibold shadow-md">
                {type}
            </button>
        </form>
    </div>
  )
}

export default Details