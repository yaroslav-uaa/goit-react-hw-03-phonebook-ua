import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import f from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getContact({ ...this.state, id: uuidv4() });
    this.setState({ name: '', number: '' });
    
  }
  
  handleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }


  render() {
    const { name, number } = this.state;
    return (
      <form className={f.form} onSubmit={this.handleSubmit}>
        <label className={f.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={this.handleNameChange}
            required
          />
        </label>
        <label className={f.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter your number"
            onChange={this.handleNameChange}
            required
          />
        </label>
        <button type="submit" className={f.btn}>Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  getContact: PropTypes.func,
};

export default Form;
