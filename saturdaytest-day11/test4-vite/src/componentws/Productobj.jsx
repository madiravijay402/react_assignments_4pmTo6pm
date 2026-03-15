import React, { useState } from 'react'

const Productobj = () => {
  
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    stock: 10
  });

  const updateStock = () => {
    setProduct({
      ...product,
      stock: product.stock - 1
    });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <h3>Price: {product.price}</h3>
      <h3>Stock: {product.stock}</h3>

      <button onClick={updateStock}>Buy Product</button>
    </div>
  );
}

export default Productobj