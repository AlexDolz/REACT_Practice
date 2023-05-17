import React from 'react';
import s from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {
  decrByPayloadAction,
  incrCountCartProductAction,
} from '../../store/cartReducer';

const CartItem = ({ id, title, price, count, value }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.cart__item}>
      <p>{title}</p>
      <p>{`${price * count}`}</p>
      <p>{count}</p>
      <div className={s.cart__item__btns}>
        <button onClick={() => dispatch(decrByPayloadAction(id))}>-</button>
        <button onClick={() => dispatch(incrCountCartProductAction(id))}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
