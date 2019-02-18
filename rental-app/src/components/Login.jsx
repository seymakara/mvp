import React from 'react';
import FormTemplate from './FormTemplate';
import Joi from 'joi-browser'
class Login extends FormTemplate {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = () => {
    const errors = this.validate();
    this.setState({ errors });
  }

  render() {
    let { password, username } = this.state.errors
    return (
      < div >
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username', username)}
          {this.renderInput('password', 'Password', password, 'password')}
          {this.renderButton('Login')}
        </form>
      </div >
    );
  }
}

export default Login;