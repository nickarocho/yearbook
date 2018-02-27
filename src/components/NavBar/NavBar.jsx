import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
      <span className='NavBar-welcome'>Welcome, {props.user.firstName}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Log In</Link>
      <Link to='/signup' className='NavBar-link'>Sign Up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;