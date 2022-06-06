import React, { FC } from 'react';
import './App.css';
import UsersList from './Users/UsersList';

const App: FC = () => {
  return (
    <div className="App container">
      <UsersList/>
    </div>
  );
};

export default App;
