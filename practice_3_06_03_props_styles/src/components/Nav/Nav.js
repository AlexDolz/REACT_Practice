import Button from '../Button/Button';
import logo from './media/mail_logo.png';
import styles from './Nav.module.css';
import { BsGlobe2 } from 'react-icons/bs';

function Nav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>Products</li>
        <li>Resources</li>
        <li>Inspiration</li>
        <li>Pricing</li>
      </ul>
      <img src={logo} alt='logo' />

      <div>
        <p>Sales: +1 (800) 315-5939</p>
        <BsGlobe2 />
        <p>Search</p>
        <p>Log In</p>
        <Button />
      </div>
    </div>
  );
}

export default Nav;
