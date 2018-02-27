import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage';
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
  }

  render() {
    return (
      <div>
        <Router>
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
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/index' render={() => (
              userService.getUser() ?
                <YearbookIndexPage 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              :
                <Redirect to='/login' />
            )}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;