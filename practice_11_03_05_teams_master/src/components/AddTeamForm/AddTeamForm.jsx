import React, { useContext } from 'react';
import s from './AddTeamForm.module.css';
import { Context } from '../../context/Context';

const AddTeamForm = () => {
  const { addTeam } = useContext(Context);

  const onSubmit = event => {
    event.preventDefault();
    const { team } = event.target;

    addTeam(team.value);
    event.target.reset();
  };

  return (
    <div className={s.container}>
      <p>Add team</p>
      <form className={s.team__form} onSubmit={onSubmit}>
        <input type='text' placeholder='Team' name='team' />
        <button>Add team</button>
      </form>
    </div>
  );
};

export default AddTeamForm;
