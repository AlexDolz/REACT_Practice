import s from './UsersPage.module.css';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <div className={s.users__cards}>
      <Link to={'/users/admin'}>
        <div>
          <img
            src='https://png.pngtree.com/png-clipart/20221227/original/pngtree-host-and-admin-marketing-job-vacancies-vector-png-image_8815346.png'
            alt='admin'
          />
          <p>Admin</p>
        </div>
      </Link>

      <Link to={'/users/customer'}>
        <div>
          <img
            src='https://media.springernature.com/lw400/springer-cms/rest/v1/content/16734552/data/v3'
            alt='admin'
          />
          <p>Customer</p>
        </div>
      </Link>
    </div>
  );
};

export default UsersPage;
