import React, { useState } from 'react';
import Cart from '../components/Cart';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <div className="payment-layout">
      <div className="payment-form-container">
        <div className="payment-options">
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
        </div>

        {paymentMethod === 'credit-card' && (
          <form className="credit-card-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Enter your card number:</label>
              <input type="text" placeholder="Card Number" required />
            </div>

            <div className="input-group">
              <label>Enter your card's expiry date:</label>
              <input type="text" placeholder="Expiry Date" required />
            </div>

            <div className="input-group">
              <label>Enter your CVV number:</label>
              <input type="password" placeholder="CVV" maxLength="4" required />
            </div>

            <button type="submit" className="confirm-payment-btn">
              Confirm Payment
            </button>
          </form>
        )}
      </div>

      <div className="cart-sidebar">
        <Cart />
      </div>
    </div>
  );
};

export default Payment;