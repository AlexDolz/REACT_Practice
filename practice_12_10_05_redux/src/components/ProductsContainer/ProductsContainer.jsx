import React from 'react';
import s from './ProductsContainer.module.css';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

const ProductsContainer = () => {
  const products = useSelector(store => store.products);

  console.log(products);

  return (
    <div className={s.products__container}>
      {products.map((elem, index) => (
        <Product key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductsContainer;
