import React from 'react';
import './HomePage.css';
import './../App/App.css';
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { Button } from 'react-materialize';

const HomePage = (props) => {

  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className="vertical-center flex-center-center">
        <Link to='/index'>
          <Button waves='light' className='#212121 grey darken-4'>View Yearbook</Button>
        </Link>
      </div>
    </div>
  )

}

export default HomePage;