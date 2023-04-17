import React from 'react';
import s from './ProductsItem.module.css';

const ProductsItem = ({ title, price, images, description }) => {
  const priceStyles = {
    background: price >= 500 ? 'lightpink' : 'lightgreen',
  };

  return (
    <div style={priceStyles} className={s.products__item}>
      <h1>{title}</h1>
      <h3>{price} $</h3>
      <img src={images[0]} alt={title} />
      <h5>{description}</h5>
    </div>
  );
};

export default ProductsItem;
