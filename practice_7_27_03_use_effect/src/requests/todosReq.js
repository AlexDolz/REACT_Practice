// 1. Написать fetch get-запрос по адресу https://dummyjson.com/todos и вывести полученные данные в консоль

export const getToDos = () => {
  fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => console.log(data.todos));
};
