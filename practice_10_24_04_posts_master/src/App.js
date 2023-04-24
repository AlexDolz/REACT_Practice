import React, { useState } from 'react';
import './App.css';
import { posts_data } from './data/posts_data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import { Context } from './context';

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

  return (
    <div>
      <Context.Provider value={{ posts, changeLike }}>
        <PostsContainer />
      </Context.Provider>
    </div>
  );
};

export default App;
