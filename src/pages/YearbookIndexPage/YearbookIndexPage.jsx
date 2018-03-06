import React, {Component} from 'react';
import { Card, CardTitle, Icon, Preloader } from 'react-materialize';
import { Link } from 'react-router-dom';
import './YearbookIndexPage.css';

class YearbookIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  } 
  
  updateSearch = (e) => {
    this.setState({search: e.target.value.substr(0, 20)});
  } 

  alphabeticalIndex = (users) => {
    return users.sort(function(a, b) {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
    });
  } 

  filteredIndex = (users) => {
    let currentSearch = this.state.search.toLowerCase();
    return this.alphabeticalIndex(users).filter(function(user) {
      let userString = `${user.firstName} ${user.lastName}`.toLowerCase();
      return userString.includes(currentSearch);
    })
  }

  render() {
    let display =
      this.props.users ? 
        <div className="Index-container">
          <div className="sub-header">
            <div>
              <input className="search" placeholder="Type to search..." type="text"
                value={this.state.search}
                onChange={this.updateSearch} 
              />
            </div>
          </div>
          <div className="Index-grid">
            {this.filteredIndex(this.props.users).map((user, idx) => (
              <div key={idx}>
                <Card header={<CardTitle reveal className="Index-headshot" image={user.initHeadshot} waves='light'/>}
                  title={user.firstName + " " + user.lastName}
                  reveal={
                    <div>
                      <div className="cardHighlight">
                        <Icon col={2} className="highlight">location_on</Icon>
                        <p col={10}>{user.curLocation}</p>
                      </div>
                      <Link to={"/yearbook/" + user._id}><p className="link">View Profile</p></Link>
                    </div>
                  }>
                </Card>
              </div>)
            )}
          </div>
        </div>
      : <div className="vertical-center flex-center-center"><Preloader size='big'/></div>

    return (
      <div>{display}</div>
    )
  }      
}

export default YearbookIndexPage;