import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <NavItem>
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
      </NavItem>
      <NavItem>
        <span className='NavBar-welcome'>Welcome, {props.user.firstName}</span>
      </NavItem>
    </div>
    :
    <div>
      <NavItem>
        <Link to='/login' className='NavBar-link'>Log In</Link>
      </NavItem>
      <NavItem>
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
      </NavItem>
    </div>;

  return (
    <Navbar brand='Yearbook' className="black" right>
      {nav}
    </Navbar>
  );
};

export default NavBar;