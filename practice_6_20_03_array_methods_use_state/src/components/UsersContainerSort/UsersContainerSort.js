import s from './UsersContainerSort.module.css';
import User from '../User/User';
import { users } from '../../data/users';
import { useState } from 'react';

// ДЗ
// Добавить кнопку, при клике на которую карточки сортируются по имени в алфавитном порядке

const UsersContainerSort = () => {
  let [usersList, setUsersList] = useState(users);

  const sortUsers = () => {
    setUsersList(usersList.slice().sort((a, b) => a.age - b.age));
  };

  return (
    <div className={s.users__container}>
      {usersList.map(elem => (
        <User key={elem.id} {...elem} />
      ))}
      <button onClick={sortUsers}>Sort by age</button>
    </div>
  );
};

export default UsersContainerSort;
