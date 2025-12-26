import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncreaseQuantity = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    onNavigate('products');
  };

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Navbar */}
        <nav style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '10px 20px',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <span onClick={() => onNavigate('home')} style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2e7d32',
              cursor: 'pointer'
            }}>Paradise Nursery</span>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              <li style={{ marginLeft: '30px' }}><span onClick={() => onNavigate('home')} style={{ color: '#333', cursor: 'pointer', fontWeight: '500' }}>Home</span></li>
              <li style={{ marginLeft: '30px' }}><span onClick={() => onNavigate('products')} style={{ color: '#333', cursor: 'pointer', fontWeight: '500' }}>Plants</span></li>
              <li style={{ marginLeft: '30px' }}><span onClick={() => onNavigate('cart')} style={{ color: '#333', cursor: 'pointer', fontWeight: '500' }}>Cart</span></li>
            </ul>
          </div>
        </nav>

        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#2e7d32', marginBottom: '20px' }}>Your Cart is Empty</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            Looks like you haven't added any plants to your cart yet.
          </p>
          <button
            onClick={handleContinueShopping}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '80px 20px 20px 20px'
    }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <a href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2e7d32',
            textDecoration: 'none'
          }}>Paradise Nursery</a>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li style={{ marginLeft: '30px' }}><a href="/" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Home</a></li>
            <li style={{ marginLeft: '30px' }}><a href="#plants" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Plants</a></li>
            <li style={{ marginLeft: '30px' }}>
              <a href="#cart" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>
                Cart
                <span style={{
                  backgroundColor: '#ff5722',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 8px',
                  fontSize: '0.8rem',
                  marginLeft: '5px'
                }}>{totalQuantity}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2e7d32',
          marginBottom: '30px',
          fontSize: '2.5rem'
        }}>
          Shopping Cart
        </h1>

        {/* Cart Items */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          marginBottom: '30px'
        }}>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginRight: '20px'
                }}
              />

              {/* Product Details */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  margin: '0 0 5px 0',
                  color: '#2e7d32',
                  fontSize: '1.2rem'
                }}>
                  {item.name}
                </h3>
                <p style={{
                  margin: '0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  Unit Price: ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '30px'
              }}>
                <button
                  onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  -
                </button>
                <span style={{
                  margin: '0 15px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  minWidth: '30px',
                  textAlign: 'center'
                }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4CAF50',
                marginRight: '30px',
                minWidth: '80px',
                textAlign: 'right'
              }}>
                ${(item.totalPrice).toFixed(2)}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={{
                  backgroundColor: '#ff5722',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <h3 style={{
              margin: '0 0 10px 0',
              color: '#2e7d32',
              fontSize: '1.5rem'
            }}>
              Cart Summary
            </h3>
            <p style={{
              margin: '0',
              color: '#666',
              fontSize: '16px'
            }}>
              Total Items: {totalQuantity}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p style={{
              margin: '0 0 10px 0',
              fontSize: '14px',
              color: '#666'
            }}>
              Total Amount:
            </p>
            <p style={{
              margin: '0',
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#4CAF50'
            }}>
              ${totalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <button
            onClick={handleContinueShopping}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              flex: '1',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
          >
            Continue Shopping
          </button>

          <button
            onClick={handleCheckout}
            style={{
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              flex: '1',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#F57C00'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FF9800'}
          >
            Checkout (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
