import React from 'react';
import './HomePage.css';
import './../App/App.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize';

const HomePage = (props) => {

  return (
    <div className="Home-wrapper">
      <div className="Home-page">
        <div><h1>THS Class of '08</h1></div>
        <div><Link className='View-btn' to='/yearbook'><img className="class-pic" src="https://i.imgur.com/Dpgcbyh.jpg" alt="class-of-2008" /></Link></div>
        <div>
          <Link className='View-btn' to='/yearbook'>
            <Button waves='light' className='View-btn #263238 blue-grey darken-4'>View Yearbook</Button>
          </Link>
        </div>
      </div>
    </div>
  )

}

export default HomePage;