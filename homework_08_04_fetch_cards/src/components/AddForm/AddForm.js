import React from 'react';
import s from './AddForm.module.css';

const AddForm = ({ setUsers }) => {
  const addProductsReq = newUser => {
    fetch('https://api.escuelajs.co/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  const formSubmit = event => {
    event.preventDefault();
    const { name, email, password, avatar } = event.target;

    const newUser = {
      name: name.value,
      role: 'customer',
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };

    addProductsReq(newUser);
    event.target.reset();
  };
  return (
    <form className={s.add__form__wrapper} onSubmit={formSubmit}>
      <div className={s.add__form}>
        <input type='text' placeholder='Name' name='name'></input>
        <input type='text' placeholder='Email' name='email'></input>
        <input type='text' placeholder='Password' name='password'></input>
        <input type='text' placeholder='Avatar' name='avatar'></input>
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddForm;
