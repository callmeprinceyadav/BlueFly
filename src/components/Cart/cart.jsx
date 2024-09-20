import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/cart', {
          headers: {
            Authorization: token,
          },
        });
        setCartItems(response.data);
      } catch (err) {
        console.error('Error fetching cart:', err);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
