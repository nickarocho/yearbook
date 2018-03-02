import React from 'react';
import {Link} from 'react-router-dom';
import './YearbookIndex.css';

const YearbookIndex = (props) => {
  
  let filteredIndex = props.yearbookIndex.filter(
    (user) => {
      // console.log(user.fullName)
      return `${user.firstName} ${user.lastName}`.toLowerCase().includes(props.search.toLowerCase());
    }
  )
  
  return (
    <div className="container">
      <div className="sub-header">
        <div>
          <input className="search" placeholder="Type to search..." type="text"
            value={props.search}
            onChange={props.updateSearch} 
          />
        </div>
      </div>
      <div className="Index-grid">
        {filteredIndex.map((user, idx) =>
          <div>
            <Link to={"/yearbook/" + user._id + "/current"}>
              <img className="Index-headshot" src={user.initHeadshot} alt=""/>
              <p className="Index-name">{user.firstName} {user.lastName}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default YearbookIndex;