import User from './User';
import { data } from '../data/users';
import { tasks } from '../data/tasks';
import Task from './Task';

// 4. Создать массив data с информацией о пользователях (пользователь = объект). На основе этого массива создать пользователей

// 7. Создать компонент Task, который будет принимать задачу и статус выполнения
// 8. Создать в отдельном файле массив с задачами (id, title, completed)
// 9. На основе этого массива создать в App.js карточки с задачами. Если у задачи completed true, в статусе выполнения написать 'done', а если false - то 'not done'

function App() {
  return (
    <div>
      {/* {data.map(el => (
        <User key={el.id} {...el} />
      ))} */}
      {tasks.map(el => (
        <Task key={el.id} {...el} />
      ))}
    </div>
  );
}

export default App;
