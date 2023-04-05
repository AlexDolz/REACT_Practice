import React from 'react';
import s from './Form.module.css';
import { addProductsReq } from '../../requests/productsReq';

const formSubmit = event => {
  event.preventDefault();
  const { title, price, description } = event.target;

  const newProduct = {
    title: title.value,
    price: +price.value,
    description: description.value,
    categoryId: 1,
    images: [
      'https://www.elitecrafters.com/image/cache/data/uploads/201611m/B5/Modern_Handmade_Ceramic_Red_Apple_Kitchen_Decor_Ornament_3.9_(10cm)_1-500x400.jpg',
    ],
  };

  addProductsReq(newProduct);
  event.target.reset();
};

const Form = () => {
  return (
    <form className={s.form} onSubmit={formSubmit}>
      <input type='text' placeholder='Title' name='title'></input>
      <input type='text' placeholder='Price' name='price'></input>
      <input type='text' placeholder='Description' name='description'></input>
      <input type='submit'></input>
    </form>
  );
};

export default Form;
