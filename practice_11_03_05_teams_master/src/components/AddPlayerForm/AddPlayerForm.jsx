import React, { useContext } from 'react';
import s from './AddPlayerForm.module.css';
import Select from 'react-select';
import { Context } from '../../context/Context';

const AddPlayerForm = () => {
  const { teams, addPlayer } = useContext(Context);

  const onSubmit = event => {
    event.preventDefault();
    const { player, team } = event.target;

    addPlayer(
      {
        id: Date.now(),
        firstname: player.value,
        team: team.value,
      },
      team.value
    );

    event.target.reset();
  };

  return (
    <div className={s.container}>
      <p>Add player</p>
      <form className={s.player__form} onSubmit={onSubmit}>
        <input type='text' placeholder='Player' name='player' />
        <Select options={teams} name='team' />
        <button>Add player</button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
