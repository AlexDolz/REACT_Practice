import React from 'react';
import s from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/cartReducer';

const ProductItem = ({ id, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.product__item}>
      <p>{title}</p>
      <p>{price}</p>
      <div
        className={s.product__btn}
        onClick={() => dispatch(addToCartAction({ id, title, price }))}
      >
        Add to cart
      </div>
    </div>
  );
};

export default ProductItem;
