import React from 'react';
import FormTemplate from './FormTemplate';
import Joi from 'joi-browser'
class Signin extends FormTemplate {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = () => {
    console.log('submitted')
  }

  render() {
    return (
      < div >
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Sign in')}
        </form>
      </div >
    );
  }
}

export default Signin;