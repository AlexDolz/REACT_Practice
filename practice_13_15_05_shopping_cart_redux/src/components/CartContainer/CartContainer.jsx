import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import s from './CartContainer.module.css';

const CartContainer = () => {
  const cartState = useSelector(store => store.cart);
  return (
    <div>
      <h2 className={s.cart__title}>Cart:</h2>
      <div className={s.cart__container}>
        {cartState.map((elem, index) => (
          <CartItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
