import React from 'react';
import s from './User.module.css';
// Если карточка admin, о покрасить ее в светло-голубой цвет, если customer - в светло-розовый

const User = ({ name, role, avatar }) => {
  const userStyle = {
    background: role === 'admin' ? 'lightblue' : 'lightpink',
  };

  return (
    <div className={s.user} style={userStyle}>
      <p>Name: {name}</p>
      <img src={avatar} alt={role} />
      <p>Role: {role}</p>
    </div>
  );
};

export default User;
