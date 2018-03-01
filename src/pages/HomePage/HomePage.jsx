import React from 'react';
import './HomePage.css';
import './../App/App.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize';

const HomePage = (props) => {

  return (
    <div className="HomePage">
      <div className="vertical-center flex-center-center">
        <Link to='/yearbook'>
          <Button waves='light' className='#212121 grey darken-4'>View Yearbook</Button>
        </Link>
      </div>
    </div>
  )

}

export default HomePage;