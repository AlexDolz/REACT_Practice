import React from 'react';
import s from './ProductItem.module.css';

const ProductItem = ({ images, title, price, description }) => {
  return (
    <div className={s.product__item}>
      <img src={images[0]} alt={title} />
      <h1>{title}</h1>
      <h3>{price} $</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductItem;
