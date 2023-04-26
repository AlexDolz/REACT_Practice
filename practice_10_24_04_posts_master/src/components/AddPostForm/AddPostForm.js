import React, { useContext } from 'react';
import s from './AddPostForm.module.css';
import { Context } from '../../context';

const AddPostForm = () => {
  const { setPosts, posts } = useContext(Context);

  const onSubmit = event => {
    event.preventDefault();
    const { title, description } = event.target;
    const newPost = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      like: false,
      comments: [],
    };
    event.target.reset();
    setPosts([newPost, ...posts]);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Text' name='description' />
      <input type='submit' />
    </form>
  );
};

export default AddPostForm;
