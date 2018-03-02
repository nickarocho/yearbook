import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './ProfilePage.css';
import CurLife from './../../components/Profile/CurLife';
import ElapLife from './../../components/Profile/ElapLife';
import InitLife from './../../components/Profile/InitLife';
import { Row, Col } from 'react-materialize';
import { StickyContainer, Sticky } from 'sticky';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "test"
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    fetch(`/api/yearbook/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(user => {
        this.setState({user})})
      .catch(err => console.log(err))
  }
  
  render(props) {
    return (
      <div className="Profile-container">

        <div className="back-btn">
          <Link to='/yearbook/'>← Back to Yearbook</Link>
        </div>

        <div className="Profile-wrapper">
          <div className="Profile-view">

            <div className="Profile-header">
              <div className="Profile-header-top">
                <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
              </div>
              <div className="Profile-header-bottom">
                <div className="Profile-tabs">
                  <div className="tab"><Link to={`/yearbook/${this.props.match.params.id}/current`}>2018</Link></div>
                  <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
                  <div className="tab"><Link to={`/yearbook/${this.props.match.params.id}/elapsed`}>The Last 10 Years</Link></div> 
                  <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
                  <div className="tab"><Link to={`/yearbook/${this.props.match.params.id}/initial`}>2008</Link></div>
                </div>
                <div className="Profile-headshots">
                  <div><img className="headshot" src={this.state.user.curHeadshot} alt={`${this.state.user.firstName}'s current photo`} /></div>
                  <div><img className="headshot" src={this.state.user.initHeadshot} alt={`${this.state.user.firstName}'s current photo`} /></div>
                </div>
              </div>
            </div>
              
              <Switch>
                <Route path={`/yearbook/${this.props.match.params.id}/current`} render={() =>
                  <CurLife user={this.state.user}/>
                }/>
                <Route path={`/yearbook/${this.props.match.params.id}/elapsed`} render={() =>
                  <ElapLife user={this.state.user}/>
                }/>
                <Route path={`/yearbook/${this.props.match.params.id}/initial`} render={() =>
                  <InitLife user={this.state.user}/>
                }/>
              </Switch>

          </div>
        </div>

      </div>
    )
  }
}

export default ProfilePage;