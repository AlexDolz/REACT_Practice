import s from './User.module.css';
import { users } from '../../data/users';
// 1. Создать два компонента - User и UsersContainer
// 2. Добавить UsersContainer в App
// 3. Для каждого пользователя создать карточку (User) в UsersContainer - имя + фамилия, возраст, статус. Статус - 'online' (true) или 'offline' (false)

// 4. Стилизовать карточки пользователей (border, border-radius, padding). Из контейнера пользователей мделать грид - 4 колонки.
// 5. Если пользователь онлайн покрасить карточку в светло-зеленый цвет. А если оффлайн - то в светло-серый

// 6. Выводить на экран карточки только тех пользователей, которые онлайн и старше 18 лет

const User = props => {
  const { firstname, lastname, age, active } = props;
  const status = active ? 'online' : 'offline';

  const backgroundStyles = {
    background: status === 'online' ? 'lightgreen' : 'lightgray',
  };

  return (
    <div className={s.user__card} style={backgroundStyles}>
      <p>Name: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default User;
