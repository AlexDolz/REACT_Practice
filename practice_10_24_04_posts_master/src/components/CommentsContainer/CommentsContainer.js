import React from 'react';
import s from './CommentsContainer.module.css';
import Comment from '../Comment/Comment';

const CommentsContainer = ({ comments }) => {
  return (
    <div>
      {comments.map(elem => (
        <Comment key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default CommentsContainer;
