import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div className="LoginPage vertical-center flex-center-center">
      <LoginForm
        history={props.history}
        handleLogin={props.handleLogin}
      />
    </div>
  );
};

export default LoginPage;