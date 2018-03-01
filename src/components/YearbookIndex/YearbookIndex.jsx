import React from 'react';
import './YearbookIndex.css';

const YearbookIndex = (props) => {
  
  let filteredIndex = props.yearbookIndex.filter(
    (user) => {
      console.log(user.lastName)
      return user.lastName.indexOf(props.search) !== -1;
    }
  )
  
  return (
    <div className="container">
      <div className="sub-header">
          <input className="search" placeholder="Type to search..." type="text"
            value={props.search}
            onChange={props.updateSearch} />
        </div>
        <div className="Index-grid">
          {filteredIndex.map((user, idx) =>
            <div>
              <img className="Index-headshot" src={user.initHeadshot} /> 
              <p className="Index-name">{user.firstName} {user.lastName}</p>
            </div>
          )}
        </div>
    </div>
  );
};

export default YearbookIndex;