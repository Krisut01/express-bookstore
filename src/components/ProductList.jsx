import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const ProductList = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addedToCart, setAddedToCart] = useState(new Set());
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const products = [
    // Flowering Plants
    {
      id: 1,
      name: 'Peace Lily',
      price: 29.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant white flowers with dark green leaves'
    },
    {
      id: 2,
      name: 'African Violet',
      price: 19.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Beautiful purple flowers, perfect for windowsills'
    },
    {
      id: 3,
      name: 'Kalanchoe',
      price: 24.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Succulent with bright pink flowers'
    },
    {
      id: 4,
      name: 'Begonia',
      price: 22.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Colorful flowers and attractive foliage'
    },
    {
      id: 5,
      name: 'Gerbera Daisy',
      price: 26.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Bright and cheerful daisy-like flowers'
    },
    {
      id: 6,
      name: 'Hibiscus',
      price: 34.99,
      category: 'flowering',
      image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Tropical beauty with large colorful blooms'
    },

    // Foliage Plants
    {
      id: 7,
      name: 'Snake Plant',
      price: 39.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Hardy plant with tall, upright leaves'
    },
    {
      id: 8,
      name: 'Pothos',
      price: 18.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1586093148909-4e1166c7b6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Trailing vine perfect for beginners'
    },
    {
      id: 9,
      name: 'ZZ Plant',
      price: 32.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Nearly indestructible with glossy leaves'
    },
    {
      id: 10,
      name: 'Rubber Tree',
      price: 45.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Large glossy leaves, great statement piece'
    },
    {
      id: 11,
      name: 'Monstera',
      price: 49.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1586093148909-4e1166c7b6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Swiss cheese plant with unique leaf holes'
    },
    {
      id: 12,
      name: 'Fiddle Leaf Fig',
      price: 59.99,
      category: 'foliage',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Elegant plant with violin-shaped leaves'
    },

    // Succulents
    {
      id: 13,
      name: 'Jade Plant',
      price: 16.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Lucky plant with thick, fleshy leaves'
    },
    {
      id: 14,
      name: 'Echeveria',
      price: 14.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Rosette-forming succulent, perfect for small spaces'
    },
    {
      id: 15,
      name: 'Aloe Vera',
      price: 19.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Medicinal plant with healing gel'
    },
    {
      id: 16,
      name: 'Haworthia',
      price: 12.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Small succulent with translucent leaves'
    },
    {
      id: 17,
      name: 'Sedum',
      price: 13.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ground cover succulent with colorful foliage'
    },
    {
      id: 18,
      name: 'Christmas Cactus',
      price: 27.99,
      category: 'succulents',
      image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Holiday-blooming cactus with pink flowers'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plants' },
    { id: 'flowering', name: 'Flowering Plants' },
    { id: 'foliage', name: 'Foliage Plants' },
    { id: 'succulents', name: 'Succulents' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prev => new Set([...prev, product.id]));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <span className="nav-brand" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>Paradise Nursery</span>
          <ul className="nav-list">
            <li><span onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>Home</span></li>
            <li><span onClick={() => onNavigate('products')} style={{cursor: 'pointer'}}>Plants</span></li>
            <li>
              <span onClick={() => onNavigate('cart')} style={{cursor: 'pointer'}}>
                Cart
                {totalQuantity > 0 && (
                  <span className="cart-count">{totalQuantity}</span>
                )}
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ padding: '80px 20px 20px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#2e7d32' }}>
          Our Plant Collection
        </h1>

        {/* Category Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                margin: '0 10px 10px 0',
                padding: '10px 20px',
                border: selectedCategory === category.id ? '2px solid #4CAF50' : '1px solid #ddd',
                backgroundColor: selectedCategory === category.id ? '#4CAF50' : 'white',
                color: selectedCategory === category.id ? 'white' : '#333',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#2e7d32' }}>{product.name}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4CAF50' }}>
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addedToCart.has(product.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: addedToCart.has(product.id) ? '#cccccc' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: addedToCart.has(product.id) ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    {addedToCart.has(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
