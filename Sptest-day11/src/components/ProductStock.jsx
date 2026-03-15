import { useState } from 'react';

export default function ProductStock() {
  const [product, setProduct] = useState({ name: 'Wireless Headphones', price: 199.99, stock: 10 });

  const decrementStock = () => {
    if (product.stock > 0) {
      setProduct({ ...product, stock: product.stock - 1 });
    }
  };

  const restock = () => {
    setProduct({ ...product, stock: 10 });
  };

  return (
    <div className="card">
      <h2>13. Product Stock Update</h2>
      <div>
        <strong>Product:</strong> {product.name} <br/>
        <strong>Price:</strong> ${product.price} <br/>
        <strong>Stock Left:</strong>{' '}
        <span className="value-display" style={{ 
          fontSize: '1.2rem', 
          color: product.stock === 0 ? 'var(--danger-color)' : 'var(--text-color)' 
        }}>
          {product.stock === 0 ? 'Out of Stock' : product.stock}
        </span>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={decrementStock} disabled={product.stock === 0}>
          Buy One
        </button>
        <button className="btn btn-success" onClick={restock} disabled={product.stock > 0}>
          Restock
        </button>
      </div>
    </div>
  );
}
