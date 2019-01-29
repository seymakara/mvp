import React, { Component } from 'react';

class FormTemplate extends Component {
  state = {
    data: {}
  }

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  }

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data })
  }

  renderButton = (label) => {
    return (
      <button className="btn btn-primary">Login</button>
    )
  }

  renderInput = (name, label, type = 'text') => {
    const { data } = this.state
    return (
      < div className="form-group" >
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          value={data[name]}
          onChange={this.handleChange}
          autoFocus
          id={name}
          className="form-control"
          required={true}
        />
      </div >
    )
  }

  renderSelect = (name, label, options) => {
    const { data } = this.state
    return (
      < div className="form-group" >
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          value={data[name]}
          onChange={this.handleChange}
          autoFocus
          id={name}
          className="form-control"
          required={true}
        >
          <option value='' />
          {options.map(option => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div >
    )
  }






}

export default FormTemplate;