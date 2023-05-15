import React from 'react';
import s from './ProductsContainer.module.css';
import { useSelector } from 'react-redux';
import ProductItem from '../../ProductItem/ProductItem';

const ProductsContainer = () => {
  const productsState = useSelector(store => store.products);

  return (
    <div className={s.products__container}>
      {productsState.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductsContainer;
