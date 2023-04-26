import React, { useState } from 'react';
import './App.css';
import { posts_data } from './data/posts_data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import { Context } from './context';
import AddPostForm from './components/AddPostForm/AddPostForm';

// 1. Создать Post и PostsContainer
// 2. Создать в App состояние posts (+setPosts)
// 3. Поместить массив posts_data в состояние posts
// 4. Из состония posts отрисовать посты (title, description, like - false 'Like?', true 'Liked'). Использовать useContext()

// 6. Стилизовать кнопку лайка => при измененном состоянии менять цвет текста и заднего фона

// ДЗ
// 8. Создать компоненты Comment и CommentsContainer
// 9. Поместить CommentsContainer в Post
// 10. Создать комментарии
// 11. Стилизовать комментарии
// 12. Добавить к посту крестик
// 13. Реализовать удаление поста при клике на крестик

// 14. Если карточек нет, то вывести сообщение "Постов нет"

// 15. Создать компонент AddPostForm (два инпута + кнопка), импортировать его в App
// 16. Научить форму при сабмите собирать данные (title, description) и формировать из этих данных объект

// Пример объекта:

// {
//   id: уникальный,
//   title: из инпута,
//   description: из инпута,
//   like: false,
//   comments: []
// }

// 17. Вывести в консоль сформированный объект

// ДЗ
// 18. Написать функцию, принимающую в качестве аргумента сформированный объект и добавляющую ее в состояние posts => вызвать функцию при сабмите формы

const App = () => {
  let [posts, setPosts] = useState(posts_data);

  const changeLike = id => {
    // 1. Найти пост
    const targetPost = posts.find(elem => elem.id === id);
    // 2. У найденного поста изменить/обновить значение свойства like на противоположное
    targetPost.like = !targetPost.like;
    // 3. Передать обновленный массив в setPosts
    setPosts([...posts]);
  };

  const removePost = id => {
    const updatedPost = posts.filter(elem => elem.id !== id);
    setPosts(updatedPost);
  };

  return (
    <div>
      <Context.Provider value={{ posts, changeLike, removePost, setPosts }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
};

export default App;
