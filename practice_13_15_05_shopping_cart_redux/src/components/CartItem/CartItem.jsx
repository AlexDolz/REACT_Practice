import React from 'react';
import s from './CartItem.module.css';

const CartItem = ({ id, title, price, count }) => {
  return (
    <div className={s.cart__item}>
      <p>{title}</p>
      <p>{price}</p>
      <p>{count}</p>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
