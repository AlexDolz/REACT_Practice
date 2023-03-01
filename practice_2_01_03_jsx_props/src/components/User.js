// 1. Создать компонент User (имя, фамилия, возраст)
// 2. Импортировать компонент User в App.js
// 3. Создать трех пользователей, передав в компонент информацию о пользователях через пропсы

// 6. В компоненте User создать параграф Status и вывести в этот параграф значение из свойства active. Если true - active, fasle - not active

function User({ firstname, lastname, age, active }) {
  return (
    <div>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname} </p>
      <p>Age: {age} </p>
      <p>Status: {active ? 'active' : 'not active'} </p>
    </div>
  );
}

export default User;
