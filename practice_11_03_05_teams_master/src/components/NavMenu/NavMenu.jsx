import React from 'react';
import s from './NavMenu.module.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className={s.nav__menu}>
      <Link to='/'>Configurations</Link>
      <Link to='/teams'>Teams</Link>
    </div>
  );
};

export default NavMenu;
