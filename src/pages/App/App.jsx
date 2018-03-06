import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import YearbookIndexPage from '../YearbookIndexPage/YearbookIndexPage';
import { cloneDeep } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      user: null
    }
  }

  refreshPage = () => {
    window.location.reload();
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({user: null})
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  updateField = (fieldToChange, newValue) => {
    let currentUser = cloneDeep(this.state.user);
    currentUser[fieldToChange] = newValue;
    this.setState({
      user: currentUser
    })
  }

  handleFocus = (e) => {
    e.target.select();
  }

  handleUpdate = () =>  {
    fetch(`/api/yearbook/${userService.getUser()._id}/update`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.user)
    })
      .then(res => res.json())
      .then(user => {(user) => this.setState({user})})
      .catch(err => console.log(err));
  }

  handleImageUpdate = () => {
    this.handleUpdate();
    this.refreshPage();
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    fetch('/api/yearbook/index')
      .then(res => res.json())
      .then(users => {
        if (userService.getUser()) {
          this.setState({
            users: users, 
            user: users.find(user => userService.getUser()._id === user._id)
          })
        } else {
          this.setState({
            users: users, 
            user: null
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
          <div>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage
                user={this.state}
                handleLogout={this.handleLogout}
              />
            }/> 
            <Route exact path='/' render= {() =>
              <div>Home Page</div>
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/yearbook' render={() => (
              userService.getUser() ?
                <YearbookIndexPage 
                  users={this.state.users}
                />
              :
                <Redirect to='/login' />
            )}/>
            <Route path='/yearbook/:id' render={(props) => (
              userService.getUser() ?
                <ProfilePage 
                  selectedUser={this.state.users && this.state.users.find(user => user._id === props.match.params.id)}
                  handleUpdate={this.handleUpdate}
                  handleImageUpdate={this.handleImageUpdate}
                  updateField={this.updateField}
                  handleFocus={this.handleFocus}
                  refreshPage={this.refreshPage}
                  viewingLoggedInUsersProfile={ userService.getUser()._id === props.match.params.id }
                  user={this.state.user}
                />
              :
                <Redirect to='/login' />
            )}/>
          </Switch>
          </div>
      </div>
    );
  }
}

export default App;