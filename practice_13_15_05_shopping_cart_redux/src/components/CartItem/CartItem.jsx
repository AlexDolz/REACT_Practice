import React from 'react';

const CartItem = ({ id, title, price, count }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <p>{count}</p>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
