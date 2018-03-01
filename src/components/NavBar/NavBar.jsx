import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <ul>
        <li>
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
        </li>
        <li>
          <span className='NavBar-welcome'>Welcome, {props.user.firstName}</span>
        </li>
      </ul>
    </div>
    :
    <div>
      <ul>
      <li>
        <Link to='/login' className='NavBar-link'>Log In</Link>
      </li>
      <li>
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
      </li>
      </ul>
    </div>;

  return (
    <Navbar brand='Yearbook' className="black" right fixed>
      {nav}
    </Navbar>
  );
};

export default NavBar;