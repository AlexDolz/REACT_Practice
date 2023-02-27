// 2. В App.js создать контейнер (div) с информацией о юзере - имя, фамилия, возраст

// 4. Создать трех юзеров с разными данными, используя пропсы
// 5. Создать массив с данными юзеров
// 6. Используя созданный массив, создать карточки юзеров

import User from "./User";
import Profession from "./Profession";

function App() {
  const users = [
    {
      id: 1,
      firstname: "Oleg",
      lastname: "Petrov",
      age: 28,
    },
    {
      id: 2,
      firstname: "Anna",
      lastname: "Orlova",
      age: 54,
    },
    {
      id: 3,
      firstname: "Irina",
      lastname: "Ivanova",
      age: 76,
    },
    {
      id: 4,
      firstname: "Ivan",
      lastname: "Sokolov",
      age: 21,
    },
  ];

  const professions = ["doctor", "teacher", "engineer", "programmer"];

  return (
    <div>
      <div>
        {users.map(
          (
            el // tak pisem kogda rabotajem s massivom objektov
          ) => (
            <User {...el} key={el.id} /> // dobavit unikalnij key prop
          )
        )}
      </div>
      <div>
        {professions.map(
          (
            el,
            index // tak pisem kogda rabotajem s massivom
          ) => (
            <Profession title={el} key={index} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
