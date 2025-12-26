import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'products':
        return <ProductList onNavigate={setCurrentPage} />;
      case 'cart':
        return <CartItem onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      default:
        return (
          <div className="App">
            <div className="landing-page">
              <div className="landing-content">
                <h1 className="company-name">Paradise Nursery</h1>
                <p className="tagline">
                  Discover the beauty of nature with our curated collection of healthy houseplants.
                  Transform your space into a green paradise.
                </p>
                <button
                  className="get-started-btn"
                  onClick={() => setCurrentPage('products')}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderPage();
}

export default App;
