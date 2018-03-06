import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Icon} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  console.log(props.url)
  let nav = props.user ?
    <div>
      <ul>
        <li>
          <span className='NavBar-welcome'>Welcome, {props.user.firstName}</span>
        </li>
        <li>
          <Link to={props.url === '/yearbook' ? props.user._id : 'yearbook/'+ props.user._id} className='NavBar-link'><Icon alt="View your profile">person</Icon></Link>
        </li>
        <li>
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
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
    <Navbar brand='Yearbook' className="#263238 blue-grey darken-4" right fixed>
      {nav}
    </Navbar>
  );
};

export default NavBar;