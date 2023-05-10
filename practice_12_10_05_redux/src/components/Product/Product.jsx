import React from 'react';
import s from './Product.module.css';

const Product = ({ title, price }) => {
  return (
    <div className={s.product__item}>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Product;
