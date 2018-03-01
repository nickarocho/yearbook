import React, {Component} from 'react';
import {
    BrowserRouter as Router,
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
  this.setState({user});

    fetch('/api/yearbook/index')
      .then(res => res.json())
      .then(users => this.setState({users}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Router>
          <div>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          <Switch>
            <Route exact path='/' render={() => 
              <HomePage
                user={this.state.user}
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
                // className="vertical-center flex-center-center"
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/yearbook' render={() => (
              userService.getUser() ?
                <YearbookIndexPage 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              :
                <Redirect to='/login' />
            )}/>
            <Route path='/yearbook/:id' render={(props) => (
              userService.getUser() ?
                <ProfilePage 
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              :
                <Redirect to='/login' />
            )}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;