import { getToDos } from './requests/todosReq';

// 2. Создать состояние todos (setTodos) - []
// 3. Записать в состояние todos тот массив, который приходит по запросу
// 4. Проверить, что записалось в состояние todos (console.log(todos))

const App = () => {
  getToDos();

  return <div></div>;
};

export default App;
