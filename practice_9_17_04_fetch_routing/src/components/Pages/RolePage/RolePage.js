import React from 'react';
import { useParams } from 'react-router-dom';
import UsersContainer from '../../UsersContainer/UsersContainer';

const RolePage = () => {
  const { role } = useParams();

  return (
    <div>
      <UsersContainer role={role} />
    </div>
  );
};

export default RolePage;
