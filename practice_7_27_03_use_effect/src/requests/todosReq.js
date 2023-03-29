// 1. Написать fetch get-запрос по адресу https://dummyjson.com/todos и вывести полученные данные в консоль

export const getToDos = callback => {
  fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(json => callback(json.todos));
};
