import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getToDos } from '../../requests/todosReq';
import { Todo } from '../Todo/Todo';
import s from './TodosContainer.module.css';

const TodosContainer = () => {
  let [todos, setTodos] = useState([]);

  useEffect(() => getToDos(setTodos), []);

  return (
    <div className={s.todos__container}>
      {todos.map(elem => (
        <Todo key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default TodosContainer;
