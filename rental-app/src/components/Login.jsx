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
    const { data } = this.state
    return (
      < div >
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name='username'
              value={data.username}
              onChange={this.handleChange}
              autoFocus
              id='username'
              type="text"
              className="form-control"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name='password'
              value={data.password}
              onChange={this.handleChange}
              id='password'
              type="password"
              className="form-control"
              required={true}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div >
    );
  }
}

export default Login;