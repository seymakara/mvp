import React from 'react';
import FormTemplate from './FormTemplate';
import Joi from 'joi-browser'
class Login extends FormTemplate {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  }

  validate = () => {
    const errors = {};

    const { data } = this.state;
    if (data.username.trim() === '') {
      errors.username = 'Username is required'
    }
    if (data.password.trim() === '') {
      errors.password = 'Password is required'
    }
    return errors;
    // const result = Joi.validate(this.state.data, this.schema);
    // console.log(result);
    // return result.details;
  }

  validationOnChange = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') { return 'Username is required' }
    };
    if (name === 'password') {
      if (value.trim() === '') { return 'password is required' }
    };
  }

  doSubmit = () => {
    // this.props.history.push('/movies')
    const errors = this.validate();
    this.setState({ errors });
    // if (errors) return;
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