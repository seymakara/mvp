import React, { Component } from 'react';

class FormTemplate extends Component {
  state = {
    data: {}
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data })
  }





}

export default FormTemplate;