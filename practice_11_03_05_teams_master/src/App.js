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
// 8. При сабмите AddPlayerForm добавлять в массив players объект с описанием игрока (id, firstname, team)
// 9. Создать PlayersContantainer и Player
// 10. Из массива players отрисовать карточки игроков (Player) в PlayersContantainer
// 11. PlayersContantainer импортировать в TeamsPage
// 12. Реализовать удаление карточки игрока по клику на нее

const App = () => {
  let [teams, setTeams] = useState([]);

  const addTeam = value =>
    setTeams([
      ...teams,
      { id: Date.now(), value: value, label: value, players: [] },
    ]);

  const addPlayer = (userObj, teamValue) => {
    const targetTeam = teams.find(elem => elem.value === teamValue);
    targetTeam.players.push(userObj);
    setTeams([...teams]);
  };

  const removePlayer = (teamValue, playerId) => {
    const targetTeam = teams.find(elem => elem.value === teamValue);
    targetTeam.players = targetTeam.players.filter(
      elem => elem.id !== playerId
    );
    setTeams([...teams]);
  };

  return (
    <div>
      <Context.Provider value={{ teams, addTeam, addPlayer, removePlayer }}>
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
