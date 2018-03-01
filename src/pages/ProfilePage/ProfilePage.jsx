import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './ProfilePage.css';
import CurLife from './../../components/Profile/CurLife'
import ElapLife from './../../components/Profile/ElapLife'
import InitLife from './../../components/Profile/InitLife'

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
      <div className="container">
        <div>
          {/* <Link to='/yearbook/'>← Back to Yearbook</Link> */}
        </div>
        <div>
          <Link to={`/yearbook/${this.props.match.params.id}/current`}>Current</Link> | 
          <Link to={`/yearbook/${this.props.match.params.id}/elapsed`}>Elapsed</Link> | 
          <Link to={`/yearbook/${this.props.match.params.id}/initial`}>Initial</Link> 
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
    )
  }
}

export default ProfilePage;