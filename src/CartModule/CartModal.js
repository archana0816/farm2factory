// CartModal.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const [shipping, setShipping] = useState(15);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });
  };

  const updateQuantity = (product, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { ...product, quantity },
    });
  };

  const applyCoupon = () => {
    if (couponCode === 'ADLASH10') {
      setDiscount(totalItemsPrice * 0.1);
    } else {
      setDiscount(0);
    }
  };

  const totalItemsPrice = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = totalItemsPrice + shipping - discount;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="cart-items">
          <h2>Shopping Cart</h2>
          {state.cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            state.cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
                <p className="item-price">₹{item.price.toFixed(2)}</p>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000", cursor: "pointer" }} onClick={() => removeFromCart(item)} />
              </div>
            ))
          )}
          <button className="checkout-btn">Checkout Now</button>
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Grand Total</p>
            <p>${totalItemsPrice.toFixed(2)}</p>
          </div>
          <div className="summary-details">
            <p>Shipping Charge</p>
            <p>+${shipping.toFixed(2)}</p>
          </div>
          <div className="summary-details">
            <p>Discount</p>
            <p>-${discount.toFixed(2)}</p>
          </div>
          <div className="summary-details">
            <p>Estimated Tax</p>
            <p>+${(totalItemsPrice * 0.1).toFixed(2)}</p>
          </div>
          <div className="summary-total">
            <p>Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <input
            type="text"
            placeholder="Enter your code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className='coupon' onClick={applyCoupon}>Apply Coupon Code</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
