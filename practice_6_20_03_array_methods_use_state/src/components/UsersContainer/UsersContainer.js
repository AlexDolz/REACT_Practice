import User from '../User/User';
import { users } from '../../data/users';
import s from './UsersContainer.module.css';

const UsersContainer = () => {
  return (
    <div className={s.users__container}>
      {users
        .filter(elem => elem.active && elem.age >= 18)
        .map(elem => (
          <User key={elem.id} {...elem} />
        ))}
    </div>
  );
};

export default UsersContainer;
