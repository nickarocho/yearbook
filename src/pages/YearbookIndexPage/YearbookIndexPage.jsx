import React from 'react';
import YearbookIndex from '../../components/YearbookIndex/YearbookIndex';
import NavBar from '../../components/NavBar/NavBar'

const YearbookIndexPage = (props) => {

  return (
    <div>
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <YearbookIndex />
    </div>
  );

}

export default YearbookIndexPage;