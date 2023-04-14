import React from 'react';
import s from './CardsItem.module.css';

const CardsItem = ({ name, role, email, password, avatar }) => {
  return (
    <div className={s.cards__item}>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <h5>{email}</h5>
      <p>{password}</p>
      <img src={avatar} alt='img' />
    </div>
  );
};

export default CardsItem;
