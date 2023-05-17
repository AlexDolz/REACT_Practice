import React from 'react';
import s from './ProductsContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { sortProductsAction } from '../../store/productReducer';

const ProductsContainer = () => {
  const productsState = useSelector(store => store.products);

  const dispatch = useDispatch();

  const orderProducts = event =>
    dispatch(sortProductsAction(event.target.value));

  return (
    <div className={s.products__wrapper}>
      <div className={s.products__sort}>
        <p>Sort by</p>
        <select onInput={orderProducts}>
          <option value='title'>Title</option>
          <option value='price'>Price</option>
        </select>
      </div>
      <div className={s.products__container}>
        {productsState.map((elem, index) => (
          <ProductItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
