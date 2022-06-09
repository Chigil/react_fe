import React, { FC } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
};

export default App;
