import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import s from './CartContainer.module.css';
import { removeAllCartProductsAction } from '../../store/cartReducer';

const CartContainer = () => {
  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={s.cart__title}>Cart:</h2>
      <div className={s.cart__container}>
        {cartState.map((elem, index) => (
          <CartItem key={index} {...elem} />
        ))}
      </div>
      {cartState.length === 0 ? (
        ''
      ) : (
        <button onClick={() => dispatch(removeAllCartProductsAction())}>
          Clear cart
        </button>
      )}
      <h3>
        {`Total: ${cartState.reduce(
          (acc, { price, count }) => acc + price * count,
          0
        )}`}
      </h3>
    </div>
  );
};

export default CartContainer;
