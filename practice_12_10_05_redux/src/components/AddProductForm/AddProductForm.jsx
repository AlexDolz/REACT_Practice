import React from 'react';
import s from './AddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/reducers/productReducer';

const AddProductForm = () => {
  let dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const { title, price } = event.target;

    const newProduct = {
      title: title.value,
      price: price.value,
    };
    dispatch(addProductAction(newProduct));
    event.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className={s.add__product__form}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Price' name='price' />
      <button>Submit</button>
    </form>
  );
};

export default AddProductForm;
