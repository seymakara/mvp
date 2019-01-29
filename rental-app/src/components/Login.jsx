import React, { Component } from 'react';
import FormTemplate from './FormTemplate';
import { Redirect } from 'react-router-dom';

class Login extends FormTemplate {
  state = {
    data: { username: '', password: '' }
  }

  doSubmit = () => {
    this.props.history.push('/movies')
  }

  render() {
    return (
      < div >
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div >
    );
  }
}

export default Login;