import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from './context/context';

const NavBar: FC = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        {isAuth
          ?
          <ul className="navbar-nav w-100 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='users' className="nav-link active" aria-current="page">Users</Link>
            </li>
            <li className="nav-item">
              <Link to='posts' className="nav-link">Posts</Link>
            </li>
            <li  className="nav-item float-right">
              <button onClick={() => setIsAuth(false)} className="btn-primary  mt-1">LogOut</button>
            </li>
          </ul>
          :
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='login' className="nav-link active" aria-current="page">Authorization</Link>
            </li>
          </ul>
        }
      </div>
    </nav>
  );
};

export default NavBar;