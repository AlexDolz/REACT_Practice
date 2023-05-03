import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ConfigurationsPage from './pages/ConfigurationsPage/ConfigurationsPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import NavMenu from './components/NavMenu/NavMenu';
import { Context } from './context/Context';

// 1. Создать две страницы ConfigurationsPage (главная) и TeamsPage
// 2. Создать NavMenu с кнопками Configurations и Teams, стилизовать
// 2. Настроить между страницами роутинг + переключение на странице при клике на пункты меню
// 4. Создать AddTeamForm (p, input, button). При сабмите формы данные из инпута собирались и выводились в консоль
// 5. Импортировать AddTeamForm на главную (ConfigurationsPage)

const App = () => {
  let [teams, setTeams] = useState([]);

  const addTeam = value => setTeams([...teams, { value: value, label: value }]);

  return (
    <div>
      <Context.Provider value={{ teams, addTeam }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<ConfigurationsPage />} />
          <Route path='/teams' element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
};

export default App;
