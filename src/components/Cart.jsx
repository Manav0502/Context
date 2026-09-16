import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isPaymentPage = location.pathname === '/payment';

  return (
    <div className="cart-card">
      <h2 className="cart-header">Cart</h2>
      <div className="cart-items-list">
        {cart.length === 0 ? (
          <p className="empty-cart-text"></p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <span className="qty-box">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <h3 className="total-price-text">
          Total: ${totalPrice.toFixed(2)}
        </h3>

        {isPaymentPage ? (
          <button
            className="action-btn"
            onClick={() => navigate('/')}
          >
            Go back to Shopping
          </button>
        ) : (
          <button
            className="action-btn"
            onClick={() => navigate('/payment')}
          >
            Proceed To Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;