import React, { Component } from 'react';
import FormTemplate from './FormTemplate';

class Login extends FormTemplate {
  state = {
    data: { username: '', password: '' }
  }

  doSubmit = () => {
    console.log('submitted!')
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