import React, { useContext } from 'react';
import s from './PostsContainer.module.css';
import { Context } from '../../context';
import Post from '../Post/Post';

const PostsContainer = () => {
  const { posts } = useContext(Context);

  return (
    <div>
      {posts.length === 0 ? (
        <p className={s.modal__post}>Постов нет</p>
      ) : (
        posts.map((elem, index) => <Post key={index} {...elem} />)
      )}
    </div>
  );
};

export default PostsContainer;
