import React from 'react';
import s from './Post.module.css';
import { useContext } from 'react';
import { Context } from '../../context';
import CommentsContainer from '../CommentsContainer/CommentsContainer';
import { RxCross2 } from 'react-icons/rx';

const Post = ({ id, title, description, like, comments }) => {
  const { changeLike, removePost } = useContext(Context);

  const textLike = like ? 'Liked' : 'Like?';

  const styleLike = {
    background: like ? 'blue' : 'azure',
    color: like ? 'white' : 'black',
  };

  return (
    <div className={s.post__item}>
      <RxCross2 onClick={() => removePost(id)} className={s.x__mark} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div
        style={styleLike}
        onClick={() => changeLike(id)}
        className={s.like__btn}
      >
        {textLike}
      </div>
      <CommentsContainer comments={comments} />
    </div>
  );
};

export default Post;
