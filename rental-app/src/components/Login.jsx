import React, { Component } from 'react';


class Login extends Component {
  state = {
    account: { username: '', password: '' }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!')
  }

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account })
  }

  render() {
    const { account } = this.state
    return (
      < div >
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name='username'
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              id='username'
              type="text"
              className="form-control"
              required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name='password'
              value={account.password}
              onChange={this.handleChange}
              id='password'
              type="password"
              className="form-control"
              required="true"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div >
    );
  }
}

export default Login;