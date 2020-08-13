import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './PhonebookForm.module.css';

const { form, input, inputLabel, addBtn } = styles;

export default class PhonebookForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  nameId = shortid.generate();
  NumberId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    // const nameId = shortid.generate();
    // const numberId = shortid.generate();

    return (
      <>
        <form className={form} onSubmit={this.handleSubmit}>
          <label className={inputLabel} htmlFor={this.nameId}>
            Name:
            <input
              className={input}
              type="text"
              placeholder="First/Last name"
              value={name}
              onChange={this.handleChange}
              name="name"
              id={this.nameId}
              // required
            />
          </label>
          <label className={inputLabel} htmlFor={this.numberId}>
            Number:
            <input
              className={input}
              type="text"
              placeholder="tel# +XXX-XX-..."
              value={number}
              onChange={this.handleChange}
              name="number"
              id={this.numberId}
              // required
            />
            <button type="button" className={addBtn}>
              Add contact
            </button>
          </label>
        </form>
      </>
    );
  }
}
