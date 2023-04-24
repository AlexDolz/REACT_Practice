import React from 'react';
import s from './Post.module.css';
import { useContext } from 'react';
import { Context } from '../../context';

const Post = ({ id, title, description, like }) => {
  const { changeLike } = useContext(Context);

  const textLike = like ? 'Liked' : 'Like?';

  const styleLike = {
    background: like ? 'blue' : 'azure',
    color: like ? 'white' : 'black',
  };

  return (
    <div className={s.post__item}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div
        style={styleLike}
        onClick={() => changeLike(id)}
        className={s.like__btn}
      >
        {textLike}
      </div>
    </div>
  );
};

export default Post;
