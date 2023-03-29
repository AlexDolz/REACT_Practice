import React from 'react';
import s from './Todo.module.css';

export const Todo = ({ todo, completed }) => {
  const itemStyles = {
    background: completed ? 'lightgreen' : 'lightgray',
  };

  return (
    <div className={s.todo__item} style={itemStyles}>
      {todo}
    </div>
  );
};
