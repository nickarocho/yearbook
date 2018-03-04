import React from 'react';
import { Link } from 'react-router-dom';
import './YearbookIndex.css';
import { Pagination, Card, CardTitle, Icon, Row } from 'react-materialize';

const YearbookIndex = (props) => {

  let alphabeticalIndex = props.yearbookIndex.sort(function(a, b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  })
  console.log(alphabeticalIndex)

  let filteredIndex = alphabeticalIndex.filter(
    (user) => {
      return `${user.firstName} ${user.lastName}`.toLowerCase().includes(props.search.toLowerCase());
    }
  )
  
  return (
    <div className="Index-container">
      <div className="sub-header">
        <div>
          <input className="search" placeholder="Type to search..." type="text"
            value={props.search}
            onChange={props.updateSearch} 
          />
        </div>
        <div>
          <Pagination items={26} activePage={2} maxButtons={8} />
        </div>
      </div>
      <div className="Index-grid">
        {filteredIndex.map((user, idx) =>
          <div key={idx}>

            <Card header={<CardTitle reveal className="Index-headshot" image={user.initHeadshot} waves='light'/>}
              title={user.firstName + " " + user.lastName}
              reveal={
                <div>
                <div className="cardHighlight">
                  <Icon col={2} className="highlight">location_on</Icon>
                  <p col={10}>{user.curLocation}</p>
                </div>
                  <Link to={"/yearbook/" + user._id + "/current"}><p className="link">View Profile</p></Link>
                </div>
              }>
            </Card>

          </div>
        )}
      </div>
    </div>
  );
};

export default YearbookIndex;