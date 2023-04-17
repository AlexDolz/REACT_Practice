import React from 'react';
import s from './ProductsContainer.module.css';
import ProductsItem from '../ProductsItem/ProductsItem';

const ProductsContainer = ({ products }) => {
  return (
    <div className={s.products__container}>
      {products.map((elem, index) => (
        <ProductsItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductsContainer;
