import React, { FunctionComponent, useEffect, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.style.css';

const NavbarComponent: FunctionComponent = () => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <ul>
        <NavLink exact activeClassName='active' to='/'>
          <li>Accueil</li>
        </NavLink>
        <NavLink exact activeClassName='active' to='/albums'>
          <li>Albums</li>
        </NavLink>
        <NavLink exact activeClassName='active' to='/artists'>
          <li>Artists</li>
        </NavLink>
        <NavLink exact activeClassName='active' to='/admin'>
          <li>Admin</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavbarComponent;
