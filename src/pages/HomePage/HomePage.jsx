import React from 'react';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = (props) => {

  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </div>
  )

}

export default HomePage;