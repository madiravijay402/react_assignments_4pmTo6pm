import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299, image: '🎧', desc: 'Noise cancelling, 30hr battery' },
  { id: 2, name: 'Mechanical Keyboard', price: 149, image: '⌨️', desc: 'Cherry MX switches, RGB' },
  { id: 3, name: 'Ergonomic Mouse', price: 89, image: '🖱️', desc: 'Vertical alignment, wireless' },
  { id: 4, name: '4K Monitor', price: 399, image: '🖥️', desc: '27 inch, 144Hz, HDR10' },
  { id: 5, name: 'Desk Pad', price: 29, image: '🗺️', desc: 'Waterproof, non-slip base' },
  { id: 6, name: 'Webcam 1080p', price: 79, image: '📷', desc: 'Auto-focus, built-in mic' },
];

const Home = () => {
  const { addItem } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Minimart</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          The best gear for your minimal workspace. Browse our selection and add favorite items to your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <div 
            key={product.id} 
            className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
              {product.image}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <span className="font-bold text-blue-600 dark:text-blue-400">${product.price}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{product.desc}</p>
              <button 
                onClick={() => addItem(product)}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 border border-transparent rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
