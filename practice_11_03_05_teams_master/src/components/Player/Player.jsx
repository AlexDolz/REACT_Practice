import React, { useContext } from 'react';
import s from './Player.module.css';
import { Context } from '../../context/Context';

const Player = ({ players, value }) => {
  const { removePlayer } = useContext(Context);
  return (
    <div className={s.players__container}>
      {players.map((elem, index) => (
        <div
          onClick={() => removePlayer(value, elem.id)}
          title='Click to remove player'
          className={s.player}
          key={index}
        >
          <p>{elem.firstname}</p>
          <p>{elem.team}</p>
        </div>
      ))}
    </div>
  );
};

export default Player;
