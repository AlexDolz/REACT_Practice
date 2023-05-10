import React from 'react';
import s from './Product.module.css';
import { useDispatch } from 'react-redux';
import { delProductByIdAction } from '../../store/reducers/productReducer';

const Product = ({ title, price, id }) => {
  let dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(delProductByIdAction(id))}
      className={s.product__item}
    >
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Product;
