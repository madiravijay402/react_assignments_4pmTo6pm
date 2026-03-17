import React, { useState } from 'react';

const Productobj = () => {
  const [product, setProduct] = useState({
    name: "Laptop Pro",
    price: 50000,
    stock: 10
  });

  const updateStock = () => {
    if (product.stock > 0) {
      setProduct({
        ...product,
        stock: product.stock - 1
      });
    }
  };

  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-semibold">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-4 flex-1 flex flex-col justify-center border border-gray-100">
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500 uppercase">Stock Left</span>
            <span className={`text-lg font-bold ${isOutOfStock ? 'text-rose-600' : 'text-gray-900'}`}>
              {isOutOfStock ? 'Sold Out' : product.stock}
            </span>
        </div>
      </div>

      <button 
        onClick={updateStock} 
        disabled={isOutOfStock}
        className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-colors shadow-sm
          ${isOutOfStock ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        Buy Product
      </button>
    </div>
  );
}

export default Productobj;