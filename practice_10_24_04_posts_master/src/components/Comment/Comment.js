import React from 'react';
import s from './Comment.module.css';

const Comment = ({ id, text }) => {
  return <div className={s.comment__item}>{text}</div>;
};

export default Comment;
