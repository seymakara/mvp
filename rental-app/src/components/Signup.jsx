import React from 'react';
import FormTemplate from './FormTemplate';
import Joi from 'joi-browser'
class Signup extends FormTemplate {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
  }

  doSubmit = () => {
    console.log('submitted')
  }

  render() {
    return (
      < div >
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Signup')}
        </form>
      </div >
    );
  }
}

export default Signup;