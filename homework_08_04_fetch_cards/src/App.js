import React, { useEffect, useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import AddForm from './components/AddForm/AddForm';

// 1. Отправить get-запрос по ссылке https://api.escuelajs.co/api/v1/users, получить данные и записать эти данные в состояние users
// 2. Из состояния users отрисовать карточки пользователей (User) в UsersContainer
// 3. Стилизовать карточки
// 4. Добавить форму AddUserForm (собирает email, name, password и avatar). У всех новых пользователей роль по умолчанию 'customer'
// 5. Реализовать добавление карточки (User) в UsersContainer при отправке формы.

const App = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://api.escuelajs.co/api/v1/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <AddForm setUsers={setUsers} />
      <CardsContainer users={users} />
    </div>
  );
};

export default App;
