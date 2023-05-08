import Player from '../Player/Player';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const PlayersContainer = () => {
  const { teams } = useContext(Context);
  return (
    <div>
      {teams.map((elem, index) => (
        <Player key={index} {...elem} />
      ))}
    </div>
  );
};

export default PlayersContainer;
