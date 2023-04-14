import React from "react";
import s from "./CardsContainer.module.css";
import CardsItem from "../CardsItem/CardsItem";

const CardsContainer = ({ users }) => {
  return (
    <div className={s.cards__container}>
      {users.map((elem, index) => (
        <CardsItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default CardsContainer;
