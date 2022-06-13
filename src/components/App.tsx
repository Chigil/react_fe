import React, { FC, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Context from './context/context';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Context.Provider value={{isAuth, setIsAuth}}>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
};

export default App;
