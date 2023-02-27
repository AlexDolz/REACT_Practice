// 3. Создать компонент User, перенести всю конструкцию в компонент, импортировать компонент в App.js

function User({ firstname, lastname, age }) {
  return (
    <div>
      <p>Name: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default User;
