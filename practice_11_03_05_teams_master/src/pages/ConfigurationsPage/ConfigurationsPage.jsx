import React from 'react';
import s from './ConfigurationsPage.module.css';
import AddTeamForm from '../../components/AddTeamForm/AddTeamForm';
import AddPlayerForm from '../../components/AddPlayerForm/AddPlayerForm';

const ConfigurationsPage = () => {
  return (
    <div className={s.configurations__section}>
      <AddTeamForm />
      <AddPlayerForm />
    </div>
  );
};

export default ConfigurationsPage;
