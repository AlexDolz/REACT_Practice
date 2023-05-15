import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
  const cartState = useSelector(store => store.cart);
  return (
    <div>
      <p>Cart</p>
      <div>
        {cartState.map((elem, index) => (
          <CartItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
