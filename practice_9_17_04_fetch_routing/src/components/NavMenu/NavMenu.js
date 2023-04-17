import React from 'react';
import s from './NavMenu.module.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className={s.nav}>
      <Link to='/'>Main</Link>
      <Link to='/products'>Products</Link>
      <Link to='/users'>Users</Link>
    </div>
  );
};

export default NavMenu;
