import React from 'react';
import User from '../User/User';
import s from './UsersContainer.module.css';
import { useState, useEffect } from 'react';

const UsersContainer = ({ role }) => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://api.escuelajs.co/api/v1/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const roleUser = users.filter(elem => elem.role === role);

  return (
    <div className={s.users__container}>
      {roleUser.map((elem, index) => (
        <User key={index} {...elem} />
      ))}
    </div>
  );
};

export default UsersContainer;
