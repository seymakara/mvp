import React, { Component } from 'react';

class FormTemplate extends Component {
  state = {
    data: {},
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  }

  handleChange = ({ target }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validationOnChange(target);
    if (errorMessage) { errors[target.name] = errorMessage }
    else { delete errors[target.name] };

    const data = { ...this.state.data };
    data[target.name] = target.value;
    this.setState({ data, errors })
  }

  renderButton = (label) => {
    return (
      <button className="btn btn-primary">{label}</button>
    )
  }

  renderInput = (name, label, error, type = 'text') => {
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
        />
        {error && <div className="alert alert-danger">{error}</div>}
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