import React, { Component } from 'react';
import Joi from 'joi-browser';
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

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });

    if (!result.error) { return null };

    const errors = {};
    result.error.details.map(detail => {
      errors[detail.path[0]] = detail.message
    })

    return errors;
  }

  validationOnChange = ({ name, value }) => {
    const property = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(property, schema);
    return error ? error.details[0].message : null;
  }

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">{label}</button>
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